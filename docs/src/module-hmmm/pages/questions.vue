<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 按钮 -->
        <el-row>
          <el-col :span="20">
            <span style="color: #ffcedb">说明：目前支持学科和关键字渲染</span>
          </el-col>
          <el-col :span="4">
            <div style="margin-left: 78px">
              <el-button type="success" icon="el-icon-edit" size="small" @click="handleNew" style="margin-left: 18px; margin-bottom: 15px">新增试题</el-button>
            </div>
          </el-col>
        </el-row>
        <!-- 筛选区域 -->
        <Myform :datalist="datalist" ref="formData" @Submit="submit" ></Myform>
        <!-- 提示框 -->
        <el-alert :title="`数据一共 ${this.QueList.total} 条`" show-icon :closable="false">
        </el-alert>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%; margin-top: 10px">
          <el-table-column label="试题编号"   prop="number"> </el-table-column>
          <el-table-column label="学科" prop="subject"> </el-table-column>
          <el-table-column label="目录"  prop="catalog"> </el-table-column>
          <el-table-column label="题型"  prop="questionType" >
            <template #default="{row}">
              {{ questionType.find(item => item.value === +row.questionType).label}}
            </template>
          </el-table-column>
          <el-table-column label="题干"  prop="question">
            <template #default="{row}">
              <div v-html="row.question"></div>
            </template>
          </el-table-column>
          <el-table-column label="录入时间"  prop="addDate">
            <template #default="{row}">
              {{ row.addDate.slice(0, row.addDate.indexOf('T')) }}
            </template>
          </el-table-column>
          <el-table-column label="难度"  prop="difficulty">
            <template #default="{ row }">
              {{ difficulty.find(item => item.value === +row.difficulty).label}}
            </template>
          </el-table-column>
          <el-table-column label="录入人" width="180" prop="creator"> </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="{row}">
              <el-button type="primary" icon="el-icon-view" title="预览" circle @click="handlePreview(row.id)"></el-button>
              <el-button type="primary" icon="el-icon-edit" title="修改" circle @click="handleEdit(row.id)"></el-button>
              <el-button type="danger" icon="el-icon-delete" title="删除" circle @click.native="removeList(row.id)"></el-button>
              <el-button type="warning" icon="el-icon-check" title="加入精选" circle @click="handleAdd(row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页  :total="total"  -->
        <div style="margin-top: 10px; text-align: right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="this.QueList.page"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="this.QueList.pagesize"
            :total="this.QueList.total"
            layout="total, prev, pager, next, sizes, jumper"
          >
          </el-pagination>
        </div>
      </el-card>
      <!-- 预览弹框 -->
      <questions :isShowDialog.sync="isShowDialog" :list="list"></questions>
    </div>
  </div>
</template>

<script>
import { list, remove, detail, choiceAdd } from '@/api/hmmm/questions.js'
import { difficulty, questionType } from '@/api/hmmm/constants.js'
import questions from '@/module-hmmm/components/questions'
import Myform from './companys/questions-choice-forms.vue'
export default {
  components: {
    questions,
    Myform
  },
  data () {
    return {
      tableData: [], // 列表数据
      difficulty, // 困难
      questionType, // 试题类型
      isShowDialog: false,
      list: {}, // 预览弹窗数据
      QueList: {
        page: 1,
        pagesize: 5,
        total: 1,
        counts: 0
      },
      datalist: {
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
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 每页条数发生变化
    handleSizeChange (val) {
      this.QueList.pagesize = val
      this.QueList.page = 1
      this.getList()
    },
    // 当前页码发生变化
    handleCurrentChange (val) {
      this.QueList.page = val
      this.getList()
    },
    // 新增试题跳转
    handleNew () {
      this.$router.push('/questions/new')
    },
    // 修改
    handleEdit (id) {
      this.$router.push(`/questions/new/?id=${id}`)
    },
    // 获取列表数据
    async getList () { // counts, page, pages, pagesize  this.page, this.size
      const { data: { items, counts, page, pagesize } } = await list(this.QueList)
      console.log(items, counts, page, pagesize)
      this.tableData = items
      this.QueList.counts = counts
      this.QueList.total = counts
      this.QueList.page = +page
      this.QueList.pagesize = Number(pagesize)
    },
    // 删除
    async removeList (id) {
      this.$confirm('此操作将永久删除改角色, 是否继续?', '提示', {
        type: 'warning'
      }).then(async () => {
        await remove({ id })
        if (this.tableData.length === 1 && this.QueList.page > 1) {
          this.QueList.page--
        }
        this.getList()
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    },
    // 预览
    async handlePreview (id) {
      this.isShowDialog = true
      const { data } = await detail({ id })
      console.log(data)
      console.log(id)
      this.list = data
    },
    // 加入精选题库
    handleAdd (id) {
      console.log('点击', { id })
      this.$confirm('此操作将改题目加入精选, 是否继续?', '提示', {
        type: 'warning'
      }).then(async () => {
        console.log(id)
        await choiceAdd({ id, choiceState: 1 })
        this.$message.success('加入精选题库成功')
        this.getList()
        this.$router.push('/questions/choice')
      }).catch(() => {
        this.$message.info('已取消加入')
      })
    },
    // 搜索
    async submit () {
      const lin = this.$refs.formData.datalist
      const {
        data: { counts, items, pagesize }
      } = await list(lin)
      console.log({ counts, items, pagesize })
      this.tableData = items
      this.QueList.total = counts
      this.QueList.pagesize = +pagesize
    }
  }
}
</script>

<style scoped></style>
