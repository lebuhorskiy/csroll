import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false
import { mapGetters } from "vuex";
new Vue({
  store,
  router,
  computed: {
    ...mapGetters({
      authStatus: 'user/authStatus',
      getState: 'user/user',
    }),
    user () {
      return this.getState
    },
    isAuth () {
      return this.authStatus
    }
  },
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
