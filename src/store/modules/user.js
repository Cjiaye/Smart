import UserApi from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    menus: [],
    avatar: '',
    imgs: '',
    nameinfo: '',
    tags: [
      {
        fullPath: '/',
        meta: { title: '控制台' },
        path: '/'
      }
    ]
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    menu(state, data) {
      state.menus = data.menus
    },
    tags(state, data) {
      const index = state.tags.findIndex((item) => {
        return item.path === data.path
      })
      if (index === -1) {
        state.tags.push(data)
      }
    },
    closeTags(state, name) {
      const index = state.tags.findIndex((itm) => {
        return itm.meta.title === name
      })
      state.tags.splice(index, 1)
    },
    allclose(state) {
      state.tags = [
        {
          fullPath: '/',
          meta: { title: '控制台' },
          path: '/'
        }
      ]
    },
    userinfo(state, data) {
      state.avatar = data.avatar
      state.nameinfo = data.username
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
    },
    tags({ commit }, data) {
      commit('tags', data)
    },
    allclose({ commit }) {
      commit('allclose')
    },
    async head({ commit }) {
      try {
        const data = await UserApi.info()
        commit('userinfo', data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    closeTags({ commit }, name) {
      commit('closeTags', name)
    }
  }
}
