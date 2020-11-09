import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.url !== 'login') {
    const AUTH_TOKEN = localStorage.getItem('token')
    config.headers.common['Authorization'] = AUTH_TOKEN
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default {
  get (url, params, type) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params
        // cancelToken: new CancelToken ((c) => {
        //   cancel = c
        // })
      }).then(res => {
        resolve(res)
      })
    })
  },
  post (url, data, headers, type) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data,
        headers: headers
        // cancelToken: new CancelToken ((c) => {
        //   cancel = c
        // })
      }).then(res => {
        resolve(res)
      })
    })
  },
  delete (url, params, type) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        params
        // cancelToken: new CancelToken ((c) => {
        //   cancel = c
        // })
      }).then(res => {
        resolve(res)
      })
    })
  }
}
