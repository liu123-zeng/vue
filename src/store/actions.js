import axios from 'axios'
let actions ={
	jia:({commit},payload)=>{
		// console.log("actions",ctx,payload)
		// commit('imt',payload)
		commit({
			type:'imt',
			payload:payload
		})
		
	},
	jian:({commit},payload)=>{
		console.log("-")
		commit('dmt',payload)
	},
	odd:({commit,state},payload)=>{
		console.log("odd")
		if(state.count%2===0){
		commit({
			type:'imt',
			payload:payload
		})
		}
	},
	async:({commit,state},payload)=>{
		axios({
			url:'/data/user.json'
		}).then(
		res=>commit({
			type:'imt',
			payload:res.data.num
		})
		)
	}
}

export default actions