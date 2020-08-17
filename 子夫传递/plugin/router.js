import Vue from "vue" //引入Vue
import VueRoute  from 'vue-router'; //引入vue-router路由
//引入组件
import Header from "../computed/Header.vue"
import Footer from "../computed/Footer.vue"
import Goods from "../computed/Goods.vue"
import Login from "../computed/Login.vue"
import Reg from "../computed/Reg.vue"
import Detail from "../computed/Detail.vue"
import Err from "../computed/Err.vue"
import User from "../computed/User.vue"
//安装插件
Vue.use(VueRoute)
//配置路由
let routes = [
	{
	  path: '/user',
	  component: User,
	  beforeEnter: (to,from,next)=>{ //路由独享守卫 前置 
	    console.log('路由独享守卫');
		
	  }
	 },
	{path:'/Header',component:Header},
	{path:'/Footer',component:Footer},
	{path:'/Goods',component:Goods},
	{path:'/Login',component:Login},
	{path:'/Reg',component:Reg},
	{path:'/Detail',component:Detail},
	{path:'*',component:Err},
	
]
//路由实例
let router =new VueRoute({
	routes,
	mode:'history',
	
	  scrollBehavior (to, from, savedPosition) {
	    return { x: 0, y: 0 }
	  }

})
//导出路由
export default router;