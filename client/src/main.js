import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"
import VueProgressBar from 'vue-progressbar';

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#e74c3c',
  failedColor: 'red',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
})

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:5000'), //options object is Optional,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
