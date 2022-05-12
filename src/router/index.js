import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hone',
      component: (resolve) => { require(['@/page/home'], resolve) }
    },
    {
      path: '/token',
      name: 'Token',
      component: (resolve) => { require(['@/page/token'], resolve) }
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: (resolve) => { require(['@/page/faq'], resolve) }
    },
    {
      path: '/news',
      name: 'News',
      component: (resolve) => { require(['@/page/news'], resolve) }
    },
    {
      path: '/shownew',
      name: 'ShowNew',
      component: (resolve) => { require(['@/page/shownew'], resolve) }
    }
  ]
})
