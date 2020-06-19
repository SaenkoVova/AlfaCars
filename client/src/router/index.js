import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../store/index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    component: () => import('../views/Contacts')
  },
  {
    path: '/delivery',
    component: () => import('../views/Delivery')
  },
  {
    path: '/guarantee',
    component: () => import('../views/Guarantee')
  },
  {
    path: '/wishlist',
    component: () => import('../views/WishList'),
    beforeEnter: AuthGuard
  },
  {
    path: '/compare',
    component: () => import('../views/Compare')
  },
  {
    path: '/signup',
    component: () => import('../views/SignUp')
  },
  {
    path: '/signup/success',
    component: () => import('../views/SuccesSignup')
  },
  {
    path: '/profile',
    component: () => import('../views/Profile'),
    beforeEnter: AuthGuard
  },
  {
    path: '/signin',
    component: () => import('../views/SignIn')
  },
  {
    path: '/:slag',
    component: () => import('../views/Cars'),
    props: true
  },
  {
    path: '/:slag/:carSlag',
    component: () => import('../views/DetailsCategories'),
    props: true
  },
  {
    path: '/:slag/:carSlag/:detailCategorySlag',
    component: () => import('../views/SubDetailsCategories'),
    props: true
  },
  {
    path: '/:slag/:carSlag/:detailCategorySlag/:subDetailCategorySlag',
    component: () => import('../views/Details'),
    props: true
  },
  {
    path: '/:slag/:carSlag/:detailCategorySlag/:subDetailCategorySlag/:productSlag',
    component: () => import('../views/ProductDetails'),
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

function AuthGuard(from, to, next) {
  if(Store.getters.isAuthenticated) {
    next();
  }
  else {
    next('/signin');
  }
}

export default router
