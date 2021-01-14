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
      try {
        const response = await fetch('http://localhost:1337/recipe', {
          method: 'POST',
          // mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            displayName: 'test',
          }),
        });
        console.log(response);
      } catch (e) {
        debugger;
      }
    },
    async getToken() {
      try {
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
        console.log(response);
      } catch (e) {
        debugger;
      }
    },
  },
  modules: {
  },
});
