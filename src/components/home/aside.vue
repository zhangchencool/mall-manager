<template>
    <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    router= "true"
    @close="handleClose">
    <el-submenu :index="item.order" v-for="item in menusData" :key="item.order">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.authName}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item  :index="item1.path" v-for="(item1, index) in item.children" :key="index">{{item1.authName}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      menusData: []
    }
  },
  created () {
    this.getMenusroles()
  },
  components: {

  },
  methods: {
    getMenusroles () {
      debugger
      this.$axios
        .get('menus')
        .then((res) => {
          const {data, meta} = res.data
          if (meta.status === 200) {
            debugger
            this.menusData = data
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>
