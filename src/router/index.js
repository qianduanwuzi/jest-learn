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
    }
  ]
})
