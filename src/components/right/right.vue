<template>
 <div class="right-container">
    <div class="crumbs-nav">
        <breadcrumb></breadcrumb>
    </div>
    <div class="table-cocent">
        <Table></Table>
    </div>
 </div>
</template>

<script>
import Table from '@/components/packag/table.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    Table
  }
}
</script>

<style>

</style>
