<template>
	<div>
		<h3>状态管理</h3>
		<button @click="jia(1)">+</button>
		<button @click="jian(1)">-</button>
		<button @click="odd(1)">odd+</button>
		<button @click="async">async+</button>
		<h1 style="color: dodgerblue;">{{this.$store.state.count}}/{{count}}</h1>
		<br/>
		<h3>{{GetCount}}</h3>
	</div>
</template>


<script>
	import {mapGetters,mapActions,mapMutations,mapState} from 'vuex'

	export default {
		name:'app',
		props:{},
		data(){
			return{
				
				
			}
		},
		components:{
			
		},
		mounted(){
			    
		},
		computed:{
			...mapGetters(['GetCount']),
			...mapState(['count'])
		},
		   
		updated(){},
		// methods:{
		// 	jia(){
		// 		// this.$store.dispatch('jia',3)
		// 		this.$store.commit("imt",2)
		// 	}
		// },
		methods:{
        ...mapActions(['jia','jian','odd','async']),
		...mapMutations(['imt'])
		},
		
	}
</script>

<style scoped>
</style>

