<template>
  <div class='container'>
    <el-dialog :title="dialogTitle" :visible="showDialog" @close="closeDialog" @click.native="isShow=false" @open="openDialog">
    <!-- 表单 -->
    <el-form ref="formRef" label-width="120px" :model="form" :rules="rules">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="form.title" style="width:50%" placeholder="请输入文章标题" />
      </el-form-item>
      <el-form-item label="文章内容" prop="articleBody">
        <quill-editor
        v-model="form.articleBody"
        :options="editorOptions"
        @blur="$refs.formRef.validateField('articleBody')"
        >
        </quill-editor>
      </el-form-item>
      <el-form-item label="视频地址" prop="videoURL">
        <el-input v-model="form.videoURL" style="width:50%" placeholder="请输入视频地址" />
      </el-form-item>
    </el-form>
    <!-- footer插槽 -->
    <template v-slot:footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确定</el-button>
    </template>
  </el-dialog>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import { add, update } from '@/api/hmmm/articles'
export default {
  name: 'ArticlesAdd',
  components: {
    quillEditor
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    particulars: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // 表单数据
      form: {
        title: '',
        articleBody: '',
        videoURL: ''
      },
      dialogTitle: '',
      // 表单校验规则
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: ['blur', 'change'] }
        ],
        articleBody: [
          { required: true, message: '请输入文章内容', trigger: ['blur', 'change'] }
        ]
      },
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
      isShow: false
    }
  },
  methods: {
    // 关闭对话框
    closeDialog () {
      this.form = {
        title: '',
        articleBody: '',
        videoURL: ''
      }
      this.$emit('update:showDialog', false)
      this.$refs.formRef.resetFields()
    },
    // 添加技巧
    handleSubmit () {
      // 预校验
      this.$refs.formRef.validate(async boo => {
        if (!boo) return
        if (this.particulars.type === 'add') {
          await add(this.form)
        } else if (this.particulars.type === 'edit') {
          await update({ ...this.form, id: this.particulars.id })
        }
        // 关闭对话框 重置表单
        this.closeDialog()
        // 通知父组件重新获取数据
        this.$emit('reload')
      })
    },
    openDialog () {
      console.log(this.particulars, '6666666')
      if (this.particulars.type === 'add') {
        this.dialogTitle = '添加技巧'
      }
      if (this.particulars.type === 'edit') {
        this.dialogTitle = '修改'
        this.form.title = this.particulars.title
        this.form.articleBody = this.particulars.articleBody
        this.form.videoURL = this.particulars.videoURL
      }
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
</style>
