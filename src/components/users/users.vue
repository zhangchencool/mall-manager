<template>
 <div class="users-container">
    <div class="crumbs-nav">
        <breadcrumb></breadcrumb>
    </div>
    <el-row class="search-row">
        <el-col :span="24">
            <el-input v-model="searchName" placeholder="请输入内容" class="search-input ">
                <el-button slot="append">搜索</el-button>
            </el-input>
            <el-button type="success" plain>添加用户</el-button>
        </el-col>
      </el-row>
    <el-row class="users-table"
    v-loading="loading"
    >
      <Table
      :tableDataConfig = 'tableLoadData'
      :tableHeadConfig = 'tableHeadConfig'
      >
    <template v-slot:mg_state = "slotData">
      <el-tooltip :content="slotData.data.row.mg_state | tooltipTitle" placement="top">
        <el-switch
          @change="handleChange(slotData,slotData.data.row.id)"
          v-model="slotData.data.row.mg_state"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-tooltip>
    </template>
    <template v-slot:operation = "slotData">
      <el-button type="primary" plain >添加</el-button>
      <el-button type="danger" plain @click = handleDelete(slotData)>删除</el-button>
    </template>
    <template v-slot:create_time = "slotData">
     {{slotData.data.row.create_time | format}}
    </template>
    </Table>
    </el-row>
    <el-row
    type= "flex"
    justify="end"
    >
    <el-col :span="6" v-if = 'totalpage > 2'>
      <el-pagination
        class="users-pagination"
        @current-change="currentChange"
        :page-size="pagesize"
        current-page="pageNo"
        layout="prev, pager, next"
        :total="totalpage">
      </el-pagination>
    </el-col>
    </el-row>
 </div>
</template>

<script>
import Table from '@/components/packag/table.vue'

export default {
  data () {
    return {
      tableHeadConfig: [
        {
          label: 'ID',
          field: 'id'
        },
        {
          label: '账号',
          field: 'username'
        },
        {
          label: '邮箱',
          field: 'email'
        },
        {
          label: '联系方式',
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
      tableLoadData: [],
      searchName: '',
      pageNo: 1,
      pagesize: 2,
      totalpage: '',
      loading: false
    }
  },
  components: {
    Table
  },
  computed: {

  },
  filters: {
    tooltipTitle (status) {
      if (status === true) {
        return '正常'
      } else {
        return '锁定'
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.pageNo = 1
      this.pagesize = 2
      this.getUserList()
    })
  },
  methods: {
    getUserList () {
      const searchForm = {
        query: '',
        pagenum: null,
        pagesize: null
      }
      searchForm.query = this.searchName
      searchForm.pagenum = this.pageNo
      searchForm.pagesize = this.pagesize
      this.loading = true
      this.$axios
        .get('users', searchForm)
        .then((res) => {
          const {data, meta} = res.data
          if (meta.status === 200) {
            this.tableLoadData = data.users
            this.totalpage = data.total
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    currentChange (val) {
      this.pageNo = val
      this.getUserList()
    },
    handleDelete (userID) {
    },
    handleChange (val, id) {
      console.log(val, id)
    }
  }
}
</script>

<style lang="scss">
.users-container{
    width: 100%;

    .search-row {
      margin-top: 20px;

      .search-input{
      width: 300px;
    }
    }
    .users-pagination{
      text-align: right;
    }

}

</style>
