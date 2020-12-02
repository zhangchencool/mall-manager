<template>
 <div class="managerDepartment-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row>
      <el-card>
        <el-row>
          <el-col>
            <span>部门：</span>
            <el-input class="search-ipt"></el-input>
            <el-button type="primary" @click="handleSearch">查 询</el-button>
            <el-button type="primary" @click="handleReset">重 置</el-button>
          </el-col>
        </el-row>

        <Table
        :tableHeadConfig= "tableHeadConfig"
        :tableDataConfig= "tableDataConfig"
        >
        <template v-slot:total="slotData">
          <el-tag>{{slotData.data.row.total}}</el-tag>
        </template>
        <template v-slot:operation="slotData">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </template>
        </Table>
      </el-card>
    </el-row>
 </div>
</template>

<script>
import Table from '@/components/packag/table.vue'
export default {
  data () {
    return {
      tableDataConfig: [],
      searchform: {
        pageNum: 1,
        pageSize: 7,
        name: ''
      },
      tableHeadConfig: [
        {
          label: 'ID',
          field: 'id'
        },
        {
          label: '办公电话',
          field: 'phone'
        },
        {
          label: '部门名',
          field: 'name'
        },
        {
          label: '人数',
          columnType: 'slot',
          slotName: 'total'
        },
        {
          label: '创建时间',
          field: 'createTime'

        },
        {
          label: '修改时间',
          field: 'modifiedTime'
        },
        {
          label: '地址',
          field: 'address'
        },
        {
          label: '操作',
          columnType: 'slot',
          slotName: 'operation'
        }
      ]
    }
  },
  components: {
    Table
  },
  methods: {
    getDepartmentData () {
      this.$axios
        .get('department/findDepartmentList', this.searchform)
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.tableDataConfig = data.rows
          }
        })
    }
  },
  created () {
    this.getDepartmentData()
  }
}
</script>

<style lang="scss" scoped>
.managerDepartment-container{
    width: 100%;
    height: 100%;
    span{

  }
    .search-ipt{
     width: 200px;
     margin: 20px;
    }
}
</style>
