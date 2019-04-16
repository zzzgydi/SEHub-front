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
      component: () => import('./views/home/Home.vue')
    }, {
      path: '/home/activity/:id',
      component: () => import('./views/home/EachAct.vue')
    }, {
      path: '/person',
      component: () => import('./views/others/Person.vue')
    }, {
      path: '/depart',
      component: () => import('./views/others/Depart.vue')
    }, {
      path: '/center',
      component: () => import('./views/second/Center.vue')
    }, {
      path: '/notice',
      component: () => import('./views/notice/Notice.vue')
    }, {
      path: '/notice/detail/:id',
      component: () => import('./views/notice/Detail.vue')
    }, {
      path: '/others',
      component: () => import('./views/others/Others.vue')
    }, {
      path: '/apply',
      component: () => import('./views/apply/ApplyHome.vue')
    }, {
      path: '/apply/:id',
      component: () => import('./views/apply/ApplyForm.vue')
    }]
  }, {
    path: '/admin',
    component: () => import('./admin/AdminLogin.vue')
  }, {
    path: '/admin/',
    component: () => import('./admin/AdminIndex.vue'),
    children: [{
      path: '/admin/home',
      component: () => import('./views/home/Home.vue')
    }, {
      path: '/admin/manage',
      component: () => import('./admin/work/UserManage.vue')
    }]
  }]
})
