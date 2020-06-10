import Vue from 'vue'
import Vuex from 'vuex'
import GeneralModule from './general'
import CategoryModule from './category'
import CartModule from './cart'
import AuthModule from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    GeneralModule,
    CategoryModule,
    CartModule,
    AuthModule
  }
})
