import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
     
  },
  getters: {

  },
  mutations: {
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setSuccessMessage(state, message) {
      state.successMessage = message;
    },
  },
  actions: {
    setIsLoggedInFromLocalStorage({ commit }) {
      const token = localStorage.getItem('auth-token');
      if (token) {
        commit('setIsLoggedIn', true);
      } else {
        commit('setIsLoggedIn', false);
      }
    },
  },
  modules: {
  }
})