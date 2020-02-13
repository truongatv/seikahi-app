import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { localize, extend  } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';
import axios from 'axios'
import vi_extend from '@/i18n/validator/vi'

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// add these before Vue is instantiated
window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

// Vue.use(VeeValidate);
localize('vi', vi_extend);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
