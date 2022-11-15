<template>
  <div class="questions">
    <el-dialog title="题目预览" :visible="isShowDialog" width="900px" @close="closeDialog">
      <el-row class="row">
        <el-col :span="6">【题型】：{{ list.questionType | tx}}</el-col>
        <el-col :span="6">【编号】：{{ list.id }}</el-col>
        <el-col :span="6">【难度】：{{list.difficulty | nd}}</el-col>
        <el-col :span="6">【标签】：{{ list.tags }}属性</el-col>
        <el-col :span="6">【学科】：{{ list.subjectID }}</el-col>
        <el-col :span="6">【目录】：{{ list.catalogID }}</el-col>
        <el-col :span="6">【方向】：{{ list.direction }}</el-col>
      </el-row>
      <hr>
      <el-row class="row">【题干】：<br>
      <div v-html="list.question"></div>
      <div v-if="list.questionType!=='3'">
        <div style="padding-bottom:5px">{{list.questionType|tx}} 选项：（以下选中的选项为正确答案）</div>
        <div v-for="item in list.options" :key="item.code" style="padding:8px 0">
          <el-radio v-if="list.questionType==='1'" :value="item.isRight" :label="1">{{item.title}}</el-radio>
          <el-checkbox v-if="list.questionType==='2'" :value="item.isRight?true:false" >{{item.title}}</el-checkbox>
        </div>
      </div>
      </el-row>
      <hr>
      <el-row class="row">
        【参考答案】：<el-button type="danger" @click="preivewVideo()">视频答案预览</el-button>
        <div class="vidiobox" v-show="show" style="padding: 20px">
            <video ref="video" :src="list.videoURL" controls style="width:500px"></video>
        </div>
      </el-row>
      <hr>
      <el-row class="row">【答案解析】：<span v-html="list.answer"></span></el-row>
      <hr>
      <el-row class="row">【题目备注】：{{ list.remarks }}</el-row>
      <div style=" margin-top: 50px; margin-left:750px" @click="closeDialog"><el-button type="primary">关闭</el-button></div>
    </el-dialog>
  </div>
</template>

<script>
import { difficulty, questionType } from '@/api/hmmm/constants.js'
export default {
  name: 'questions',
  data () {
    return {
      show: false
    }
  },
  props: {
    isShowDialog: {
      type: Boolean,
      default: false
    },
    list: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 关闭弹窗
    closeDialog () {
      this.$emit('update:isShowDialog', false)
      this.show = false
    },
    // 显示视频
    preivewVideo () {
      this.show = true
    }
  },
  // 数字转文字
  filters: {
    nd (value) {
      if (value) return difficulty.find(item => item.value === +value).label
    },
    tx (value) {
      if (value) return questionType.find(item => item.value === +value).label + '题'
    }
  }
}
</script>

<style scoped lang="scss">
.questions {
    margin: 10px;
}
.row {
    padding: 10px;
}
.vidiobox {
    width: 300px;
    height: 200px;
}
</style>
