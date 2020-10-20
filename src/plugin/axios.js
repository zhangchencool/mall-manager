// import axios from '@/api/axios'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

const MyPlugin = {}
MyPlugin.install = (Vue) => {
  Vue.prototype.$axios = axios
}
export default MyPlugin
