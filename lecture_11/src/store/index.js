import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    finishLoading(state) {
      state.loading = false;
    }
  },
  actions: {
    fetchUsers(ctx, url) {
      fetch(url)
      .then(response => (response.ok ? response.json() : Promise.reject()))
      .then(response => {
        ctx.commit('setUsers', response)
        ctx.commit('finishLoading')
      })
      .catch(() => ctx.commit('finishLoading'))
    }
  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getLoading(state) {
      return state.loading
    }
  }
})
