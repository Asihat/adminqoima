import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.token !== null && state.user !== null;
    },

    user(state) {
      return state.user
    },

  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, data) {
      state.user = data
    },
  },
  actions: {
    async signIn({dispatch}, credential) {
      let response = await axios.post('/signin', {
        email: credential.email,
        password: credential.password
      },).catch((e) => {
        console.log(e)
      })

      return dispatch('attempt', response.data.token)
    },

    async attempt({commit, state}, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }

      if (!state.token) {
        return
      }

      try {
        axios.get('/get/me', {
            params: {
              token: token,
            },
          },
        ).then(response => {
          commit('SET_USER', response.data.result.admin)
        })
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    },

    signOut({commit}) {
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
      localStorage.removeItem('token')

      return true
    }
  }
}
