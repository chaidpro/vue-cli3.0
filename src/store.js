import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-type';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    userInfo: '登陆人',
    passWord: '1234567890'
  },
  getters: {
    userInfo: state => {
      return state.userInfo;
    }
  },
  mutations: {
    [types.SET_MUTATIONS_USERINFO] (state, payload) {
      console.log(state, payload, '2345678');
      const nativeState = state;
      nativeState.userInfo = payload.userInfo;
    }
  },
  actions: {
    actionUserInfo (context, payload) {
      console.log(context, payload);
      return context.commit(types.SET_MUTATIONS_USERINFO, payload);
    }
  }
});
