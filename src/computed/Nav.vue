<template>
	<div id="Nav">
	<van-nav-bar
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
	/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name:'Nav',
		props:{},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			    onClickLeft() {
			      Toast('返回');
			    },
		}
	}
</script>

<style scoped>
	#Nav{
		width: 100%;
		z-index: 2;
		position: fixed;
		top: 0;
	}
</style>
