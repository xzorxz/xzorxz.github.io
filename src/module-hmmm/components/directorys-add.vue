<template>
  <el-dialog
        :title="title"
        :visible="visible"
        width="30%"
        :before-close="handleClose"
      >
        <el-form :model="dialogForm" :rules="rules" ref="dialogForm" label-width="80px" >
          <el-form-item label="所属学科" prop="subjectID">
            <el-select style="width: 100%" v-model="dialogForm.subjectID" >
              <el-option
              v-for="item in selectList"
              :value="item.value"
              :label="item.label"
              :key="item.value"
            ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目录名称" prop="directoryName">
            <el-input v-model="dialogForm.directoryName"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleAdd"
            >确 定</el-button
          >
        </span>
      </el-dialog>
</template>

<script>
import { update, add } from '@/api/hmmm/directorys'
import { simple } from '@/api/hmmm/subjects'
export default {
  name: 'DirectorysAdd',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    // 父组件传回显
    formData: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      dialogForm: {
        id: '',
        subjectID: '',
        directoryName: ''
      },
      rules: {
        subjectID: [
          { required: true, message: '请选择', trigger: 'blur' }
        ],
        directoryName: [
          { required: true, message: '请输入目录名称', trigger: 'blur' }
        ]
      },
      selectList: [],
      title: '新增目录'
    }
  },
  async created () {
    this.getSelectList()
  },
  methods: {
    async getSelectList () {
      const { data } = await simple()
      this.selectList = data
    },
    // 关闭弹窗
    handleClose () {
      this.$emit('closeDialog')
      this.$emit('updateList')
      this.$refs.dialogForm.resetFields()
      this.dialogForm = {
        id: null,
        subjectID: null,
        directoryName: null
      }
    },
    handleOpen () {
      this.visible = true
    },
    async handleAdd () {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          if (this.formData.id) {
            this.dialogForm.id = +this.formData.id
            this.$message.success('修改目录成功')
            await update(this.dialogForm)
          } else {
            this.$message.success('新增目录成功')
            await add(this.dialogForm)
          }
          this.getSelectList()
        } else {
          this.$message.error('操作失败')
          return false
        }
        this.handleClose()
      })
    }
  }
}
</script>

<style>

</style>
