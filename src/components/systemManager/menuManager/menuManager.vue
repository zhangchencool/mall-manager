<template>
 <div class="menuManager-container">
    <el-row class="breadcrumb-content">
      <breadcrumb></breadcrumb>
    </el-row>
    <el-row>
      <el-card>
        <el-tree
          :props="prop"
          :data="data"
          :load="loadNode"
          node-key="id"
          show-checkbox
          @check-change="handleCheckChange">
           <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="() => append(data)">
                编辑
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                删除
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                增加
              </el-button>
            </span>
          </span>
        </el-tree>
      </el-card>
    </el-row>
 </div>

</template>

<script>
export default {
  data () {
    return {
      data: [],
      prop: {
        children: 'children',
        label: 'menuName'
      }
    }
  },
  components: {

  },
  created () {
    this.getMenusData()
  },
  methods: {
    getMenusData () {
      this.$axios
        .get('menu/tree')
        .then((res) => {
          const {data, code} = res.data
          if (code === 200) {
            this.data = data.tree
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.menuManager-container{
  width: 100%;
  height: 100%;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
}

</style>
