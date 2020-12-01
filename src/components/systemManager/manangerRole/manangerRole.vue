<template>
 <div class="manangerRole-container">
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
      tableHeadConfig: [
        {
          label: 'ID',
          field: 'id'
        },
        {
          label: '角色名',
          field: 'roleName'
        },
        {
          label: '创建时间',
          field: 'createTime'
        },
        {
          label: '状态',
          field: 'status'

        },
        {
          label: '备注',
          field: 'remark'
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
      ],
    }
  },
  components: {
    Table
  }
}
</script>

<style lang="scss" scoped>
.manangerRole-container{
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