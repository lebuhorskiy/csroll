import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { createProvider } from './vue-apollo'

import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);
import FloatingVue from 'floating-vue'
Vue.use(FloatingVue)
import 'floating-vue/dist/style.css'
Vue.config.productionTip = true
import VueAgile from 'vue-agile'
Vue.use(VueAgile)
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);
import { mapGetters } from "vuex";
new Vue({
  store,
  router,
  computed: {
    ...mapGetters({
      width: 'config/windowWidth',
      authStatus: 'user/authStatus',
      getState: 'user/user',
      currency: 'config/currency'
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
