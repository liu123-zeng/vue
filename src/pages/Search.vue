<template>
	<div id="Search">
		<van-search
		  v-model="value"
		  shape="round"
		  background="#4fc08d"
		  placeholder="请输入搜索关键词"
		  show-action="true"
		/>
		  <Footer/>
	</div>
</template>

<script>
	import Footer from '../computed/Footer.vue'
	export default {
		name:'Search',
		props:{},
		data(){
			return{
				value:''
			}
		},
		components:{Footer},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style>
</style>
