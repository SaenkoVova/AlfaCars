import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/signup',
    component: () => import('../views/SignUp')
  },
  {
    path: '/signup/success',
    component: () => import('../views/SuccesSignup')
  },
  {
    path: '/profile',
    component: () => import('../views/Profile')
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

export default router
