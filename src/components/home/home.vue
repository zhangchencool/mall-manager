<template>
    <el-container class="container">
        <el-header class="header">
          <myheader></myheader>
        </el-header>
        <el-container>
          <el-aside width="200px" class="aside">
            <myaside></myaside>
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

    }
  },
  components: {
    myheader,
    myaside
  },
  beforeCreate () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('login')
    }
  }
}
</script>

<style lang="scss">
.container{
    height: 100%;

    .header{
        background-color: #a0cbd1;
    }
    .aside{
        background-color: #a3dadd;
    }
}

</style>
