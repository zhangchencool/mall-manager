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
          <el-input class="search-ipt" v-model="searchform.department"></el-input>
          <span>用户名：</span>
          <el-input class="search-ipt" v-model="searchform.mail"></el-input>
          <span>邮箱：</span>
          <el-input class="search-ipt" v-model="searchform.sex"></el-input>
          <span>性别：</span>
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
          <el-radio v-model="radio" label="3">全部</el-radio>
          <el-button type="primary" @click="handleSearch">查 询</el-button>
          <el-button type="primary" @click="handleReset">重 置</el-button>
        </el-col>
      </el-row>
      <el-row>
        <my-table
        :tableDataConfig = 'tableLoadData'
        :tableHeadConfig = 'tableHeadConfig'
        >
          <template v-solt:operation = soltData>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </my-table>
      </el-row>
    </el-card>
  </el-row>
 </div>
</template>

<script>
import myTable from '@/components/packag/table.vue'
export default {
  data () {
    return {
      radio: '3',
      searchform: {
        department: '',
        mail: '',
        sex: '',
        tableHeadConfig: [
          {
            label: 'ID',
            field: 'id'
          },
          {
            label: '用户名',
            field: 'username'
          },
          {
            label: '性别',
            field: 'email'
          },
          {
            label: '所属方式',
            field: 'mobile'
          },
          {
            label: '状态',
            columnType: 'slot',
            slotName: 'mg_state'
          },
          {
            label: '创建日期',
            columnType: 'slot',
            slotName: 'create_time'
          },
          {
            label: '角色',
            field: 'role_name'
          },
          {
            label: '操作',
            columnType: 'slot',
            slotName: 'operation'
          }
        ],
        tableLoadData: []
      }
    }
  },
  components: {
    myTable
  },
  methods: {
    handleSearch () {

    },
    handleReset () {
      this.searchform = {}
    },
    getUserData () {

    }
  }
}
</script>

<style lang="scss" scoped>
.userManager-container{
  width: 100%;
  height: 100%;
  span{
    margin-left: 20px;
  }
  .search-ipt{
    width: 200px;
  }
}
</style>
