<template>
	<div id="User">
		  <h3>User</h3>
		  <div>用户名: {{ username }}</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:'User',
		// beforeRouterEnter(to,from,next){
		// 	console.log("前置 内部")
		// 	axios({
		// 		url:'/data/user.json'
		// 	}).then(
		// 	res=>{
		// 		next(_this => (_this.username = res.data.username));
		// 	});
		// },
		beforeRouteEnter(to, from, next) {
		  console.log('内部 前置');
		  
		  axios({ 
			  url: '/data/user.json' ,
			  }).then(res => {next(_this => (_this.username = res.data.username));
		  });
		},
		props:{
			
		},
		data(){
			return{
				username:''
			}
		},
		beforeCreate() {
		  console.log('beforeCreate',this.username);
		},
		components:{},
		mounted(){console.log('user mounted',this.username);},
		updated(){ console.log('user updated',this.username);},
		methods:{},
		destroyed() {
		  console.log('user destroyed');
		}
	}
</script>

<style>
</style>
