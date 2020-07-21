<template>
  <v-layout column justify-center align-center>
      <v-flex xs12 sm8>
          <v-card :elevation="10" min-width="500">
            <v-card-title><h1 class="font-weight-light">Ласкаво просимо</h1></v-card-title>
            <v-card-text>
              <v-form
              ref="form"
              lazy-validation
              @submit.prevent="signIn"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Логін"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="password"
                :rules="passwordRules"
                label="Пароль"
                :counter="6"
                required
              ></v-text-field>

              <v-btn type="submit" :disabled="!valid" color="primary"
                  class="mr-4">Увійти</v-btn>
            </v-form>
          </v-card-text>
          </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Це поле обов`язкове',
      v => (v && v.length > 6) || 'Пароль не менше 6 символів',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Логін обов`язковий',
      v => /.+@.+\..+/.test(v) || 'Логін має бути валідний',
    ]
  }),
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated;
    }
  },

  methods: {
    signIn() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('SIGN_IN', {email: this.email, password: this.password})
      }
    }
  },

  watch: {
    isAuthenticated(val) {
      if(val) {
        this.$router.push('/admin');
      }
    }
  }
}
</script>

<style>

</style>