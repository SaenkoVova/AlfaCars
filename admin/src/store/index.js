import Vue from 'vue'
import Vuex from 'vuex'
import OnlineModule from './online'
import AuthModule from '../store/auth'
import GeneralModule from '../store/general'
import UserModule from '../store/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    OnlineModule,
    AuthModule,
    GeneralModule,
    UserModule
  }
})
