<template>
  <div class="menu-container">
  <el-menu
  class="el-menu-demo"
  :default-active="defaultActive"
  unique-opened= "true"
  router
  ref="kzMenu"
  >
  <el-submenu :index="item.orderNum+ ''" v-for="(item, index) in menusData" :key="index">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{item.menuName}}</span>
    </template>
    <el-menu-item-group v-for="(item1, index) in item.children" :key="index" v-if="item1.children.length === 0">
      <el-menu-item :index="item1.url">
        <i>1</i>
        <span>{{item1.menuName}}</span></el-menu-item>
    </el-menu-item-group>
    <el-submenu :index="item1.url" v-else >
      <template slot="title">{{item1.menuName}}</template>
      <el-menu-item :index="item2.url" v-for="(item2, index) in item1.children" :key="index">
        <i></i>
        <span>{{item2.menuName}}</span></el-menu-item>
    </el-submenu>
  </el-submenu>
  </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#ffd04b'
    }
  },
  created () {
    this.getMenusroles()
  },
  props: {
    menusData: {
      type: Object,
      default: []
    },
    defaultActive: {
      type: String,
      default: ''
    }
  },
  components: {

  },
  methods: {

    handleOpen () {

    },
    handleClose () {

    }
  },
  watch: {
    $route () {
      this.setCurrentRoute()
      // this.$refs.kzMenu.activedIndex = path
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container{
  height: 100%;
  background-color: antiquewhite;
  >>> .el-menu{
    height: 100%;
    border-left: 4px solid #ffffff;
  }
  >>> .el-menu-item {
      &.is-active {
       background-color: #99a9bf;
       color: #ffffff;
     }
    }
}
</style>
