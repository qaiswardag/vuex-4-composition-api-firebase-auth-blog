import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: { displayName: 'trine' },
  },
  mutations: {
    setUser(state, payload) {
      state.user = 'payload';
    },
  },
});

// export the store
export default store;
