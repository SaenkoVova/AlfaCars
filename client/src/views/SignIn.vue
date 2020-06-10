<template>
  <div>
      <div class="section-wrapper">
          <div>
              <h1 class="section-title font-color">Авторизація</h1>
              <div class="cards">
                  <div>
                    <form class="card" @submit.prevent="signIn">
                        <div class="card-header">
                            <h2>Постійний покупець</h2>
                        </div>
                        <div class="card-body">
                            <p>Я здійснював тут покупки раніше і реєструвався</p>
                            <div>
                                <input type="email" placeholder="E-Mail адреса" class="form-input" v-model="email">
                            </div>
                            <div>
                                <input type="password" placeholder="Пароль" class="form-input" v-model="password">
                            </div>
                        </div>
                        <div class="card-footer">
                            <div>
                                <span>
                                    <router-link :to="'/'">Забули пароль?</router-link>
                                </span>
                            </div>
                            <div>
                                <input type="submit" class="btn" value="Увійти" :disabled="getError || getProcessing">
                            </div>
                        </div>
                    </form>
                   </div>
                <div class="card">
                    <div class="card-header">
                        <h2>Новий покупець</h2>
                    </div>
                    <div class="card-body">
                        <p>Реєстрація</p>
                        <article>
                            <p>
                                Створення облікового запису допоможе робити покупки бистріше та зручніше. Ви також зможете відслідковувати
                                статус свого замовленн, користуватися закладками, бачити свої попередні замовлення або отримати знижку
                                як наш постійний покупець.
                            </p>
                        </article>
                    </div>
                    <div class="card-footer">
                        <div>
                            <router-link :to="'/signup'">
                                <button class="btn">Продовжити</button>
                            </router-link>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <actions-tabs></actions-tabs>
      </div>
  </div>
</template>

<script>

import ActionsTabs from '../components/ActionsTabs';

export default {
    data: () => ({
        email: null,
        password: null
    }),
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        },
        getProcessing() {
            return this.$store.getters.getProcessing;
        },
        getError() {
            return this.$store.getters.getError;
        }
    },
    methods: {
        signIn() {
            this.$store.dispatch('SIGN_IN', {
                email: this.email,
                password: this.password
            });
        }
    },
    watch: {
        isAuthenticated(val) {
            if(val === true) {
                this.$router.push('/profile');
            }
        }
    },
    components: {
        ActionsTabs
    }
}
</script>

<style scoped>
    .section-wrapper {
        display: grid;
        grid-template-columns: 1fr 275px;
        grid-template-rows: auto;
        grid-column-gap: 20px;
    }
    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }
    .card {
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .card-header {
        background: #f5f5f5;
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
    }
    .card-header h2 {
        font-size: 16px;
        margin: 0;
        color: #333;
        font-weight: 400;
    }
    .card-body {
        padding: 15px;
    }
    .card-footer {
        padding: 10px 15px;
        background: #f5f5f5;
        border-top: 1px solid #ddd;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .section-title {
        margin: 10px 0!important;
    }
    .btn {
        background: #BA1010;
        padding: 6px 12px;
        margin-left: 10px;
        color: #fff;
        font-weight: normal;
    }
    .form-input {
        width: 100%;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        border-radius: 4px;
        padding: 6px 12px;
        margin: 10px 0;
    }
</style>