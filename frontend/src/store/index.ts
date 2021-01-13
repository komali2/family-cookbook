import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async testFetch() {
      const response = await fetch('http://localhost:1337/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName: 'poop',
        }),
      });
      console.log(response);
    },
  },
  modules: {
  },
});
