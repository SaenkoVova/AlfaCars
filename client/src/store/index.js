import Vue from 'vue'
import Vuex from 'vuex'
import GeneralModule from './general'
import CategoryModule from './category'
import CartModule from './cart'
import AuthModule from './auth'
import UserModule from './user'
import CompareModule from './compare'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    GeneralModule,
    CategoryModule,
    CartModule,
    AuthModule,
    UserModule,
    CompareModule
  }
})
