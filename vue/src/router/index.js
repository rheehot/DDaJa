import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import exploreRouter from './explore'
import adminRouter from './admin'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views-copy/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views-copy/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views-copy/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index'),
        name: '따자',
        meta: { title: '따자', noCache: true }
      }
    ]
  }
]

export const asyncRoutes = [
  exploreRouter,
  adminRouter,
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views-copy/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views-copy/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true }
]
const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
