<template>
  <div>
      <h1 class="section-title">Зв'язатися з нами</h1>
      <h2 class="section-title sub-title">Ми знаходимося за адресою</h2>
      <div class="panel">
          <div class="logo">
              <img src="../assets/logo1.svg" alt="logo">
          </div>
          <div>
              <h4>AlfaCars</h4>
              <span>Місто розташування</span>
          </div>
          <div>
              <h4>Телефон</h4>
              <span>Телефон</span>
          </div>
          <div>
              <h4>Режим роботи</h4>
              <span>Режим роботи компанії</span>
          </div>
          <div class="last-item">
              <h4>Додаткова інформаціія</h4>
              <span>Email: example@gmail.com</span>
          </div>
      </div>
      <h1 class="section-title sub-title underlined-title">Написати нам</h1>
      <div v-if="response" class="d-flex justify-space-between success-container">
          <div>
              <span>{{response}}</span>
          </div>
          <div>
              <button @click="closeMessage">x</button>
          </div>
      </div>
      <form class="review-form" @submit.prevent="sendMessage">
          <div class="label">
              <span class="text-danger">*</span>
              <span>Ваше ім'я</span>
          </div>
          <div>
              <input type="text" class="reviiew-form-input" v-model="name">
          </div>
          <div class="label">
              <span class="text-danger">*</span>
              <span>Email адреса</span>
          </div>
          <div>
              <input type="text" class="reviiew-form-input" v-model="email">
          </div>
          <div class="label">
              <span class="text-danger">*</span>
              <span>Ваше повідомлення</span>
          </div>
          <div>
              <textarea name="review" id="review" rows="5" class="reviiew-form-input" v-model="message"></textarea>
          </div>
        
          <div></div>
          <div class="btn-container">
              <button class="btn btn-send" :disabled="!name || !email || !message">Відправити</button>
          </div>
      </form>
  </div>
</template>

<script>

import config from '../proxy';
import Axios from 'axios';

export default {
    data: () => ({
        name: null,
        email: null,
        message: null,
        response: null
    }),
    methods: {
        closeMessage() {
            this.response = null;
        },
        sendMessage() {
            Axios.post(`${config.path}/reviews/message`, {
                name: this.name,
                email: this.email,
                message: this.message
            })
                .then((res) => {
                    this.response = res.data.message;
                    this.name = null;
                    this.email = null;
                    this.message = null;
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}
</script>

<style scoped>
    .panel {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        margin: 20px 0;
        padding: 20px 0;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    .last-item {
        grid-column: 4/5;
    }
    .logo {
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 10px;
    }
    .sub-title {
        font-size: 22px;
    }
    .underlined-title {
        border-bottom: 1px solid #ddd;
        padding: 5px;
    }
    .review-form {
        padding: 20px;
        margin: 20px 0;
        display: grid;
        grid-template-columns: 220px 1fr;
        grid-gap: 20px 20px;
    }
    .reviiew-form-input {
        width: 100%;
        background: #fff;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 4px;
        line-height: 1.4;
        color: #555;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        border: 1px solid #ddd;
    }
    .btn-send {
        background: #BA1010;
        color: #fff;
        padding: 6px 12px;
    }
    .btn-container {
        justify-self: end;
    }
    .label {
        justify-self: end;
    }
    .text-danger {
        color: red;
        margin-right: 2px;
    }
    .success-container {
        padding: 10px 20px;
        border-radius: 5px;
        color: #3c763d;
        background: #dff0d8;
        border-color: #d6e9c6;
    }
</style>