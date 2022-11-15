<template>
  <div class='container'>
    <el-dialog title="预览文章" :visible="showArticle" @close="closeDialog" @click.native="isShow=false" width="50%">
      <div class="title">
        <h2>{{article.title}}</h2>
        <div class="content">
          <span>{{article.createTime}}</span>
          <span>{{article.username}}</span>
          <span class="el-icon-view"></span>
          <span>{{article.visits}}</span>
        </div>
        </div>
      <div class="preview" v-html="article.articleBody">
      </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ArticlesPreview',
  props: {
    showArticle: {
      type: Boolean,
      default: false
    },
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    // 关闭对话框
    closeDialog () {
      this.$emit('update:showArticle', false)
    },
    open () {
      this.isShow = true
    }
  }
}

</script>

<style scoped lang='scss'>
.title {
  padding-bottom: 10px;
  color: #606266;
  font-size: 14px;
  border-bottom: 1px dashed #ccc;
}
h2 {
  margin: 0;
  padding: 0;
}
span{
    margin-right: 10px;
    margin-top: 10px;
  }
.content {
  margin-left: 10px;
  margin-top: 10px;
}
.preview {
    padding: 10px;
    background:#f5f5f5;
}
</style>
