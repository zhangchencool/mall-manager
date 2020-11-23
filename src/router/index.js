import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'
import Right from '@/components/right/right.vue'
import Permission from '@/components/permission/permission.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      redirect: '/users',
      children: [
        {path: 'users', name: '用户管理', component: Users},
        {path: 'roles', name: '角色列表', component: Right},
        {path: 'permission', name: '角色配置', component: Permission}
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.name === 'login') {
    debugger
    return next()
  } else {
    const AUTH_TOKEN = localStorage.getItem('token')
    if (!AUTH_TOKEN) {
      alert('您还没有登录，请先登录')
      return next('/login')
    }
    next()
  }
})

export default router
