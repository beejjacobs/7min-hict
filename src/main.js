import Vue from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.min.css';
import vuetify from './plugins/vuetify';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
