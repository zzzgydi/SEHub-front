import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('./views/Index.vue'),
    children: [{
      path: '/home',
      component: () => import('./views/Home.vue')
    }, {
      path: '/work',
      component: () => import('./views/Work.vue')
    }, {
      path: '/others',
      component: () => import('./views/Others.vue')
    }, {
      path: '/apply/activity',
      component: () => import('./views/apply/Activity.vue')
    }, {
      path: '/apply/etiquette',
      component: () => import('./views/apply/Etiquette.vue')
    }, {
      path: '/apply/material',
      component: () => import('./views/apply/Material.vue')
    }, {
      path: '/apply/presenter',
      component: () => import('./views/apply/Presenter.vue')
    }, {
      path: '/apply/publicity',
      component: () => import('./views/apply/Publicity.vue')
    }, {
      path: '/apply/reporter',
      component: () => import('./views/apply/Reporter.vue')
    }, {
      path: '/apply/ticket',
      component: () => import('./views/apply/Ticket.vue')
    }]
  }, {
    path: '/regsys',
    component: () => import('./views/detail/RegSys.vue')
  }]
})
