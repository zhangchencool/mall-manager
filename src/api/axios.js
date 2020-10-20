import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

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
