import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { PageNotFound, Login, Hero, Crisis, Admin, Dashboard, HeroManage } from '../page'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/hero',
    name: 'hero-center',
    component: Hero
  }, {
    path: '/crisis-center',
    name: 'crisis-center',
    component: Crisis
  }, {
    path: '/admin',
    name: 'crisis-center',
    component: Admin,
    children: [{
      path: '',
      redirect: 'dashboard'
    }, {
      path: 'dashboard',
      component: Dashboard
    }, {
      path: 'hero-manage',
      component: HeroManage
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/404',
    name: 'page not found',
    component: PageNotFound
  }]
})
