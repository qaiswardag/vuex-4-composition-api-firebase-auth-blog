import { createStore } from 'vuex';

export default createStore({
  state: {
    points: 100,
  },
  mutations: {
    updatePoint(state, payload) {
      state.points = state.points + payload;
    },
  },
  actions: {},
  modules: {},
});
