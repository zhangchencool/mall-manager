import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Right from '@/components/right/right.vue'
import Permission from '@/components/permission/permission.vue'
import Welcome from '@/components/systemManager/welcome/welcome.vue'
import managementFlies from '@/components/systemManager/managementFlies/managementFlies.vue'
import userManager from '@/components/systemManager/userManager/userManager.vue'
import menuManager from '@/components/systemManager/menuManager/menuManager.vue'
import manangerRole from '@/components/systemManager/manangerRole/manangerRole.vue'
import managerMsg from '@/components/systemManager/managerMsg/managerMsg.vue'
import managerDepartment from '@/components/systemManager/managerDepartment/managerDepartment.vue'
import publishStocks from '@/components/businessManagement/publishStocks/publishStocks.vue'
import addStocks from '@/components/businessManagement/addStocks/addStocks.vue'
import inStorage from '@/components/businessManagement/materialsManagement/inStorage.vue'
import material from '@/components/businessManagement/materialsManagement/material.vue'
import materialInventory from '@/components/businessManagement/materialsManagement/materialInventory.vue'
import materialRecord from '@/components/businessManagement/materialsManagement/materialRecord.vue'
import materialType from '@/components/businessManagement/materialsManagement/materialType.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: '欢迎',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', name: '系统首页', component: Welcome },
        { path: '/attachments', name: '附件管理', component: managementFlies },
        { path: '/users', name: '用户管理', component: userManager },
        { path: '/menus', name: '菜单权限', component: menuManager },
        {
          path: '/departments',
          name: '部门管理',
          component: managerDepartment
        },
        { path: '/roles', name: '角色管理', component: manangerRole },
        { path: '/notices', name: '公告管理', component: managerMsg },
        { path: '/roles', name: '角色列表', component: Right },
        { path: '/permission', name: '角色配置', component: Permission },
        {
          path: '/OutStocks/publishStocks',
          name: '物资发放',
          component: publishStocks
        },
        { path: '/inStocks/addStocks', name: '物资入库', component: addStocks },
        { path: '/inStocks', name: '入库记录', component: inStorage },
        { path: '/products', name: '物资资料', component: material },
        {
          path: '/productCategorys',
          name: '物资类别',
          component: materialType
        },
        { path: '/outStocks', name: '发放记录', component: materialRecord },
        { path: '/stocks', name: '物资库存', component: materialInventory }
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
