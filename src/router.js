import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    component: () => import('./views/Login.vue')
  }, {
    path: '/',
    name: 'index',
    component: () => import('./views/Index.vue'),
    children: [{
      path: '/home',
      component: () => import('./views/home/Home_new.vue')
    }, {
      path: '/home/eachact/:id',
      component: () => import('./views/home/EachAct.vue')
    }, {
      path: '/person',
      component: () => import('./views/others/Person.vue')
    }, {
      path: '/depart',
      component: () => import('./views/others/Depart.vue')
    }, {
      path: '/work',
      component: () => import('./views/second/Work.vue')
    }, {
      path: '/others',
      component: () => import('./views/others/Others.vue')
    }, {
      path: '/apply',
      component: () => import('./views/apply/Apply.vue')
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
    }, {
      path: '/apply/newmedia',
      component: () => import('./views/apply/Newmedia.vue')
    }]
  }, {
    path: '/module/regsys',
    component: () => import('./views/module/RegSys.vue')
  }]
})
