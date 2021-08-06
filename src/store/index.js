import { createStore } from 'vuex'

export default createStore({
  state: {
    persons: []
  },
  mutations: {
    setPerson(state, payload) {
      state.persons.push(payload)
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
