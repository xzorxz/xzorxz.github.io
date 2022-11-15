<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 关键词 状态 新增技巧 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="关键词">
            <el-input v-model="formInline.keyword" placeholder="根据文章表搜索"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="请选择">
              <el-option label="启用" value="1"></el-option>
              <el-option label="禁用" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button  @click="cleanClick">清除</el-button>
            <el-button type="primary" @click="handleFilter">查询</el-button>
          </el-form-item>
          <el-button style="margin-left: 10px" class="filter-item fr" type="success" @click="showEdit('add')">新增技巧</el-button>
        </el-form>
      <!-- 数据记录 -->
        <el-alert
         :title="`数据一共 ${counts} 条`"
         type="info"
         :closable="false"
         show-icon>
       </el-alert>
       <!-- 数据列表  highlight-current-row="true" -->
        <el-table :data="lists" style="margin-top: 20px" >
          <el-table-column label="序号"
            type="index"
            :index="indexMent"
            sortable=""
            width="80"/>
          <el-table-column
          label="文章标题"
          prop="title"
          >
          <template #default="{row}">
            {{row.title}}
            <a @click.prevent="openVideo(row.videoURL)" v-if="row.videoURL" href="#" class="el-icon-film" style="color:blue"></a>
          </template>
          </el-table-column>
          <el-table-column label="阅读数"  prop="visits"/>
          <el-table-column label="录入人"  prop="username"/>
          <el-table-column label="录入时间"  prop="createTime">
             <template #default="{row}">
              {{ formatTime(row.timeOfEntry,'YYYY-MM-DD') }}
            </template>
          </el-table-column>
          <el-table-column label="状态"  prop="state" >
            <template #default="{row}">
              {{row.state === 1 ? '已启用' : '已禁用'}}
            </template>
          </el-table-column>
          <!-- 操作 -->
          <el-table-column label="操作" prop="" fixed="right" width="280">
            <template #default="{row}">
              <el-button
              type="text"
              size="small"
              @click="previewArticle(row)"
              >预览</el-button>
              <el-button type="text" size="small" @click="changeBtn(row)">
                {{row.state === 0?"启用":"禁用"}}
                </el-button>
              <el-button type="text" size="small" :disabled="row.state===1"
              @click="showEdit('edit',row)" >修改</el-button>
              <el-button type="text" size="small" :disabled="row.state===1" @click="del(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 新增技巧 ref="ArticlesAddRefs" -->
        <ArticlesAdd
        :show-dialog.sync="showDialog"
        @reload="getList"
        :particulars="data"></ArticlesAdd>
        <!-- 预览 -->
        <ArticlesPreview
        ref="articlesPreview"
        :show-article.sync="showArticle"
        :article="data"
        ></ArticlesPreview>
      </el-card>
    <!-- 分页器 -->
    <el-pagination
      style="float:right;padding:10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="pagesize"
      layout=" prev, pager, next,sizes,jumper"
      background
      :total="counts">
    </el-pagination>
    <!-- 视频弹窗 -->
    <el-dialog
      :visible="videoDialog"
      width="50%"
      @close='videoDialog=false'
      >
      <video :src="videoSrc" controls="controls" autoplay width="100%" height="100%">
      </video>
    </el-dialog>
    </div>
  </div>
</template>

<script>
import { list, remove, changeState } from '@/api/hmmm/articles'
// import Enum from '@/api/hmmm/constants'
import ArticlesAdd from '@/module-hmmm/components/articles-add'
import ArticlesPreview from '@//module-hmmm/components/articles-preview'
import dayjs from 'dayjs'
export default {
  components: {
    ArticlesAdd,
    ArticlesPreview
  },
  data () {
    return {
      formInline: {
        keyword: '',
        state: null,
        pagesize: 10,
        page: 1
      },
      page: 1,
      pagesize: 10,
      lists: [],
      counts: 0,
      showDialog: false,
      title: '新增技巧',
      data: {},
      showArticle: false,
      videoDialog: false,
      input: '', // input框
      videoSrc: ''
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取文章列表
    async getList () {
      const { data: { items, counts } } = await list({ page: this.page, pagesize: this.pagesize })
      // const res = await list()
      // console.log(res)
      this.lists = items
      this.counts = counts
    },
    handleSizeChange (val) {
      // console.log(111)
      this.pagesize = val
      this.page = 1
      this.getList()
    },
    handleCurrentChange (val) {
      // console.log(111)
      this.page = val
      this.getList()
    },
    indexMent (index) {
      return index + 1 + (this.page - 1) * this.pagesize
    },
    // 清除按钮
    cleanClick () {
      this.formInline.user = ''
      this.formInline.region = ''
    },
    // 状态
    // formatterMethod ({ state }, column, cellValue) {
    //   // console.log(state)
    //   return state === 1 ? '已启用' : '已禁用'
    //   // 常量文件的方式控制
    //   // const obj = Enum.status.find(item => item.id === +state)
    //   // console.log(obj)
    //   // // return obj.value
    //   // return obj ? obj.value : '未知'
    // },
    // 删除员工
    del (row) {
      this.$confirm('确定要删除该文章吗?', '温馨提示').then(async () => {
        const res = await remove(row)
        console.log(res)
        if (this.lists.length === 1 && this.page > 1) {
          this.page--
        }
        this.$message.success('删除成功')
        this.getList()
      }).catch(() => {
        console.log('取消')
      })
    },
    // 处理日期
    formatTime  (time, str) {
      return dayjs(time).format(str)
    },
    // 启用禁用切换
    async changeBtn (val) {
      await changeState({
        id: val.id,
        state: val.state === 1 ? 0 : 1
      })
      // console.log(val.id, val.state)
      // console.log(res, 8888888)
      // this.$message.success('切换成功')
      val.state = val.state === 1 ? 0 : 1
    },
    // 增加/修改
    showEdit (type, row) {
      this.showDialog = true
      // const { data } = await detail({ id: row.id })
      this.data = { ...row, type: type }
    },
    openVideo (url) {
      this.videoSrc = url
      this.videoDialog = true
    },
    // 预览
    previewArticle (row) {
      this.showArticle = true
      this.data = { ...row }
      console.log(row)
      this.$nextTick(() => {
        this.$refs.articlesPreview.open()
      })
      // console.log(row)
    },
    async handleFilter () {
      // console.log(this.input)
      const { data: { items, counts } } = await list(this.formInline)
      this.lists = items
      this.counts = counts
      console.log({ items, counts })
    }
  }
}

</script>

<style lang='scss' scoped>
</style>
