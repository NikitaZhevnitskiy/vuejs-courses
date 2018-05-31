import api from '../../api/imgur'
import qs from 'qs'


const state ={
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  finalizeLogin: ({ commit }, hash) => {
    const q = qs.parse(hash.replace('#',''));
    commit('setToken', q.access_token)
    window.localStorage.setItem('imgur_token', q.access_token)
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}