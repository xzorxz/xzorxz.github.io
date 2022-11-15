<template>
  <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <el-form :model="dialogForm" :rules="rules" ref="dialogForm" label-width="80px" >
          <el-form-item label="所属学科" prop="name">
            <el-select style="width: 100%">
              <el-option label="学科" v-for="item in 10" :key="item">{{item}}</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目录名称" prop="subject">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
</template>

<script>
export default {
  name: 'Adddirectorys',
  data () {
    return {
      dialogForm: {
        subject: '',
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请选择', trigger: 'blur' }
        ],
        subject: [
          { required: true, message: '请输入目录名称', trigger: ['blur', 'change'] }
        ]
      }
    }
  }
}
</script>

<style>

</style>
