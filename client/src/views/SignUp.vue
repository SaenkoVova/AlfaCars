<template>
  <div>
      <div class="section-wrapper">
          <div class="form-wrapper">
              <h1 class="section-title font-color">Швидка реєстрація</h1>
              <p>Якщо Ви уже зареєстровані, перейдіть на сторінку <router-link :to="'/signin'">входу в систему</router-link>.</p>
              <form @submit.prevent="signUp">
                  <div class="form">
                    <h2 class="section-subtitle font-color">Основна інформація</h2>
                    <div class="checked-field">
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Email</span>
                        </div>
                        <div>
                            <input type="email" class="form-field form-field-muted" v-model="email">
                        </div>
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Ім'я</span>
                        </div>
                        <div>
                            <input type="text" class="form-field" v-model="name">
                        </div>
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Пррізвище</span>
                        </div>
                        <div>
                            <input type="text" class="form-field" v-model="secondName">
                        </div>
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Телефон</span>
                        </div>
                        <div>
                            <input type="text" class="form-field form-field-muted" v-model="phone">
                        </div>
                    </div>
                    <h2 class="section-subtitle font-color">Ваша адреса</h2>
                    <div class="checked-field">
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Країна</span>
                        </div>
                        <div>
                            <select name="country" id="country" class="form-field" v-model="country">
                                <option value="Україна">Україна</option>
                                <option value="Росія">Росія</option>
                                <option value="Польща">Польща</option>
                            </select>
                        </div>
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Область</span>
                        </div>
                        <div>
                            <select name="area" id="area" class="form-field" v-model="area">
                                <option value="Київська">Київська</option>
                                <option value="Хмельницька">Хмельницька</option>
                                <option value="Рівненська">Рівненська</option>
                            </select>
                        </div>
                        <div class="input-label">
                            <span class="required-field">*</span>
                            <span>Місто</span>
                        </div>
                        <div>
                            <select name="city" id="city" class="form-field" v-model="city">
                                <option value="Київ">Київ</option>
                                <option value="Хмельницький">Хмельницький</option>
                                <option value="Рівне">Рівне</option>
                            </select>
                        </div>
                        <div class="input-label">
                            <span>Індекс</span>
                        </div>
                        <div>
                            <input type="text" class="form-field" v-model="index">
                        </div>
                        <div class="input-label">
                            <span>Адреса</span>
                        </div>
                        <div>
                            <input type="text" class="form-field" v-model="address">
                        </div>
                        <div class="input-label">
                            <span>Підписатися на новини</span>
                        </div>
                        <div>
                            <input type="radio" id="getNewsYes"
                                name="news" value="yes" :checked="getNews">
                                <label for="getNewsYes">Так</label>
                                <input type="radio" id="getNewsNo"
                                name="news" value="no" :checked="!getNews">
                                <label for="getNewsNo">Ні</label>
                        </div>
                        <div class="input-label">
                            <span>Пароль</span>
                        </div>
                        <div>
                            <input type="password" class="form-field" v-model="password">
                        </div>
                        <div class="input-label">
                            <span>Підтвердьте пароль</span>
                        </div>
                        <div>
                            <input type="password" class="form-field" v-model="confirmPassword">
                        </div>
                    </div>
                 </div>
                <div class="form-footer">
                    <input type="submit" value="Продовжити" class="form-footer-button" :disabled="getProcessing || getError">
                </div>
              </form>
          </div>
        <actions-tabs></actions-tabs>
      </div>
  </div>
</template>

<script>

import ActionsTabs from '../components/ActionsTabs';

export default {
    data: () => ({
        getNews: true,
        email: null,
        name: null,
        secondName: null,
        phone: null,
        country: null,
        area: null,
        city: null,
        index: null,
        address: null,
        password: null,
        confirmPassword: null
    }),
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        getError() {
            return this.$store.getters.getError;
        },
        getProcessing() { 
            return this.$store.getters.getProcessing;
        }
    },
    watch: {
        isAuthenticated(val) {
            if(val === true) {
                this.$router.push('/signup/success');
            }
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('SIGN_UP', {
                getNews: this.getNews,
                email: this.email,
                name: this.name,
                secondName: this.secondName,
                phone: this.phone,
                country: this.country,
                area: this.area,
                city: this.city,
                index: this.index,
                address: this.address,
                password: this.password,
                confirmPassword: this.confirmPassword
            });
        },
    },
    components: {
        ActionsTabs
    }
}
</script>

<style scoped>
    .section-wrapper {
        display: grid;
        grid-template-columns: auto 275px;
        grid-template-rows: auto;
        grid-column-gap: 20px;
    }
    .checked-field {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto auto;
    }
    .form {
        border: 1px solid #eee;
        padding: 10px;
    }
    .section-subtitle {
        margin: 20px 0 10px;
        font-size: 24px;
        font-weight: 300;
    }
    .input-label {
        padding: 3px 3px 6px 3px;
        color: #333;
        font-size: 14px;
    }
    .required-field {
        color: red;
        margin-right: 2px;
    }
    .form-field {
        width: 100%;
        padding: 1px 2px;
        border: 1px solid #333;
        margin: 3px 0;
        border-radius: 3px;
    }
    .form-field-muted {
        border: 1px solid #ddd;
        background: #eee;
    }
    .form-footer {
        border: 1px solid #eee;
        padding: 10px;
        margin: 15px 0;
        text-align: right;
    }
    .form-footer-button {
        background: #ba1010;
        color: #ffffff;
        padding: 6px 12px;
        font-weight: normal;
        border-radius: 3px;
    }
</style>