<template>
	<div id="ChildB">
		<h3>ChildB</h3>
		  <div>{{$root.msg1}}/{{$root.msg2}}/{{$root.msg3}}</div>
	</div>
</template>

<script>
	export default {
		name:'ChilB',
		props:{
			
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

<style>
	#ChildB{
		background: greenyellow;
	}
</style>
