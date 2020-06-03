import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'empty',
      middleware: [
        guest
      ]
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Categories')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Detail-record')
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/History')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Record')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'empty',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Register')
  },
  {
    path: '/items/:id',
    name: 'item',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/Item')
  },
  {
    path: '/changepassword',
    name: 'changepassword',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/ChangePassword')
  },
  {
    path: '/change/qoima/information',
    name: 'changeqoimainformation',
    meta: {
      layout: 'main',
      middleware: [
        auth
      ]
    },
    component: () => import('../views/ChangeQoimaInformation')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }


  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })

})

export default router
