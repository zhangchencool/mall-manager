<template>
    <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="4"><div class="grid-content bg-purple">
        </div></el-col>
        <el-col :span="14"><div class="grid-content bg-purple-light middle">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple height-middle">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#fff"
            text-color='#000'
            active-text-color='#fff'
            >
                <el-submenu index="1">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2" @click= 'handleClose'> 退出</el-menu-item>
              </el-menu>

        </div></el-col>
      </el-row>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    handleClose () {
      localStorage.removeItem('token')
      this.$router.push('login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .row-bg{
    border-bottom: 1px solid #e6e6e6;
  }
  .middle{
      text-align: center;
  }
  .height-middle{
      display: flex;
      justify-content: flex-end;
      >>> .el-menu.el-menu--horizontal {
      border-bottom: none
  }
  }

</style>
