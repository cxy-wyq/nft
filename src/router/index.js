import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => { require(['@/page/Home'], resolve) }
    },
    {
      path: '/TOKEN',
      name: 'token',
      component: (resolve) => { require(['@/page/token'], resolve) }
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: (resolve) => { require(['@/page/faq'], resolve) }
    },
    {
      path: '/news',
      name: 'news',
      component: (resolve) => { require(['@/page/news'], resolve) }
    }
  ]
})
