<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 首行 -->
        <div class="butt_D1">
          <span style="font-size: 12px; color: red; margin-bottom: 20px"
            >说明：目前支持学科和关键字的筛选</span
          >
          <el-button type="success" icon="el-icon-edit" size="small" @click="$router.push('/questions/new')">新增试题</el-button>
        </div>
        <!-- 表单 -->
        <MyForm :list="list" @Submit="submit" ref="formData"></MyForm>
        <!-- 标签 -->
        <template>
          <el-tabs
            type="card"
            @tab-click="handleClick"
            class="tabs"
            value="all"
          >
            <el-tab-pane label="全部" name="all" value="first"></el-tab-pane>
            <el-tab-pane label="待审核" name="1"></el-tab-pane>
            <el-tab-pane label="已审核" name="2"></el-tab-pane>
            <el-tab-pane label="已拒绝" name="3"></el-tab-pane>
          </el-tabs>
        </template>
        <!-- 提示消息 -->
        <el-alert
          :title="`数据一共${this.total}条`"
          type="info"
          show-icon
        ></el-alert>
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="number"
            label="试题编号"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="subject"
            label="学科"
            width="90"
          ></el-table-column>
          <el-table-column
            prop="catalog"
            label="目录"
            width="80"
          ></el-table-column>
          <el-table-column
            prop="questionType"
            label="题型"
            width="80"
            :formatter="formatterquestion"
          />
          <el-table-column
            prop="question"
            label="题干"
            width="300"
          ></el-table-column>
          <el-table-column prop="addDate" label="录入时间" width="120">
            <template #default="{ row }">
              {{ formatTime(row.addDate, "YYYY-MM-DD") }}
            </template>
          </el-table-column>
          <el-table-column
            prop="difficulty"
            label="难度"
            width="90"
            :formatter="formatterdifficulty"
          />
          <el-table-column
            prop="chkUser"
            label="录入人"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="chkState"
            label="审核状态"
            width="90"
            :formatter="formatterchkState"
          />
          <el-table-column
            prop="chkRemarks"
            label="审核意见"
            width="90"
          ></el-table-column>
          <el-table-column
            prop="chkUser"
            label="审核人"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="publishState"
            label="发布状态"
            width="120"
            :formatter="formatterpublish"
          />
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="{ row }">
              <el-button type="text" size="small" @click="handlePreview(row.id)">预览</el-button>
              <el-button type="text" size="small" @click="handelechk(row.id)" :disabled="row.chkState !== 1  ? true : false">审核</el-button>
              <el-button
                type="text"
                size="small"
                :disabled="row.publishState === 1 ? true : false"
                @click="$router.push(`/questions/new/?id=${row.id}`)"
                >修改</el-button
              >
              <el-button type="text" size="small" @click="hanelTop(row)">{{
                row.publishState === 0 ? "上架" : "下架"
              }}</el-button>
              <el-button
                type="text"
                size="small"
                @click="handelDel(row.id)"
                :disabled="row.publishState === 1 ? true : false"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="list.page"
          :page-sizes="[1, 3, 5, 10]"
          :page-size="list.pagesize"
          layout="  prev, pager, next,sizes, jumper"
          :total="total"
          style="float: right; padding-bottom: 10px"
        >
        </el-pagination>
      </el-card>
      <el-dialog
        title="题目审核"
        :visible="dialogVisible"
        width="30%"
      >
      <el-form ref="formDatatwo" :model="audit">
        <el-form-item prop="chkState">
            <el-radio-group v-model="audit.chkState">
            <el-radio :label="2">通过</el-radio>
            <el-radio :label="3">拒绝</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item  prop="chkRemarks">
          <el-input type="textarea" v-model="audit.chkRemarks" ></el-input>
        </el-form-item>
      </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handelSubmitChk">确 定</el-button>
        </span>

      </el-dialog>
        <questions :isShowDialog.sync="isShowDialog" :list="inlist"></questions>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { choice, remove, choicePublish, choiceCheck, detail } from '@/api/hmmm/questions.js'
import questions from '@/module-hmmm/components/questions'
// import { simple } from '@/api/hmmm/subjects.js'
// import { simple as directorysList } from '@/api/hmmm/directorys.js'
import {
  chkType,
  difficulty,
  publishType,
  questionType,
  direction
} from '@/api/hmmm/constants'
import MyForm from './companys/questions-choice-form.vue'
export default {
  components: {
    MyForm,
    questions
  },
  data () {
    return {
      subject: '',
      tableData: [],
      total: 0,
      value: '',
      list: {
        subjectID: null, // 学科
        tags: null, // 标签名称
        keyword: null, // 关键字
        questionType: null, // 试题类型
        city: null, // 企业城市
        shortName: null, // 企业简称
        remarks: null, // 题目备注
        creatorID: null, // 录入人
        difficulty: null, // 难度
        direction: null, // 方向
        catalogID: null, // 目录
        page: 1,
        publishState: null,
        pagesize: 5,
        chkState: 'all',
        provAndCity: {
          province: '',
          city: ''
        }
      },
      isShowDialog: false,
      direction,
      dialogVisible: false,
      audit: {
        id: null,
        chkState: 1,
        chkRemarks: ''
      },
      inlist: {}
    }
  },
  created () {
    this.getchoice()
  },
  methods: {
    handleClick ({ _props }, event) {
      this.list.chkState = _props.name
      this.getchoice()
      console.log(_props.name)
    },
    // 每页条数发生变化的处理函数
    handleSizeChange (val) {
      // 最新的每页条数
      this.list.pagesize = val
      this.list.page = 1
      if (this.list.page === 1) {
        this.getchoice()
      }
    },
    // 页码发生变化的处理函数
    handleCurrentChange (val) {
      // 最新的页码
      this.list.page = val
      this.getchoice()
    },
    // 获取精选题库列表
    async getchoice () {
      const params = { ...this.list }
      if (params.chkState === 'all') params.chkState = null
      const {
        data: { counts, items, pagesize, page }
      } = await choice(params)
      console.log({ counts, items, pagesize })
      this.page = page || null
      this.tableData = items
      this.total = counts || null
      this.list.pagesize = +pagesize || null
      this.tableData.map((item) => {
        // 处理文本数据
        item.question = this.filtersText(item.question)
      })
      this.$message.success('请求成功')
    },
    // ----------------------------------------------------处理数据
    // 处理题型数据
    formatterquestion (row, column, cellValue, index) {
      const obj = questionType.find((item) => item.value === +row.questionType)
      return obj ? obj.label : '未知'
    },
    // 处理难度数据
    formatterdifficulty (row) {
      const obj = difficulty.find((item) => item.value === +row.difficulty)
      return obj ? obj.label : '未知'
    },
    // 处理审核状态
    formatterchkState (row) {
      const obj = chkType.find((item) => item.value === +row.chkState)
      return obj ? obj.label : '未知'
    },
    // 处理发布状态
    formatterpublish (row) {
      // console.log(row.publishState)
      const obj = publishType.find((item) => item.value === row.publishState)
      return obj ? obj.label : '未知'
    },
    // 处理富文本编辑器返回的数据
    filtersText (html) {
      return (
        html
          .replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n')
          .replace(/<br\/?>/gi, '\n')
          .replace(/<[^>/]+>/g, '')
          .replace(/(\n)?<\/([^>]+)>/g, '')
          .replace(/\u00a0/g, ' ')
          .replace(/&nbsp;/g, ' ')
          // .replace(/<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>/g, '')
          .replace(/<\/?(img|table)[^>]*>/g, '') // 去除图片和表格
          .replace(/<\/?(a)[^>]*>/g, '')
      )
    },
    // 处理时间格式
    formatTime (time, str) {
      return dayjs(time).format(str)
    },
    // -------------------------处理搜索表单
    // 搜索按钮
    async submit () {
      const lin = this.$refs.formData.list
      if (lin.chkState === 'all') lin.chkState = null
      const {
        data: { counts, items, pagesize }
      } = await choice(lin)
      console.log({ counts, items, pagesize })
      this.tableData = items
      this.total = counts
      this.list.pagesize = +pagesize
      this.tableData.map((item) => {
        // 处理文本数据
        item.question = this.filtersText(item.question)
      })
    },
    // 删除按钮
    handelDel (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        type: 'warning'
      })
        .then(async () => {
          console.log(id)
          await remove(id)
          this.getchoice()
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    // 上架按钮
    hanelTop (row) {
      this.$confirm('此操作将上架该试题, 是否继续?', '提示', {
        type: 'warning'
      })
        .then(async () => {
          console.log(row)
          if (row.publishState === 0) {
            row.publishState = 1
            await choicePublish({
              id: row.id,
              publishState: Number(row.publishState)
            })
          } else {
            row.publishState = 0
            await choicePublish({
              id: row.id,
              publishState: Number(row.publishState)
            })
          }
          this.getchoice()
          row.publishState === 1
            ? (this.forbidden = true)
            : (this.forbidden = false)
        })
        .catch(() => {
          this.$message.info('已取消上架')
        })
    },
    // 审核
    handelechk (id) {
      this.dialogVisible = true
      this.audit.id = id
    },
    // 审核按钮
    async handelSubmitChk () {
      this.dialogVisible = false
      const res = await choiceCheck(this.$refs.formDatatwo.model)
      console.log(res)
      this.$refs.formDatatwo.resetFields()
      this.getchoice()
    },
    // 预览
    async handlePreview (id) {
      this.isShowDialog = true
      const { data } = await detail({ id })
      console.log(data)
      console.log(id)
      this.inlist = data
    }

  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .butt_D1 {
    display: flex;
    justify-content: space-between;
  }
  .input_d1 {
    float: left;
  }
  .btn {
    float: right;
    margin-right: 20px;
  }
}
</style>
