import Vue from 'vue';
import Vuex from 'vuex';//引入vuex包
Vue.use(Vuex);//安装插件到vue

import state from '../store/state.js'
import actions from '../store/actions.js'
import mutations from '../store/mutations.js'
import getters from '../store/getters.js'

let store = new Vuex.Store({//配置接受state等选项，值为对象
  state,mutations,
  getters,actions
});

export default store