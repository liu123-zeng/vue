<template>
	<div id="app">
		<router-view>
	<Search/>
	</router-view>
	</div>
</template>

<script>
	import Search from './pages/Search.vue'
	export default {
		name:'app',
		props:{},
		data(){
			return{
				
			}
		},
		components:{Search},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style>
</style>
