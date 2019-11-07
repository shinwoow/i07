import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/Home'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/views/test'], resolve)
    },
    {
      path: '/ShinMusic',
      name: 'ShinMusic',
      component: resolve => require(['@/views/ShinMusic'], resolve)
    }
  ]
})
