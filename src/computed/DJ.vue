<template>
	<div id="DJ">
		  <div class="zx" style="height: .3rem; font-weight: bolder;  border-left: 3px solid red; font-size: .25rem;">
		  			 最新音乐		 
		  </div>
		  <van-cell-group/>
		    <van-cell 
			v-for="item of data"
			:key="item.id"
			size="large" 
			:title='item.songList[0].singername'
			:label='item.songList[0].songname'
			>
			<h2>{{item.topTitle}}</h2>
			<p>{{item.listenCount}}</p>
			<img :src="item.picUrl">
			</van-cell>
		
		  </van-cell-group>
	</div>
</template>

<script>
	export default {
		name:'DJ',
		props:{
			data:''
			},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){
	
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	img{
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
