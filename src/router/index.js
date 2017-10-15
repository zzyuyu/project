import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
    	path:'/*',
    	redirect:'home'//不是以上几个地址的，重定向
    }
  ]
})
