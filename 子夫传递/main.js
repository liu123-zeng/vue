import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	data:{
		msg1:'数据1',
		msg2:'数据2',
		msg3:"数据3"
		
	},
  render: h => h(App),

}).$mount('#app')
