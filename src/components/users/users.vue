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
    <el-row class="users-table">
      <Table
      :tableDataConfig = 'tableLoadData'
      :tableHeadConfig = 'tableHeadConfig'
      >
    <template v-slot:status = "slotData">
      <el-tooltip :content="slotData.data.row.status | tooltipTitle" placement="top">
        <el-switch
          v-model="slotData.data.row.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="1"
          inactive-value="0">
        </el-switch>
      </el-tooltip>
    </template>
    <template v-slot:operation>
      <el-button type="primary" plain>添加</el-button>
      <el-button type="danger" plain>删除</el-button>
    </template>
    </Table>  
    </el-row>
    <el-row
    type= "flex"
    justify="end"
    >
    <el-col :span="6">
      <el-pagination 
        class="users-pagination"
        :page-size="20"
        layout="prev, pager, next"
        :total="1000">
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
          field: 'account'
        },
        {
          label: '姓名',
          field: 'name'
        },
        {
          label: '性别',
          columnType: 'slot',
          slotName: 'sex'
        },
        {
          label: '头像',
          columnType: 'slot',
          slotName: 'thumbnail'
        },
        {
          label: '昵称',
          field: 'nickName'
        },
        {
          label: '手机号码',
          field: 'mobilePhone'
        },
        {
          label: '等级',
          field: 'level'
        },
        {
          label: '状态',
          columnType: 'slot',
          slotName: 'status'// 一定要对应好上面的状态的slot名字
        },
        {
          label: '操作',
          columnType: 'slot',
          slotName: 'operation',
          width: 260
        }
      ],
      tableLoadData: [
        {
          id: '1', // 用户ID
          account: 'naPb1836757263', // 用户账号
          gender: 0, // 性别（0：未知；1：男；2：女）
          headImg:
            'http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg', // 用户头像（url）
          mobilePhone: '13703957387', // 用户手机号码
          name: '刘邦', // 用户姓名
          nickName: 'laozhang', // 用户昵称
          level: 0, // 用户等级
          status: 1 // 用户状态
        },
        {
          id: 'usr460138499442614272',
          account: '123456d',
          gender: 2,
          headImg:
            'http://pic1.win4000.com/wallpaper/1/547d71dae56ee_270_185.jpg',
          mobilePhone: '13708068294',
          name: '刘五',
          nickName: '五公公',
          level: 88,
          status: 0
        },
        {
          id: 'usr460138499442614272',
          account: '123456d',
          gender: 2,
          headImg:
            'http://pic1.win4000.com/wallpaper/1/547d71dae56ee_270_185.jpg',
          mobilePhone: '13708068294',
          name: '刘五',
          nickName: '五公公',
          level: 88,
          status: 1
        },
        {
          id: 'usr460138499442614272',
          account: '123456d',
          gender: 1,
          headImg:
            'http://pic1.win4000.com/wallpaper/1/547d71dae56ee_270_185.jpg',
          mobilePhone: '13708068294',
          name: '刘五',
          nickName: '五公公',
          level: 88,
          status: 0
        }
      ],
      searchName: "" ,
      pageNo: 1,
      pagesize: 10
    }
  },
  components: {
    Table
  },
  computed: {
    
  },
  filters: {
    tooltipTitle(status) {
      if(status == '1') {
        return "正常"
      } else if (status == '0'){
        return "锁定"
      } else {
        return "封停"
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      const searchForm = {
        query: '',
        pagenum: '',
        pagesize: '',
      }
      debugger
      searchForm.query = this.searchName
      searchForm.pagenum = this.pageNo
      searchForm.pagesize = this.pagesize
      this.$axios
        .get("users", this.searchForm)
        .then((res) => {
          if(res.date.code === 200) {
            debugger
          }
        })

    }
  },
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
      margin-right: auto;
    }

}

</style>
