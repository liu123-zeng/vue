<template>
	<div id="List">
		<div class="zx" style="height: .3rem; font-weight: bolder;  border-left: 3px solid red; font-size: .25rem;">
					  推荐歌单
					 
		</div>
		<van-grid :border="false" :column-num="3">
		  <van-grid-item 
		  class="ys"
		  v-for="item of data"
		  :key="item.id"
		  >
		   <img :src="item.cover_pic_url">
			<p>{{item.description}}</p>
			<h4>{{item.score}}</h4>
		  </van-grid-item>
		</van-grid>
	</div>
</template>

<script>
	export default {
		name:'List',
		props:{
			data:''
		},
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
	img{
		width: 100%;
		height: 1.7rem;
		position: relative;
	}
	h4{
		color: #ccc;
		position: absolute;
		right: .2rem;
		bottom: .9rem;
		border:1px solid #ccc;
		border-radius: 8px;
	}
</style>
