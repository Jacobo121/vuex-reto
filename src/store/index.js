import { createStore } from 'vuex'

export default createStore({
  state: {
    persons: []
  },
  mutations: {
    setPerson(state, payload) {
      state.persons.push(payload)
      console.log(state.persons)
    }
  },
  actions: {
    setResponse({commit}, person) {
      commit('setPerson', person)
    }
  },
  modules: {
  }
})
