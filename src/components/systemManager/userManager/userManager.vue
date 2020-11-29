<template>
 <div class="userManager-container">
  <el-row class="breadcrumb-content">
    <breadcrumb></breadcrumb>
  </el-row>
  <el-row>
    <el-card>
      <el-row>
        <el-col>
          <span>部门：</span>
          <el-input class="search-ipt"></el-input>
          <span>用户名：</span>
          <el-input class="search-ipt"></el-input>
          <span>邮箱：</span>
          <el-input class="search-ipt"></el-input>
          <span>性别：</span>
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
          <el-radio v-model="radio" label="3">全部</el-radio>
          <el-button type="primary" @click="handleSearch">查 询</el-button>
          <el-button type="primary" @click="handleReset">重 置</el-button>
        </el-col>
      </el-row>
      <el-row>
        <Table></Table>
      </el-row>
    </el-card>
  </el-row>
 </div>
</template>

<script>
import Table from '@/components/packag/table.vue'
export default {
  data () {
    return {
      radio: "3"
    }
  },
  components: {
    Table
  },
  methods: {
    handleSearch () {

    },
    handleReset () {

    }
  },
}
</script>

<style>

</style>
