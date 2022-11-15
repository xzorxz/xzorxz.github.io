<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-form>
          <div class="filter-container">
            <el-form-item>
              <label class="el-form-item__label" style="width: 80px"
                >学科名称</label
              >
              <el-input
                clearable
                v-model="input"
                style="width: 200px"
                class="filter-item"
              ></el-input>
              <el-button
                class="filter-item"
                size="small"
                style="margin-left: 10px"
                @click="emptyInput"
                >清除</el-button
              >
              <el-button
                class="filter-item"
                size="small"
                type="primary"
                icon="el-icon-search"
                @click="handleFilter"
                >搜索</el-button
              >
              <el-button
                class="filter-item fr"
                size="small"
                style="margin-left: 10px"
                type="success"
                icon="el-icon-edit"
                @click="newlyAdded"
                >新增学科</el-button
              >
            </el-form-item>
            <el-alert
              :title="`数据一共${title}条`"
              type="info"
              class="alert"
              :closable="false"
              show-icon
            ></el-alert>
          </div>
          <!-- </el-form-item> -->
        </el-form>
          <el-table :data="list" style="width: 100%">
          <el-table-column label="序号" prop="id" type="index"></el-table-column>
          <el-table-column
            label="学科名称"
            prop="subjectName"
          ></el-table-column>
          <el-table-column label="创建者" prop="username"></el-table-column>
          <el-table-column label="创建日期" prop="addDate">
            <template #default="{ row }">{{
              formatTime(row.timeOfEntry, "YYYY-MM-DD")
            }}</template>
          </el-table-column>
            <el-table-column
            label="前台是否显示"
            prop="isFrontDisplay"
          >
          <template #default="{row}">
            {{row.isFrontDisplay === 0 ? '否' : '是'}}
          </template>
          </el-table-column>
          <el-table-column
            label="二级目录"
            prop="twoLevelDirectory"
          ></el-table-column>
          <el-table-column label="标签" prop="tags"></el-table-column>
          <el-table-column label="题目数量" prop="totals"></el-table-column>

          <el-table-column label="操作" width="250px">
            <template #default="{row}">
            <el-button size="small" type="text"  @click="$router.push({path:'/subjects/directorys',query:{id:row.id,name:row.subjectName}})">学科分类</el-button>
            <el-button size="small" type="text" @click="$router.push({path:'/subjects/tags',query:{id:row.id,name:row.subjectName}})">学科标签</el-button>
            <el-button size="small" type="text" @click="reviseClick(row)"
              >修改</el-button
            >
            <el-button size="small" type="text" @click="removeClick(row)"
              >删除</el-button
            >
            </template>
          </el-table-column>
        </el-table>

        <!-- 弹窗组件 新增--修改 -->
        <SubjectsAdd
        ref="SubjectsAddRefs"
        :visible="visible"
        :formId ="formId"
        @closeDialog="
        visible = false;
        getList()
        "
        ></SubjectsAdd>

        <!-- 分页器 -->
        <el-pagination
          style="text-align:right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.page"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="this.pagesize"
          :total="this.total"
          layout="total, sizes, prev, pager, next, jumper"
        >
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
import { list, remove } from '@/api/hmmm/subjects.js' // 接口引入
import SubjectsAdd from '../components/subjects-add.vue' // 弹窗组件引入
import dayjs from 'dayjs'
export default {
  components: { SubjectsAdd },
  data () {
    return {
      page: 1, // 分页器页码
      pagesize: 10, // 每页条数
      total: null, // 总条数
      list: [], // 从接口处取回
      title: '', // 头部总条数
      input: '', // input框
      visible: false, // 弹窗
      formId: '', // 子组件回显id
      // 搜索参数
      nameData: {
        subjectName: '',
        page: 1,
        pagesize: 10
      }

    }
  },
  async created () {
    this.getList()
  },
  methods: {
    // 页面列表渲染
    async getList () {
      const { data: { items, page, pagesize, counts } } = await list({ page: this.page, pagesize: this.pagesize })
      // console.log({ items, page, pagesize, counts })
      // this.lists = data
      // const res = items.isFrontDisplay === 0 ? '否' : '是'
      // console.log(res)
      this.page = +page
      this.pagesize = +pagesize
      this.list = items
      this.title = +counts
      this.total = +counts
    },
    // input框清除
    emptyInput () {
      this.input = ''
    },
    // 搜索框 并渲染
    async handleFilter () {
      // console.log(this.input)
      this.nameData.subjectName = this.input
      const { data } = await list(this.nameData)
      this.list = data.items
      console.log(data)
    },
    // 编辑学科弹窗
    reviseClick (row) {
      console.log(row)
      this.visible = true
      this.$refs.SubjectsAddRefs.form.subjectName = row.subjectName
      this.$refs.SubjectsAddRefs.form.isFrontDisplay = row.isFrontDisplay
      this.formId = row.id
      this.$refs.SubjectsAddRefs.title = '编辑学科'
    },
    // 删除
    async removeClick (row) {
      this.$confirm('此操作将永久删除该学科, 是否继续?', '提示', {
        type: 'warning'
      }).then(async () => {
        await remove(row)
        this.getList()
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    },
    // 时间处理
    formatTime (time, str) {
      return dayjs(time).format(str)
    },
    // 新增学科弹窗
    newlyAdded () {
      // console.log(111)
      this.visible = true
      this.$refs.SubjectsAddRefs.title = '新增学科'
    },
    // 页码
    handleSizeChange (Val) {
      this.pagesize = Val
      this.page = 1
      if (this.page === 1) {
        this.getList()
      }
    },
    // 页码发生变化触发的方法
    handleCurrentChange (Val) {
      this.page = Val
      this.getList()
    }

  }
}
</script>

<style scoped></style>
