import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {
      name: 'Test',
      depart: 'XXX部'
    },
    permission: {},
    activities: {
      ongoing: [],
      preparing: []
    }
  },
  mutations: {
    login (state) {
      state.isLogin = true
      console.log('store login')
    }
  },
  actions: {

  }
})
