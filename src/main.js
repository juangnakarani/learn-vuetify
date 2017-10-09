// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './stylus/main.styl'
import Vue from 'vue'

import App from './App'
import router from './router'
import('../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
