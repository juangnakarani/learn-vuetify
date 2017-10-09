import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
