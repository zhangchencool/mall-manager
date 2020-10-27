<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
        v-for='item in $route.matched' :key="item.path"
        >{{item.name}}</el-breadcrumb-item>

      </el-breadcrumb>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>

</style>
