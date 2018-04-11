import CachePage from './CachePage.vue'
import Example from './Example.vue'
import Router from 'vue-router'
import Bar from './Bar.vue'
import Foo from './Foo.vue'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/cache',
      name: 'cache',
      component: CachePage,
      children: [
        {
          path: 'foo/:id?',
          props: true,
          component: Foo
        },
        {
          path: 'bar/:id?',
          props: true,
          component: Bar
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Example)
})
