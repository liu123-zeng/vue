<template>
	<div id="ChildA">
		<h3>ChildA</h3>
		  <div>{{$root.msg1}}/{{$root.msg2}}/{{$root.msg3}}</div>
	</div>
</template>

<script>
	export default {
		name:'ChildA',
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
	#ChildA{
		background: red;
	}
</style>
