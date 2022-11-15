<template>
  <div class="container">
    <el-dialog :title="title" :visible="showDialog" :formId="formId" width="400px" @close="isShowDialog" open=""  >
      <el-form ref="formData" :model="formData" :rules="rules">
        <el-form-item label="所属学科"  prop="subjectID">
          <el-select v-model="formData.subjectID" placeholder="请选择" value="" style="width: 280px">
            <el-option
              v-for="item in subjectOptions"
              :value="item.value"
              :label="item.label"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目录名称" prop="tagName">
          <el-input  v-model="formData.tagName" placeholder="请输入目录名称" style="width: 280px"></el-input>
        </el-form-item>
        <!-- footer插槽 -->
      <!-- <template v-slot:footer> -->
          <el-form-item style="text-align:center">
        <el-button @click="isShowDialog">取消</el-button>
        <el-button type="primary" @click="updateList">确定</el-button>
          </el-form-item>
      <!-- </template> -->
         </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { simple } from '@/api/hmmm/subjects'
import { update, add } from '@/api/hmmm/tags.js'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    formId: {
      type: Number
    }
  },
  data () {
    return {
      formData: {
        id: null,
        subjectID: null,
        tagName: null

      },
      rules: {
        subjectID: [
          { required: true, message: '请选择所属学科', trigger: ['blur', 'change'] }
        ],
        tagName: [
          { required: true, message: '请输入标签名称', trigger: ['blur', 'change'] }
        ]
      },
      subjectOptions: [],
      title: '新增标签'

    }
  },
  created () {
    // 学科下拉选项
    this.getsubjectList()
  },
  methods: {
    isShowDialog () {
      this.$emit('update:showDialog', false)
      // console.log()
      this.$refs.formData.resetFields()
      this.$emit('updateList')
      this.formData = {
        id: null,
        subjectID: null,
        tagName: null
      }
    },
    async getsubjectList () {
      const { data: subjectArr } = await simple()
      console.log({ data: subjectArr }, 98)
      this.subjectOptions = subjectArr
    },
    updateList () {
      this.$refs.formData.validate(async (valid) => {
        if (valid) {
          if (this.formId) {
            this.formData.id = this.formId
            this.$message.success('修改标签成功')
            await update(this.formData)
          } else {
            this.$message.success('新增标签成功')
            await add(this.formData)
            // console.log(res)
          }
        } else {
          this.$message.error('操作失败')
          return false
        }
        this.isShowDialog()
      })
    }

  }
}
</script>

<style scoped lang="less"></style>
