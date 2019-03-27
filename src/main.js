import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import './plugins/element.js'
import SeHeader from './components/index/SeHeader'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.component('simple-header', SeHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
