import axios from 'axios'
import {
  Actions,
  MediaStackResponse,
  Mutations,
  News,
} from '~/types/mediaStack.type'

const URL = 'http://api.mediastack.com/v1'
const access_key = '2548d88c21268018425aac28585a02b9'
const api = axios.create({ baseURL: URL })

export const state = {
  news: null,
}

export const mutations: Mutations = {
  setNews(state, payload) {
    state.news = payload
  },
}

export const actions: Actions = {
  async GET_ALL_NEWS({ commit }) {
    const params = { access_key }
    const res = await api.get<MediaStackResponse<News[]>>('/news', { params })
    commit('setNews', res.data.data)
    return res.data.data
  },
}
