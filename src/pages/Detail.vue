<template>
	<div id="Detail">
		<Nav
		/>
		<DJ
		:data="data"
		/>
		<Footer/>
	</div>
</template>


<script>
	import Nav from'../computed/Nav.vue'
	import DJ from '../computed/DJ.vue'
	import Footer from '../computed/Footer.vue'
	
	export default {
		name:'Detail',
		props:{},
		data(){
			return{
				data:''
			}
		},
		components:{
			DJ,Footer,Nav
		},
		mounted(){
			    this.$axios({
					url:'http://localhost:80/raking'
				}).then(
				(res)=>{
					// console.log(res.data.data.topList)
					this.data=res.data.data.topList
				}
				)
		},
		computed:{

		},
		   
		updated(){},

		methods:{

		},
		
	}
</script>

<style scoped>
</style>
