<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 面包屑 -->
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          class="crumbHeader"
        >
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 输入框 -->
        <el-form :inline="true" class="demo-form-inline" >
          <el-form-item label="标签名称" style="margin-right: 40px">
            <el-input v-model="reqParams.tagName"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="reqParams.status" placeholder="请选择">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="clear()">清除</el-button>
            <el-button type="primary" @click="filter()">搜索</el-button>
          </el-form-item>

          <!-- 右侧新增标签 -->
          <el-button
            type="success"
            icon="el-icon-edit"
            style="float: right"
            v-if="$route.query.id"
            @click="$router.back()"
            >返回学科</el-button
          >
          <el-button
            type="success"
            icon="el-icon-edit"
            style="float: right"
            @click="handleShow"
            >新增标签</el-button
          >
        </el-form>

        <!-- alert警告 -->
        <!-- es6语法 -->
        <el-alert
          :title="`数据一共${total}条`"
          type="info"
          show-icon
          :closable="false"
          style="margin-bottom: 15px"
        ></el-alert>

        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%; margin-bottom: 15px;padding-left:20px" ref="formDate">
          <el-table-column type="index" label="序号" width="150">
          </el-table-column>
          <el-table-column prop="subjectName" label="所属学科" >
          </el-table-column>
          <el-table-column prop="tagName" label="标签名称" >
          </el-table-column>
          <el-table-column prop="username" label="创建者" >
          </el-table-column>
          <el-table-column prop="addDate" label="创建日期" >
            <template slot-scope="scope">
              {{ scope.row.addDate | parseTimeByString }}
            </template>
          </el-table-column>
          <el-table-column prop="state" label="状态" >
            <template #default="{ row }">
              {{ row.state === 1 ? "已启用" : "已禁用" }}
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template #default="{ row }">
              <!-- 三个小按钮 -->
              <el-button @click="startRow(row)" type="text" size="small">
                {{ row.state === 1 ? "禁用" : "启用" }}
              </el-button>
              <el-button
                @click="handleShowtwo(row)"
                type="text"
                size="small"
                :disabled="row.state === 1"
              >
                修改
              </el-button>
              <el-button
                @click="deleteRow(row.id)"
                type="text"
                size="small"
                :disabled="row.state === 1"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <!-- page-sizes 每页显示条目个数  total 总条目数
           -->
        <div class="pages">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange "
            :current-page="currentPage"
            :total="total"
            :page-size="10"
            :page-sizes="[10, 20, 30, 50]"
            :pager = 1
            layout="prev,pager, next, sizes,jumper"
            style="float:right;margin-bottom:20px"
          >
          </el-pagination>
        </div>
        <!-- 弹框 -->
      </el-card>
      <tags-add :showDialog.sync="showDialog" ref="addForm" :formId="formId" @getTabledata="getTableData" @updateList="updateList"></tags-add>
    </div>
  </div>
</template>

<script>
import { list, changeState, remove } from '@/api/hmmm/tags.js'
import TagsAdd from '../components/tags-add.vue'

export default {
  components: {
    TagsAdd
  },

  data () {
    return {
      reqParams: {
        page: 1,
        pagesize: 10,
        tagName: null,
        status: null,
        editId: 0,
        subjectName: null
      },
      tableData: [],
      // total: null,
      total: 0,
      // pageSizes: [20, 50, 80, 120],
      currentPage: 1,
      showDialog: false,
      formId: null,
      formData: {
        id: null,
        directoryName: null,
        subjectID: null
      }

    }
  },
  async created () {
    this.getTableData()
    // if (this.$route.query.id) {
    //   this.reqParams.editId = this.$route.query.id
    //   this.reqParams.subjectName = this.$route.query.name
    //   const { data } = await list(this.reqParams)
    //   console.log(data)
    // }
  },
  methods: {
    // 清除
    clear () {
      this.reqParams = {
        tagsName: null,
        state: null,
        page: 1,
        pagesize: 10
      }
    },
    // 搜索学科
    filter () {
      this.reqParams.page = 1
      this.getTableData()
    },

    // 按钮点击事件方法
    async startRow (tag) {
      // rows.splice(index, 1)
      console.log('启用了')
      await changeState({
        id: tag.id,
        state: tag.state === 1 ? 0 : 1
      })
      this.$message.success('操作成功')
      tag.state = tag.state === 1 ? 0 : 1
    },
    editRow () {
      // rows.splice(index, 1)
      console.log('可以修改了')
    },

    deleteRow (id) {
      // rows.splice(index, 1)
      console.log('删除')
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await remove({ id })
        this.getTableData()
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message.info('已取消删除')
      })

      this.getTableData()
    },

    /* 新增标签 */
    handleShow () {
      this.showDialog = true
      this.$refs.addForm.title = '新增标签'
      // console.log(111)
    },
    // 修改
    handleShowtwo (row) {
      this.showDialog = true
      this.formId = row.id
      this.$refs.addForm.title = '修改标签'
      this.$refs.addForm.formData.subjectID = row.subjectID
      this.$refs.addForm.formData.tagName = row.tagName
      // console.log(111)
    },
    // 重新渲染页面
    updateList () {
      this.reqParams.page = 1
      this.getTableData()
    },
    /* 分页器 */

    // 获取标签列表
    async getTableData () {
      if (this.$route.query.id) {
        this.formData.subjectID = this.$route.query.id
        this.formData.subjectName = this.$route.query.name
        const { data } = await list(this.formData)
        console.log(data)
        this.tableData = data.items
        this.total = data.counts
      } else {
        const { data } = await list(this.reqParams)
        console.log(data)
        // 渲染页面数据
        this.tableData = data.items
        this.total = data.counts
      }
    },
    // size发送变化触发的方法
    handleSizeChange (val) {
      console.log(val)
      this.reqParams.page = 1
      this.reqParams.pagesize = val
      this.getTableData()
    },
    // 页码发生变化触发的方法
    handleCurrentChange (val) {
      this.reqParams.page = val
      this.getTableData()
    }
  }
}
</script>

<style scoped lang="scss">
.crumbHeader {
  margin-bottom: 30px;
}
</style>
