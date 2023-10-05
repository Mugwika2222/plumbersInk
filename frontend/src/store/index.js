import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false  },
  getters: {

  },
  mutations: {
     setIsLoggedIn(state){
      const token = localStorage.getItem('auth-token')
    if(token){
      state.isLoggedIn = true
    }
    }
  },
  actions: {
  },
  modules: {
  }
})