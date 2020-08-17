<template>
	<div id="Input">
		<van-search
		  v-model="value"
		  shape="round"
		  background="red"
		  placeholder="搜索"
		/>
	</div>
</template>

<script>
	export default {
		name:'Input',
		props:{},
		data(){
			return{
				value:''
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	#Input{
		position: fixed;
		top: 0;
		width: 100%;
		height: 1rem;
		z-index: 99;
	}
</style>