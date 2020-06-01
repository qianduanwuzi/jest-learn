import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/test.vue')
    },
    {
      path: '/test1',
      name: 'Test1',
      component: () => import('@/views/test1.vue')
    },
    {
      path: '/test2',
      name: 'Test2',
      component: () => import('@/views/test2.vue')
    },
    {
      path: '/test3',
      name: 'Test3',
      component: () => import('@/views/test3.vue')
    },
    {
      path: '/test4',
      name: 'Test4',
      component: () => import('@/views/test4.vue')
    }
  ]
})
