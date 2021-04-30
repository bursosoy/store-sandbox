import Vue from 'vue'
import Vuex from 'vuex'
import promotions from './promotions'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){ // data
    return{
      age: 188,
      isLoggedIn: false, // method is successful in getting correct user/pass
      userBadge: 'beginner',
      userSettings:[
        {label: 'Face ID', desc:'Set your face id by putting your face on camera.'},
        {label: 'TimeZone', desc:'You can change timezone depending on your country.'},
        {label: 'Currency', desc:'Your country default currency is i dont know.'},
      ]
    }
  },
  getters:{ // 'computed' real value based on business rules / needs a return
    userBadge(state){
      return state.userBadge.toUpperCase()
    },
    userSettings(state){
      let filteredSetting = []
      for(let index in state.userSettings){
          filteredSetting.push(state.userSettings[index])
          state.userSettings[index].label === 'TimeZone' 
          ? filteredSetting[index].isOn = true
          : filteredSetting[index].isOn = false
      }
      console.table(filteredSetting)
      return filteredSetting
    }
  },
  mutations: { // real-time
    ageDivideBy(state, payload){
      state.age = state.age/payload.num1
    }
  },
  actions: { // real-time / async -> waiting for a 'promise'
    ageDivideBy(context, payload){
      context.commit('ageDivideBy', {dividend: payload.dividend, num1: payload.num1})
    }
  },
  modules: {
    promotions
  }
})

// 1. Standard way of getting data
    // raw(state) => getter => computed => DOM
// 2. Standard way of changing data
  // component method => actions => mutations => raw(state)