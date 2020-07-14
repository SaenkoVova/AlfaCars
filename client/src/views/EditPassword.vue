<template>
  <div>
      <h1 class="section-title">Зміна пароля</h1>
        <div class="section-wrapper">
            <form @submit.prevent="editPassword" class="panel">
                <div>
                    <h2 class="section-title sub-section-title">Ваш пароль</h2>
                </div>
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Поточний пароль</span>
                    </div>
                    <div>
                        <input type="password" class="section-grid-input" v-model="currentPassword">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Новий пароль</span>
                    </div>
                    <div>
                        <input type="password" class="section-grid-input" v-model="newPassword">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Підтвердьте новий пароль</span>
                    </div>
                    <div>
                        <input type="password" class="section-grid-input" v-model="confirmNewPassword">
                    </div>
                </div>
                <div class="submit-field d-flex justify-space-between">
                    <router-link class="btn " :to="'/profile'"><span>Назад</span></router-link>
                    <input type="submit" value="Продовжити">
                </div>
            </form>
            <actions-tabs></actions-tabs>
        </div>
  </div>
</template>

<script>

import ActionsTabs from '../components/ActionsTabs';
import Axios from 'axios';
import config from '../proxy';

export default {
    data: () => ({
        currentPassword: null,
        newPassword: null,
        confirmNewPassword: null
    }),
    components: {
        ActionsTabs
    },
    methods: {
        editPassword() {
            Axios.post(
                `${config.path}/user/editpassword`,
                {
                    currentPassword: this.currentPassword,
                    newPassword: this.newPassword,
                    confirmNewPassword: this.confirmNewPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
                    }
                }
            )
                .then(() => {
                    this.$router.push('/profile');
                })
        }
    },
    created() {
        
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
    .section-grid {
        display: grid;
        grid-template-columns: 2fr 6fr;
        grid-column-gap: 20px;
    }
    .section-grid div {
        text-align: right;
    }
    .panel {
        padding: 10px;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        box-shadow: 0 3px 10px rgba(0,0,0,.1);
        margin: 10px 0;
    }
    .section-grid-input {
        padding: 6px 12px;
        font-size: 14px;
        color: #555;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        width: 100%;
        margin: 5px 0;
    }
    .required {
        color: red;
        padding: 3px;
    }
    .submit-field {
        padding: 10px;
        text-align: right;
    }
    .btn {
        color: #555;
    }
    .submit-field input {
        background: #BA1010;
        color: #ffffff;
        padding: 6px 12px;
        border-radius: 3px;
    }
    .sub-section-title {
        font-size: 22px;
        padding: 0 0 10px 20px;
    }
</style>