import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
  },
  mutations: {
    setUserInfo (state, userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      state.userInfo = userInfo
    }
  },
  actions: {},
  modules: {}
})

export default store
