import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    csrf: '',
  },
  mutations: {
    setCsrfToken(state, token) {
      state.csrf = token;
    },
  },
  actions: {
    async testFetch({ state }) {
      const response = await fetch('http://localhost:1337/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': state.csrf,
        },
        body: JSON.stringify({
          displayName: 'test',
          // _csrf: state.csrf,
        }),
      });
      console.log(response);
    },
    async getToken({ commit }) {
      const response = await fetch('http://localhost:1337/token', {
        method: 'GET',
        // mode: 'no-cors',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //   displayName: 'poop',
        // }),
      });
      const body = await response.json();
      // eslint-disable-next-line
      const token = body._csrf;
      commit('setCsrfToken', token);
    },
  },
  modules: {
  },
});
