<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <div slot="header">{{ $route.query.id ? "试题修改" : "试题录入" }}</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <!-- 学科 -->
          <el-form-item label="学科：" prop="subjectID">
            <el-select
              @change="changeSubject"
              v-model="ruleForm.subjectID"
              placeholder="请选择"
              style="width: 400px"
            >
              <el-option
                v-for="item in subjectOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 目录 -->
          <el-form-item label="目录：" prop="catalogID">
            <el-select
              v-model="ruleForm.catalogID"
              placeholder="请选择"
              style="width: 400px"
            >
              <el-option
                v-for="item in catalogOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 企业 -->
          <el-form-item label="企业：" prop="enterpriseID">
            <el-select
              v-model="ruleForm.enterpriseID"
              placeholder="请选择"
              style="width: 400px"
            >
              <el-option
                v-for="item in enterpriseOptions"
                :key="item.id"
                :label="item.company"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 城市 -->
          <el-form-item label="城市：" prop="city">
            <el-select
              v-model="ruleForm.province"
              placeholder="请选择"
              @change="getCity"
              style="width: 198px"
            >
              <el-option
                v-for="item in cityOptions"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>

            <el-select
              v-model="ruleForm.city"
              placeholder="请选择"
              style="width: 198px; margin-left: 4px"
            >
              <el-option
                v-for="item in areaOptions"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 方向 -->
          <el-form-item label="方向：" prop="direction">
            <el-select
              v-model="ruleForm.direction"
              placeholder="请选择"
              style="width: 400px"
            >
              <el-option
                v-for="item in directionOptions"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 题型 -->
          <el-form-item label="题型：" prop="questionType">
            <el-radio-group
              v-model="ruleForm.questionType"
              @change="changeRadio({})"
            >
              <el-radio
                v-for="item in questionType"
                :key="item.value"
                :label="item.value + ''"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>

          <!-- 难度 -->
          <el-form-item label="难度：" prop="difficulty">
            <el-radio-group v-model="ruleForm.difficulty">
              <el-radio
                v-for="item in difficulty"
                :key="item.value"
                :label="item.value + ''"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>

          <!-- 题干 -->
          <el-form-item label="题干：" prop="question">
            <quill-editor
              v-model="ruleForm.question"
              ref="myQuillEditor"
              :options="editorOptions"
              @blur='checkQustion'
            ></quill-editor>
          </el-form-item>

          <!-- 选项 -->
          <el-form-item
            label="选项："
            prop="options"
            v-if="ruleForm.questionType !== '3'"
          >
            <div
              class="option_item"
              v-for="item in ruleForm.options"
              :key="item.code"
            >
              <el-radio
                v-if="ruleForm.questionType === '1'"
                @change="changeRadio(item)"
                v-model="item.isRight"
                style="margin-right: 0"
                :label="true"
                >{{ item.code }}：</el-radio
              >
              <el-checkbox
                v-if="ruleForm.questionType === '2'"
                v-model="item.isRight"
                style="margin-right: 0"
                :label="true"
                >{{ item.code }}：</el-checkbox
              >
              <el-input v-model="item.title" style="width: 240px"></el-input>
              <el-upload
                style="margin-left: 4px"
                action="https://jsonplaceholder.typicode.com/posts/"
                class="avatar-uploader"
                :on-success="(res, file) => {
                  handleAvatarSuccess(item, res, file);
                }"
                :show-file-list="false"
              >
                <img v-if="item.img" :src="item.img" class="avatar" />
                <span v-else>上传图片</span>
                <i class="el-icon-circle-close" />
              </el-upload>
            </div>

            <!-- 添加按钮 -->
            <el-button
              type="danger"
              :disabled="ruleForm.questionType !== '2'"
              @click="addOption"
              size="small"
              >+增加选项与答案</el-button
            >
          </el-form-item>

          <!-- 解析视频 -->
          <el-form-item label="解析视频：">
            <el-input
              v-model="ruleForm.videoURL"
              style="width: 400px"
            ></el-input>
          </el-form-item>

          <!-- 答案解析 -->
          <el-form-item label="答案解析：" prop="answer">
            <quill-editor
              v-model="ruleForm.answer"
              ref="myQuillEditor"
              :options="editorOptions"
              @blur='checkAnswer'
            ></quill-editor>
          </el-form-item>

          <!-- 题目备注 -->
          <el-form-item label="题目备注：">
            <el-input
              type="textarea"
              v-model="ruleForm.remarks"
              :rows="4"
              style="width: 400px"
            ></el-input>
          </el-form-item>

          <!-- 试题标签 -->
          <el-form-item label="试题标签：" prop="tags">
            <el-select
              v-model="ruleForm.tags"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="请选择试题标签"
              style="width: 400px"
            >
              <el-option
                v-for="item in tagsOptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <!-- 提交和修改按钮 -->
          <el-form-item>
            <el-button type="primary" v-if="!$route.query.id" @click="submit()"
              >确认提交</el-button
            >
            <el-button v-else @click="revise()" type="success"
            >确认修改</el-button
          >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { simple as getSubjectOptions } from '@/api/hmmm/subjects'
import { simple as getCatalogOptions } from '@/api/hmmm/directorys'
import { list as getCompanyOptions } from '@/api/hmmm/companys'
import { simple as getTagOptions } from '@/api/hmmm/tags'
import {
  provinces as getCityOptions,
  citys as getAreaOptions
} from '@/api/hmmm/citys'
import { direction, questionType, difficulty } from '@/api/hmmm/constants'
import { add, detail, update } from '@/api/hmmm/questions'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
export default {
  name: 'questions-new',
  components: {
    quillEditor
  },
  data () {
    return {
      // img: '',
      editorOptions: {
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote'],
            ['code-block', 'image', 'link']
          ],
          // 语法高亮
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value
          }
        }
      },
      ruleForm: {
        // 学科
        subjectID: null,
        // 目录
        catalogID: null,
        // 企业
        enterpriseID: null,
        // 城市
        province: null,
        // 地区
        city: null,
        // 方向
        direction: null,
        // 题型
        questionType: '1',
        // 难度
        difficulty: '1',
        // 题干
        question: null,
        // 答案
        answer: null,
        tags: null,
        // 选项
        options: [
          { isRight: false, code: 'A', title: '', img: '' },
          { isRight: false, code: 'B', title: '', img: '' },
          { isRight: false, code: 'C', title: '', img: '' },
          { isRight: false, code: 'D', title: '', img: '' }
        ]
      },
      rules: {
        // 学科
        subjectID: [
          { required: true, message: '请选择学科', trigger: 'change' }
        ],
        // 目录
        catalogID: [
          { required: true, message: '请选择目录', trigger: 'change' }
        ],
        // 企业
        enterpriseID: [
          { required: true, message: '请选择企业', trigger: 'change' }
        ],
        // 城市
        city: [{ required: true, message: '请选择地区', trigger: 'change' }],
        // 方向
        direction: [
          { required: true, message: '请选择方向', trigger: 'change' }
        ],
        // 题型
        questionType: [
          { required: true, message: '请选择题型', trigger: 'change' }
        ],
        // 难度
        difficulty: [
          { required: true, message: '请选择难度', trigger: 'change' }
        ],
        // 题干
        question: [
          { required: true, message: '请输入题干', trigger: 'blur' }
        ],
        // 答案解析
        answer: [
          { required: true, message: '请输入答案解析', trigger: 'blur' }
        ],
        tags: [
          { required: true, message: '请输入试题标签', trigger: 'blur' }
        ]
      },
      // 学科选项
      subjectOptions: [],
      // 目录选项
      catalogOptions: [],
      // 企业选项
      enterpriseOptions: [],
      // 标签选项
      tagsOptions: [],
      // 城市选项
      cityOptions: getCityOptions(),
      // 地区选项
      areaOptions: [],
      tags: [],
      // 方向选项
      directionOptions: direction,
      // 题型
      questionType,
      // 难度
      difficulty
    }
  },
  created () {
    this.getSubjectOptions()
    this.getCompanyOptions()
    if (this.$route.query.id) {
      this.getQuestion()
    }
  },
  watch: {
    '$route.query': function () {
      if (this.$route.query.id) {
        this.getQuestion()
      } else {
        this.ruleForm = {
          subjectID: null,
          catalogID: null,
          enterpriseID: null,
          province: null,
          city: null,
          direction: null,
          questionType: '1',
          difficulty: '1',
          question: null,
          answer: null,
          tags: null,
          options: [
            { isRight: false, code: 'A', title: '', img: '' },
            { isRight: false, code: 'B', title: '', img: '' },
            { isRight: false, code: 'C', title: '', img: '' },
            { isRight: false, code: 'D', title: '', img: '' }
          ]
        }
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
      }
    }
  },
  methods: {
    // 获取信息
    async getQuestion () {
      const { data } = await detail({ id: this.$route.query.id })
      data.tags = data.tags.split(',')
      data.options = data.options.map((item) => {
        item.isRight = item.isRight === 1
        return item
      })
      this.ruleForm = data
      const res = await getCatalogOptions({
        subjectID: this.ruleForm.subjectID
      })
      this.catalogOptions = res.data
      const res2 = await getTagOptions({
        subjectID: this.ruleForm.subjectID
      })
      this.tagsOptions = res2.data
    },

    // 改变学科并联动目录和企业选项
    async changeSubject (subjectID) {
      this.ruleForm.catalogID = null
      const res = await getCatalogOptions({
        subjectID: this.ruleForm.subjectID
      })
      this.catalogOptions = res.data
      this.ruleForm.tags = null
      const res2 = await getTagOptions({ subjectID: this.ruleForm.subjectID })
      this.tagsOptions = res2.data
    },
    // 获取学科
    async getSubjectOptions () {
      const res = await getSubjectOptions()
      this.subjectOptions = res.data
      console.log(res.data)
    },
    // 获取企业
    async getCompanyOptions () {
      const res = await getCompanyOptions({ pagesize: 1000 })
      this.enterpriseOptions = res.data.items
    },
    // 获取城市和地区
    getCity (city) {
      this.ruleForm.city = null
      this.areaOptions = getAreaOptions(city)
    },
    // 校验题干
    checkQustion () {
      this.$refs.ruleForm.validateField('question')
    },
    checkAnswer () {
      this.$refs.ruleForm.validateField('answer')
    },

    handleAvatarSuccess (item, res, file) {
      item.img = URL.createObjectURL(file.raw)
    },

    // 题型
    // 选择单选框
    changeRadio (item) {
      this.ruleForm.options.forEach((item) => {
        item.isRight = false
      })
      // 自己选中
      item.isRight = true
    },
    // 增加选项与答案
    addOption () {
      this.ruleForm.options.push({
        isRight: false,
        code: String.fromCharCode(65 + this.ruleForm.options.length),
        title: '',
        img: ''
      })
    },
    // 提交
    submit () {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const data = { ...this.ruleForm }
          data.tags = data.tags.join(',')
          await add(data)
          this.$message.success('添加成功')
          this.$router.push('/questions/list')
        }
      })
    },
    // 修改
    revise () {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const data = { ...this.ruleForm }
          data.tags = data.tags.join(',')
          await update(data)
          this.$message.success('修改成功')
          this.$router.push('/questions/list')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .ql-editor {
  height: 200px;
}
::v-deep .ql-toolbar.ql-snow {
  padding: 0 8px;
}
.option_item {
  padding-bottom: 20px;
}
.avatar-uploader {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
::v-deep .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  width: 100px;
  height: 60px;
  line-height: 60px;
}
::v-deep .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
::v-deep .avatar-uploader i {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  background: #fff;
  font-size: 18px;
  color: #999;
}
.avatar {
  width: 100px;
  height: 60px;
  display: block;
  overflow: hidden;
}
</style>
