import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import config from "@/store/modules/config";
import profile from "@/store/modules/profile";
import user from "@/store/modules/user";
import shop from "@/store/modules/shop";
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    config,
    profile,
    user,
    shop
  }
})
