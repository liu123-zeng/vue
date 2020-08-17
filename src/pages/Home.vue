<template>
	<div id="Home">
	<Ucinput/>
	<Banner/>
	<List
	:data="pic"
	/>
<!-- 	<DJ/> -->
	<Footer/>
	</div>
</template>

<script>
	import Ucinput from '../computed/uc-input.vue'
	import Banner from '../computed/swiper/banner.vue'
	import Footer from  '../computed/Footer.vue'
	import List from '../computed/List/List.vue'
	// import DJ from '../computed/DJ.vue'
	export default {
		name:'Home',
		props:{},
		data(){
			return{
				pic:''
			}
		},
		components:{
			Ucinput,Banner,Footer,List
		},
		mounted(){
			this.$axios({
				url:'http://localhost:80/recommend'
			}).then(
			(res)=>{
				this.pic = res.data.homeData.hotList
			}
  
			)
		},
		updated(){},
		methods:{}
	}
</script>

<style>
</style>
