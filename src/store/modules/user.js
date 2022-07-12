import UserApi from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    menus: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    menu(state, data) {
      state.menus = data.menus
    }
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await UserApi.login(loginForm)
      commit('setToken', token)
      return token
    },
    async navMenu({ commit }) {
      try {
        const data = await UserApi.menu()
        commit('menu', data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
