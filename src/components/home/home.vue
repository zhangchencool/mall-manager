<template>
    <el-container class="container">
        <el-header class="header">
          <myheader></myheader>
        </el-header>
        <el-container>
          <el-aside width="200px" class="aside">
            <myaside :menusData= "menusData" :defaultActive= 'defaultActive'></myaside>
          </el-aside>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>
import myheader from '@/components/home/myheader.vue'
import myaside from '@/components/home/aside.vue'
export default {
  name: 'home',
  data () {
    return {
      menusData: [],
      defaultActive: ''
    }
  },
  components: {
    myheader,
    myaside
  },
  methods: {
    getMenusroles () {
      this.$axios
        .get('user/findMenu')
        .then((res) => {
          const {data, msg, code} = res.data
          if (code === 200) {
            this.menusData = data
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    setCurrentRoute () {
      this.defaultActive = this.$route.path
       //关键   通过他就可以监听到当前路由状态并激活当前菜单
    }
  },
  beforeCreate () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('login')
    }
  },
  created() {
    this.getMenusroles()
    this.setCurrentRoute()
  },
  watch: {
    $route () {
      this.setCurrentRoute()
      // this.$refs.kzMenu.activedIndex = path
    }
  },
}
</script>

<style lang="scss">
.container{
    height: 100%;

    .header{
        background-color: #ffffff;
    }
    .aside{
        background-color: #ffffff;
        height: 100%;
    }
}

</style>
