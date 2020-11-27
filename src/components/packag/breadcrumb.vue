<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item
        v-for='item in $route.matched' :key="item.path" :to="{path: item.path}"
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

<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 30px;
}
</style>
