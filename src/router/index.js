import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
