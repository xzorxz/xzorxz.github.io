<template>
  <el-form
    label-width="80px"
    style="height: 180px"
    ref="formData"
    :model="datalist"
  >
    <el-col :span="6">
    <el-form-item label="学科" class="input_d1" prop="subjectID">
      <el-select
        style="width: 330px"
        size="small"
        v-model="datalist.subjectID"
        filterable
        @change="handeldirectorys"
      >
        <el-option
          :label="item.label"
          :value="item.value"
          v-for="item in simpleList"
          :key="item.value"
        />
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="二级目录" class="input_d1" prop="catalogID">
      <el-select  style="width: 330px"  size="small" v-model="datalist.catalogID">
        <el-option
          :label="item.label"
          :value="item.value"
          v-for="item in directoryslist"
          :key="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="标签" class="input_d1" prop="tags">
      <el-select   style="width: 330px"  size="small" v-model="datalist.tags">
        <el-option value="tags"></el-option>
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="关键字" class="input_d1" prop="keyword">
      <el-input
        style="width: 330px"
        size="small"
        v-model="datalist.keyword"
        placeholder="根据题干搜索"
      ></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="试题类型" class="input_d1" prop="questionType">
      <el-select    style="width: 330px"  size="small" v-model="datalist.questionType">
        <el-option value="questionType"></el-option>
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="难度" class="input_d1" prop="difficulty">
      <el-select   style="width: 330px"  size="small" v-model="datalist.difficulty">
        <el-option value="difficulty"></el-option>
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="方向" class="input_d1" prop="direction">
      <el-select    style="width: 330px"  size="small" v-model="datalist.direction">
        <el-option value="direction"></el-option>
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="录入人" class="input_d1" prop="creatorID">
      <el-select  style="width: 330px"  size="small" v-model="datalist.creatorID">
        <el-option value="creatorID"></el-option>
      </el-select>
    </el-form-item>
    </el-col>
    <el-col :span="6">
    <el-form-item label="题目备注" class="input_d1" prop="remarks">
      <el-input
        style="width: 330px"
        size="small"
        v-model="datalist.remarks"
      ></el-input>
    </el-form-item>
    </el-col>
    <el-form-item label="企业简称" class="input_d1" prop="shortName">
      <el-input
        style="width: 330px"
        size="small"
        v-model="datalist.shortName"
      ></el-input>
    </el-form-item>
    <el-form-item label="城市" class="input_d1" prop="city">
      <MyCity v-model="datalist.provAndCity" />
    </el-form-item>
    <el-button class="btn" type="primary" size="small" @click="submit"
      >搜索</el-button
    >
    <el-button class="btn" size="small" @click="handelClose">清除</el-button>
  </el-form>
</template>

<script>
import { simple as directorysList } from '@/api/hmmm/directorys.js'
import { simple } from '@/api/hmmm/subjects.js'
import MyCity from './citys.vue'
export default {
  name: 'questionsChoiceForm',
  props: {
    datalist: {
      type: Object,
      required: true
    }
  },
  components: {
    MyCity
  },
  data () {
    return {
      simpleList: [],
      directoryslist: [] // 目录列表
    }
  },
  created () {
    this.handelsubject()
  },
  methods: {
    async handeldirectorys (subjectID) {
      const { data } = await directorysList({ subjectID })
      this.directoryslist = data
    },
    async handelsubject () {
      const { data } = await simple()
      this.simpleList = data
    },
    // 搜索
    async submit () {
      this.$emit('Submit')
    },
    // 清除
    handelClose () {
      this.$refs.formData.resetFields()
      this.datalist.provAndCity = {
        province: '',
        city: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .butt_D1 {
    display: flex;
    justify-content: space-between;
  }
  .input_d1 {
    float: left;
  }
  .btn {
    float: right;
    margin-right: 20px;
  }
}
</style>
