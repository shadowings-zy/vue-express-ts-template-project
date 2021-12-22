import { createStore } from 'vuex';

interface IState {
  routerIndex: string;
}

const store = createStore({
  state() {
    return {
      routerIndex: '0'
    };
  },
  mutations: {
    setRouterIndex(state: IState, index: string) {
      state.routerIndex = index;
    }
  }
});

export default store;
