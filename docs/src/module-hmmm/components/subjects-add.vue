<template>
  <el-dialog :title="title" :visible="visible" :formId="formId" width="30%" @close="cancel">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="学科名称" prop="subjectName">
        <el-input style="width: 60%" v-model="form.subjectName" ></el-input>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch
          v-model="form.isFrontDisplay"
          active-value="1"
          inactive-value="0"
        ></el-switch>
      </el-form-item>
    </el-form>
    <span style="margin-left: 60%" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="addSubjects">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { update, add } from '@/api/hmmm/subjects.js'
export default {
  name: 'SubjectsAdd',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    // 父组件传回显id
    formId: {
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      title: '新增学科',
      subjectName: '',
      form: {
        id: '',
        subjectName: '',
        isFrontDisplay: 0
      },
      rules: {
        subjectName: [
          { required: true, message: '学科名不能为空', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    // 关闭弹窗方法
    cancel () {
      this.$emit('closeDialog')
      this.$refs.form.resetFields()
      this.form = {
        id: '',
        subjectName: '',
        isFrontDisplay: 0
      }
    },

    // 添加及新增的方法
    addSubjects () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          if (this.formId) {
            this.form.id = this.formId
            await update(this.form)
          } else {
            await add(this.form)
            // console.log(this.form)
          }
        } else {
          this.$message.error('操作失败')
          return false
        }
        this.$emit('closeDialog')
        this.$refs.form.resetFields()
        this.form = {
          subjectName: '',
          isFrontDisplay: 0
        }
      })
    }
  }
}
</script>

<style scoped lang='less'></style>
