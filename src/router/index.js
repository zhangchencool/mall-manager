import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {path: 'users', name: '选项1', component: Users}
      ]
    }
  ]
})
