<template>
 <div class="permission-container">
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">
            <breadcrumb></breadcrumb>
        </div></el-col>
    </el-row>
    <el-row class="fun-content">
        <el-col :span="24"><div class="grid-content bg-purple-dark">
            <el-button type="primary" plain >分配角色</el-button>
        </div></el-col>
    </el-row>
    <el-row class="table-content" >
        <el-col :span="24"><div class="grid-content bg-purple-dark">
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-row v-for='item in props.row.children' :key = "item.id">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">
                        <el-tag closable >{{item.authName}}</el-tag> <span>></span>
                    </div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-dark">
                        <el-row v-for='item1 in item.children' :key = "item1.id">
                            <el-col :span="4"><div class="grid-content bg-purple-dark">
                                <el-tag closable type="success">{{item1.authName}} ></el-tag><span>></span>
                            </div></el-col>
                            <el-col :span="20"><div class="grid-content bg-purple-dark">
                                <el-tag v-for='item2 in item1.children' :key = "item2.id" closable type="warning">{{item2.authName}}</el-tag>
                            </div></el-col>
                        </el-row>
                    </div></el-col>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              label="商品 ID"
              prop="id">
            </el-table-column>
            <el-table-column
              label="人员"
              prop="roleName">
            </el-table-column>
            <el-table-column
              label="职位"
              prop="roleDesc">
            </el-table-column>
          </el-table>
        </div></el-col>
    </el-row>
 </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  components: {

  },
  created () {
    this.getRolestable()
  },
  methods: {
    getRolestable () {
      this.$axios
        .get('roles')
        .then((res) => {
          const {data, meta} = res.data
          if (meta.status === 200) {
            this.tableData = data
            debugger
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.permission-container {
    width: 100%;

    .fun-content{
        margin-top: 20px;
    }
    .table-content{
        margin-top: 20px;
    }
    .el-tag{
        margin: 5px;
    }
}

</style>
