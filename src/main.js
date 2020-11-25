// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from '@/plugin/axios.js'
import breadcrumb from '@/plugin/breadcrumb.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.scss'
import moment from 'moment'
import store from './store'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Axios)
Vue.use(breadcrumb)
Vue.use(moment)
Vue.prototype.$echarts = echarts

// 注册全局过滤器处理时间格式
Vue.filter('format', (v) => {
  return moment(v).format('YYYY-MM-DD')
})
/* eslint-disable no-new */
// vue 开发环境提示语句
Vue.config.productionTip = true
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
