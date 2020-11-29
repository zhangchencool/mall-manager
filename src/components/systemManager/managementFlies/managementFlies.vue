<template>
 <div class="managementFlies-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row class="main-card">
      <el-card class="box-card">
        <Table></Table>
      </el-card>
    </el-row>
 </div>
</template>

<script>
import Table from '@/components/packag/table.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Table
  }
}
</script>

<style lang="scss" scoped>
.managementFlies-container{
  width: 100%;
  height: 100%;
  .main-card{
    padding-top: 30px;
  }
}
</style>
