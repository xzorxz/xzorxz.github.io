<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-form label-width="80px" size="small">
          <el-row>
            <el-col :span="6">
              <el-form-item label="关键字">
                <el-input style="200px" placeholder="根据编号搜索" v-model="data.keyword"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="12">
              <el-form-item style="text-align: right">
                <el-button @click="clear()">清除</el-button>
                <el-button type="primary" @click="serach(data.keywork)">搜索</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-alert
          :title="`数据一共${total}条`"
          type="info"
          class="alert"
          :closable="false"
          show-icon
        ></el-alert>

          <el-table :data="tableData" style="width: 100%">
                    <template ref="tabledata">
            <el-table-column
              fixed
              prop="id"
              label="编号"

            ></el-table-column>
            <el-table-column
              prop="questionType"
              label="题型"

            ></el-table-column>
            <el-table-column label="题目编号">
              <template #default="{row}">
                <div v-for="item in row.questionIDs"
                :key="item.number"><a
                href="#"
                style="color: #01c6fa;"

                @click="handleBtn(row)"
                >{{ item.number }}</a
              ></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="addTime"
              label="录入时间"

            ></el-table-column>
            <el-table-column
              prop="totalSeconds"
              label="答题时间(s)"

            ></el-table-column>
            <el-table-column
              prop="accuracyRate"
              label="正确率(%)"

            ></el-table-column>
            <el-table-column
              prop="userName"
              label="录入人"

            ></el-table-column>
            <el-table-column icon="el-icon-delete" label="操作" width="80">
              <template #default="{ row }">
                <el-button
                  type="danger"
                  size="small"
                  plain
                  circle
                  icon="el-icon-delete"
                  @click="delEmployee(row.id)"
                  title="删除"
                ></el-button>
              </template>
            </el-table-column>
                    </template>
          </el-table>

      </el-card>
       <el-pagination
       style="text-align: right;"
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[20, 30, 50, 200]"
      :current-page="data.page"
      :page-size="data.pagesize"
      layout=" prev, pager, next, sizes, jumper"
      :total="total">
    </el-pagination>
      <questions-preview
        :showDialog.sync="showDialog"
        :list2="list2"
      ></questions-preview>
    </div>
  </div>
</template>

<script>
import { randoms, removeRandoms, detail } from '@/api/hmmm/questions'
import { difficulty, questionType } from '@/api/hmmm/constants'
import QuestionsPreview from '../components/questions-preview.vue'
export default {
  name: 'QuestionsRandom',
  components: {
    QuestionsPreview
  },
  data () {
    return {
      difficulty,
      questionType,
      tableData: [],
      questionBtn: {},
      showDialog: false,
      list: {},
      list2: {},
      questionids: [],
      id: 0,
      data: {
        keywork: '',
        page: 1,
        pagesize: 10
      },
      total: 0
    }
  },
  created () {
    this.getQuestionsRandoms()
    for (const k in this.tableData) {
      // console.log(this.tableData[k].questionIDs)
      const arr = []

      this.tableData[k].questionIDs.map((sub) => {
        // console.log(sub.number)
        // arr.push(sub.number)
        arr.push(sub.number)
        // this.tableData[k].questionIDs = sub.number
        // console.log(arr)
        console.log(arr)

        return arr
      })
      this.tableData[k].questionIDs = arr
    }
  },
  methods: {
    // 分页设置
    handleSizeChange (val) {
      this.data.pagesize = val
      this.getQuestionsRandoms()
      this.data.page = 1
    },
    handleCurrentChange (val) {
      this.data.page = val
      this.getQuestionsRandoms()
    },
    // 题目编号
    async handleBtn (row) {
      this.showDialog = true
      console.log(row)
      this.id = row.questionIDs[0].id
      const { data } = await detail({ id: row.questionIDs[0].id })
      this.list2 = data
      console.log(data)
    },
    // 数据渲染
    async getQuestionsRandoms () {
      // const {
      //   data: { items }
      // } = await randoms(this.data)
      const { data } = await randoms(this.data)
      console.log(data)
      this.tableData = data.items
      this.total = data.counts
      this.tableData.map((item) => {
        if (item.questionType === '1') {
          item.questionType = '单选'
        }
        if (item.questionType === '2') {
          item.questionType = '多选'
        } else {
          item.questionType = '简答'
        }
        return item.questionType
      })
    },
    // 数据查找
    async serach (data) {
      this.data.keywork = data
      await this.getQuestionsRandoms()
    },
    // 清除数据
    clear () {
      this.data.keyword = ''
    },
    // 删除数据
    delEmployee (id) {
      console.log(id)
      this.$confirm('确定要删除该员工?', '温馨提示')
        .then(async () => {
          await removeRandoms({ id })
          this.$message.success('删除成功')
          if (this.tableData.length === 1 && this.data.page > 1) {
            this.data.page--
          }
          this.getQuestionsRandoms()
        })
        .catch(() => {
          console.log('取消')
        })
    },
    // 题组格式化
    formatterque () {
      // console.log(row)
      const arr = this.tableData.questionIDs.map((item) => {
        arr.push(item.number)
      })
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
.question-container {
  padding: 0 10px;
  margin: 10px 0;
}
.btn_wrapper {
  margin-bottom: 15px;

}
</style>
