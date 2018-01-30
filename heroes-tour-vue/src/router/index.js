import Vue from 'vue'
import Router from 'vue-router'
import { PageNotFound, Login, Hero, Crisis, Admin, Dashboard, HeroManage, CrisisManage, HeroDetailPage, MessageCenter } from '../page'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/hero-detail/:id',
    component: HeroDetailPage
  }, {
    path: '/hero',
    component: Hero
  }, {
    path: '/crisis-center',
    component: Crisis
  }, {
    path: '/admin',
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
    }, {
      path: 'crisis-manage',
      component: CrisisManage
    }, {
      path: 'message-center',
      component: MessageCenter
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
