import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
  token: '',
  isauth: false,
  islogin: false
}

const mutations = {
  changeToken (anu, token) {
    this.state.token = token
    console.log(anu)
  },
  setIsAuth (param, bool) {
    this.state.isauth = bool
  },
  setIsLogin (param, bool) {
    this.state.islogin = bool
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})
