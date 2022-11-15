<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 面包屑 -->
        <div style="border-bottom: 2px solid #f4f4f5; margin-bottom: 15px">
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="margin-bottom: 15px"
          >
            <el-breadcrumb-item>学科管理</el-breadcrumb-item>
            <el-breadcrumb-item>目录管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- end -->
        <!-- 目录管理 -->
        <!-- 搜索 -->
        <el-form
          :inline="true"
          :model="directorysQuery"
          class="demo-form-inline"
        >
          <el-form-item label="目录名称">
            <el-input
              v-model="directorysQuery.directoryName"
              @keyup.enter="onSearch"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="directorysQuery.state" placeholder="请选择">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="clear">清除</el-button>
            <el-button type="primary" @click="onSearch">搜索</el-button>
          </el-form-item>
          <!-- <el-form-item style="padding-left: 640px; color: #409EFF;">
            <span><i class="el-icon-back"></i>返回学科</span>
          </el-form-item> -->
          <el-button
            class="filter-item fr"
            style="margin-left: 10px"
            type="success"
            icon="el-icon-edit"
            @click="handleOpen"
            >新增目录</el-button
          >
          <!-- {{$t('table.directorysNew')}} -->
        </el-form>

        <el-alert :title="`数据一共${total}条`" type="info" show-icon>
        </el-alert>
        <!-- end -->

        <!-- 数据 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号">
            <!-- <template #default="scope">
              <div>
                {{ (page.page - 1) * page.limit + scope.$index + 1 }}
              </div>
            </template> -->
          </el-table-column>
          <el-table-column prop="subjectName" label="所属学科" >
          </el-table-column>
          <el-table-column prop="directoryName" label="目录名称" >
          </el-table-column>
          <el-table-column
            prop="username"
            label="创建者"
            width="180"
          ></el-table-column>
          <el-table-column prop="addDate" label="创建日期" >
            <template #default="{ row }">
              {{ dayjs(row.addDate).format("YYYY-MM-DD hh:mm") }}
            </template>
          </el-table-column>
          <el-table-column
            prop="totals"
            label="面试题数量"
            width="100"
          ></el-table-column>
          <el-table-column prop="state" label="状态">
            <template #default="{ row }">
              {{ row.state === 1 ? "已启用" : "已禁用" }}
            </template>
          </el-table-column>
          <el-table-column prop="" label="操作" width="150px">
            <template #default="{ row }">
              <el-link
                :underline="false"
                type="primary"
                style="padding-right: 10px"
                @click="handleChange(row)"
              >
                {{ row.state === 0 ? "启用" : "禁用" }}
              </el-link>
              <el-link
                :underline="false"
                type="info"
                :disabled="row.state === 0"
                style="padding-right: 10px"
                @click="handleEdit(row)"
                >修改</el-link
              >
              <!-- {{row}} -->
              <el-link
                :underline="false"
                type="info"
                :disabled="row.state === 0"
                @click="handleDel(row)"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- end -->

        <!-- 分页 -->

        <el-pagination
          style="margin-top: 20px; text-align: right"
          layout="prev, pager, next, sizes, jumper"
          :total="total"
          :page-sizes="[5, 10, 15, 20]"
          :page-size.sync="directorysQuery.pagesize"
          :current-page.sync="directorysQuery.page"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
        <!-- end -->
      </el-card>

      <!-- 新增弹窗 -->
      <DirectoryAdd
      ref="directoryAdd"
      :visible="visible"
      :formData="formData"
      @closeDialog="visible = false"
      @updateList="updateList()"
      ></DirectoryAdd>

    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { list, remove, changeState } from '@/api/hmmm/directorys'
import DirectoryAdd from './../components/directorys-add'
// import { list as getCompanys } from '@/api/hmmm/companys'
// import { list as getQuestion } from '@/api/hmmm/questions'

export default {
  name: 'Directorys',
  components: {
    DirectoryAdd
  },
  data () {
    return {
      directorysQuery: {
        id: null,
        directoryName: null,
        state: null,
        page: 1,
        pagesize: 10
      }, // 目录列表数据
      tableData: [], // 表单渲染数据
      total: 0, // 总条数
      dayjs,
      visible: false, // 弹窗
      formData: {
        id: null,
        directoryName: null,
        subjectID: null
      }

    }
  },
  async created () {
    this.getDirectorysList()
  },
  methods: {
    // 新增弹窗
    handleOpen () {
      console.log(111)
      this.visible = true
      this.$refs.directoryAdd.title = '新增目录'
    },
    // 修改弹窗
    handleEdit (val) {
      this.visible = true
      this.formData = val
      // 回显
      // this.$refs.directoryAdd.dialogForm.id = val.id
      this.$refs.directoryAdd.dialogForm.subjectID = val.subjectID
      this.$refs.directoryAdd.dialogForm.directoryName = val.directoryName
      console.log(val)
      this.$refs.directoryAdd.title = '修改目录'
    },
    // 禁用/启用转换
    async handleChange (val) {
      await changeState({
        id: val.id,
        state: val.state === 1 ? 0 : 1
      })
      console.log(val.id, val.state)
      this.$message.success('切换成功')
      val.state = val.state === 1 ? 0 : 1
    },
    // 删除
    handleDel (val) {
      // console.log(1)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          await remove(val)
          this.getDirectorysList()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 清空表单
    clear () {
      this.directorysQuery = {
        directoryName: '',
        state: '',
        page: 1,
        pagesize: 5
      }
      this.getDirectorysList()
    },
    // 进行查询
    onSearch () {
      this.directorysQuery.page = 1
      this.getDirectorysList()
    },
    // 渲染列表
    async getDirectorysList () {
      if (this.$route.query.id) {
        this.formData.subjectID = this.$route.query.id
        this.formData.subjectName = this.$route.query.name
        const { data } = await list(this.formData)
        console.log(data)
        this.tableData = data.items
        this.total = data.counts
      } else {
        const { data } = await list(this.directorysQuery)
        // console.log(data)
        this.tableData = data.items
        this.total = data.counts
      }
    },
    // 分页
    handleSizeChange (size) {
      this.directorysQuery.page = 1
      this.directorysQuery.pagesize = size
      this.getDirectorysList()
    },
    // 切换页面
    handleCurrentChange (page) {
      this.directorysQuery.page = page
      this.getDirectorysList()
    },
    // 更新列表
    updateList () {
      this.directorysQuery.page = 1
      this.getDirectorysList()
    }
    // 自定义索引列
    // indexMethod (index) {
    //   return index + 1 + (this.page - 1) * this.size
    // }
  }
}
</script>

<style lang="scss" scoped>
.el-table .el-table__cell{
  text-align: center;
}
</style>
