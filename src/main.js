import Vue from 'vue'
import App from './App.vue'
import router from './plugin/router.js'
import store  from './plugin/vuex.js'
import VantUI from './plugin/vant.js'
import './plugin/axios'
import './assets/css/base.css'
import './assets/js/font.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
