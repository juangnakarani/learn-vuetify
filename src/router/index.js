import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Login from '@/components/Login'
import Guest from '@/components/Guest'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/guest',
      name: 'Guest',
      component: Guest
    }
  ]
})
