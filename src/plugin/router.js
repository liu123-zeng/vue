import Vue from "vue" //引入Vue
import VueRoute  from 'vue-router'; //引入vue-router路由
//引入组件

import Goods from "../pages/Goods.vue"
import Login from "../pages/Login.vue"
import Reg from "../pages/Reg.vue"
import Detail from "../pages/Detail.vue"
import Err from "../pages/Err.vue"
import User from "../pages/User.vue"
import Home from "../pages/Home.vue"
import Search from "../pages/Search.vue"
//安装插件
Vue.use(VueRoute)
//配置路由
let routes = [
	{path: '/user',component: User},
	{path: '/Detail',component: Detail},
	{path: '/Search',component: Search},
	{path: '/goods',
    component: Goods,
	   children:[
	      {path:':detail',component:Detail,name:'dt'}
	    ]
	},
	{path:'/Login',component:Login},
	{path:'/Home',component:Home,name:'home'},
	{path:'/Reg',component:Reg},
	{path:'*',component:Home},
	
]
//路由实例
let router =new VueRoute({	
	routes,
	mode:'history',
})
router.beforeEach((to,from,next)=>{
  console.log('跳转成功')
  next()
})
router.afterEach((to,from)=>{
  console.log('即将跳转')
})

//导出路由
export default router;