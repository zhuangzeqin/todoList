import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import start from '../views/Start.vue'
//定义了路由的配置数组
//name:路由的名称
//path:路由的路径
//components:对应的路由组件
const routes = [
  {
    path: '/',
    name: 'start',
    component: start
  },
  {
    path: '/home',
    name: 'Home',
     component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    //按需引入； 如果没有访问；则不不会加载
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    //按需引入； 如果没有访问；则不不会加载
    component: () => import('../views/Detail.vue')
  }
]
//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  //路由的页面会带上一个#访问；一般看起来会比较丑； 一般用上面的就可以了； 
  // history: createWebHashHistory(process.env.BASE_URL), 
  routes
})

export default router
