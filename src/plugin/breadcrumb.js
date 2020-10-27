import breadCrumbCom from '@/components/packag/breadcrumb.vue'

const breadcrumb = {}
breadcrumb.install = (Vue) => {
  Vue.component('breadcrumb', breadCrumbCom)
}
export default breadcrumb
