<template>
	<div id="Footer">
	<router-view />
	
	<van-tabbar route>
	  <van-tabbar-item replace to="/home" icon="location-o">
	    标签
	  </van-tabbar-item>
	  <van-tabbar-item replace to="/search" icon="search">
	    标签
	  </van-tabbar-item>
	  <van-tabbar-item replace to="/Detail" icon="like-o">
	    标签
	  </van-tabbar-item>
	  <van-tabbar-item replace to="/user" icon="friends-o">
	    标签
	  </van-tabbar-item>
	</van-tabbar>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		props:{},
		data(){
			return{
				  active: 0,
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	#Footer{
		position: fixed;
		bottom: 0;
	}
</style>
