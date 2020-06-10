<template>
  <v-app>
    <cart v-if="getCartVisible"></cart>
    <app-header></app-header>
    <div class="container-center">
      <router-view></router-view>
    </div>
    <div class="container-center">
      <app-footer></app-footer>
    </div>
  </v-app>
</template>

<script>

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Cart from './components/Cart';

export default {
  name: 'App',

  data: () => ({
    
  }),
  computed: {
    getCartVisible() {
      return this.$store.getters.getCartVisible;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated(val) {
      if(val === true) {
        this.$store.dispatch('GET_USER');
      }
    }
  },
  components: {
    AppHeader,
    AppFooter,
    Cart
  },
  created() {
    this.$store.dispatch('GET_CATEGORIES');
  }
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }
  .container-center {
    width: 1160px;
    margin: 0 auto;
  }
  .btn {
    display: block;
    background: #f5f5f5;
    line-height: 26px;
    border: 1px solid #ddd;
    padding: 0 8px;
    border-radius: 4px;
    color: #333;
    margin: 0 3px;
    position: relative;
    cursor: pointer;
  }
  .justify-space-between {
    justify-content: space-between;
  }
  .d-flex {
    display: flex;
  }
  .section-title {
    font-size: 32px;
    margin: 10px 0 20px;
    font-weight: 400;
    line-height: 1.1;
  }
  .font-color {
    color: #333;
  }
  .flex-column {
    flex-direction: column;
  }
  .align-end {
    align-items: flex-end;
  }
  
</style>
