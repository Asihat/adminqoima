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
      layout: 'main'
    },
    component: () => import('../views/Categories')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Detail-record')
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/History')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Record')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'empty'
    },
    component: () => import('../views/Register')
  },
  {
    path: '/items/:id',
    name: 'item',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Item')
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
