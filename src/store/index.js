import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const getters = {
  token: (state) => {
    return state.token;
  },
  moduleList: (state) => {
    return state.moduleList;
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production", //只在开发环境下使用严格模式
  state,
  mutations,
  actions,
  modules: {},
  getters,
});
