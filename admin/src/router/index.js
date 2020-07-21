import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/admin',
    component: () => import('../views/Home'),
    beforeEnter: AuthGuard
  },
  {
    path: '/admin/signin',
    component: () => import('../views/SignIn')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

function AuthGuard(from, to, next) {
  Store.getters.isAuthenticated ? next() : next('/admin/signin')
}

export default router
