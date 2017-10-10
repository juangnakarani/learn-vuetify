import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Login from '@/components/Login'
import Guest from '@/components/Guest'
import Admin from '@/components/Admin'
import Register from '@/components/Register'
import ListPersons from '@/components/ListPersons'
import UploadPersons from '@/components/UploadPersons'
import Download from '@/components/Download'

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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/listpersons',
      name: 'ListPersons',
      component: ListPersons
    },
    {
      path: '/upload',
      name: 'UploadPersons',
      component: UploadPersons
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})
