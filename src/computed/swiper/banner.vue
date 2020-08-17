<template>
	<div class="banner">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img src="./img/1.png"></van-swipe-item>
		  <van-swipe-item><img src="./img/2.png"></van-swipe-item>
		  <van-swipe-item><img src="./img/3.png"></van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>

	export default {
		name:'banner',
		props:{},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	.banner{
		height: 3rem;
		margin-top: .93rem;
	}
	  .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
		width: 80%;
		height: 2.8rem;
		}
		img{
			width: 100%;
			height: 2.8rem;
		}
	  
</style>
