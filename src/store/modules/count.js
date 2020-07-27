const state = {
  count: 2,
};

const getters = {
  doubleCount: (state) => state.count * 2,
  tripleS: (state) => state.count * 3,
};

const mutations = {
  inc(state, number) {
    state.count += number;
  },
  dec(state, number) {
    state.count -= number;
  },
};

const actions = {
  inc({ commit }, number) {
    commit("inc", number);
  },
  dec({ commit }, number) {
    commit("dec", number);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
