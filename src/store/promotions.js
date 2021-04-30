export default{
    namespaced: true,
    state(){
        return{
            promoStatus: 'non-eligible'
        }
    },
    getters:{
        promoStatus(state){
            return state.promoStatus
        }
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        
    }
}