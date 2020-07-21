import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: false,
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
