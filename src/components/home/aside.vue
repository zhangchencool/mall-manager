<template>
  <el-menu
  class="el-menu-demo"
  active-text-color="#ffd04b"
  unique-opened= "true"
  router
  ref="kzMenu"
  >
    <el-submenu :index="item.order" v-for="(item, index) in menusData" :key="index">
      <template slot="title">{{item.authName}}</template>
      <el-menu-item :index="items.path" v-for="(items, index) in item.children" :key="index">{{items.authName}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      menusData: [],
      color: '#ffd04b'
    }
  },
  created () {
    this.getMenusroles()
  },
  components: {

  },
  methods: {
    getMenusroles () {
      this.$axios
        .get('menus')
        .then((res) => {
          const {data, meta} = res.data
          if (meta.status === 200) {
            this.menusData = data
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleOpen () {

    },
    handleClose () {

    }
  },
  watch: {
    $route (route) {
      let paths = this.$route.path
      this.$refs.kzMenu.activedIndex = path
    }
  }
}
</script>

<style>

</style>
