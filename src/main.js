import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import './plugins/element.js'
import SimpleHeader from './components/index/SimpleHeader'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.component('simple-header', SimpleHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
