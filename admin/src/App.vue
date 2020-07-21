<template>
  <v-app app>
    <div>
      <v-navigation-drawer app v-if="isAuthenticated">
      <!-- -->
      </v-navigation-drawer>

      <v-app-bar app v-if="isAuthenticated">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Alfa cars</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu
        left
        bottom
        :offset-y="true"
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >

            <v-badge
              overlap
              color="primary"
              content="6"
            >
              <v-icon>mdi-bell</v-icon>
            </v-badge>
            
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu
        left
        bottom
        :offset-y="true"
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-app-bar>

   
      <v-main>

        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
      <!-- -->
      </v-footer>
    </div>
    
    
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.checkAuth();
    this.$socket.emit('adminConnected');
  },
  methods: {
    checkAuth() {
      const token = JSON.parse(window.localStorage.getItem('token')) || null;
      if(token) {
        this.$store.dispatch('GET_BASIC_USER_DATA', token);
      }
    }
  }
};
</script>
