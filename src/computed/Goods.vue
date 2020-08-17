<template>
	<div id="Goods">
		  <h3>Goods</h3>
		  <nav>
		    <!-- <router-link to="/goods/1?a=1&b=2">商品01</router-link>
		    <router-link :to="{name:'goods-detail',params:{id:3},query:{a:111,b:222}}">商品03</router-link> -->
		    <router-link
		     v-for="(item,index) of nav"
		     :key="item.id"
		     :to="{name:'dt',params:item.params,query:item.query}"
		     >{{item.title}}</router-link>
		  </nav>
		  <div class="wrap">
		      <router-view>展示区2</router-view>
		    </div>
		    <p v-for="n of 40" :key="n">段落酱油{{n}}</p>
		  </div>
	</div>
	
</template>

<script>
	import axios from 'axios';
	export default {
		name:'Goods',
		props:{},
		data(){
			return{
				scrollTop:0,
				nav:[]
			}
		},
		components:{},
		mounted(){
			// console.log('mounted',this.nav);
			
			//模拟读取数据  导航完后再读取数据
			setTimeout(()=>{
			  this.nav=[
			   {path:'/goods',params:{id:1},query:{a:1,b:2},title:'商品01'},
			   {path:'/goods',params:{id:2},query:{a:12,b:22},title:'商品02'},
			   {path:'/goods',params:{id:3},query:{a:111,b:222},title:'商品03'},
			 ]
			},2000)
		},
		updated(){
			 // console.log('updated',this.nav);
		},
		methods:{}
	}
</script>

<style>
</style>
