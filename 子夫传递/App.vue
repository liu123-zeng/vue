<template>
	<div id="app">
		<h3>App数据</h3>
		  <div>{{$root.msg1}}/{{$root.msg2}}/{{$root.msg3}}</div>
		<ChildA/>
		<ChildB/>
		 <button @click="checkMsg1">修改msg1数据</button>
	</div>
</template>


<script>
	import ChildA from './computed/childA.vue'
	import ChildB from './computed/childB.vue'
	export default {
		name:'app',
		props:{},
		data(){
			return{
				
			}
		},
		components:{
			ChildA,ChildB
		},
		mounted(){},
		updated(){},
		methods:{
			      checkMsg1(){
			        this.$root.msg1='修改后的数据'+Math.random()
			      }
		}
	}
</script>

<style>
#app{
	background: #ccc;
}
</style>
