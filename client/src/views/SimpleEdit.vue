<template>
  <div>
      <h1 class="section-title">Обліковий запис</h1>
        <div class="section-wrapper">
            <form @submit.prevent="simpleEdit" class="panel">
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Ім'я</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="name">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Прізвище</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="secondName">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Телефон</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="phone">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span class="required">*</span>
                        <span>Email</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="email">
                    </div>
                </div>
                <div class="submit-field">
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
        name: null,
        secondName: null,
        phone: null,
        email: null
    }),
    components: {
        ActionsTabs
    },
    methods: {
        simpleEdit() {
            Axios.post(
                `${config.path}/user/simpleedit`,
                {
                    name: this.name,
                    secondName: this.secondName,
                    phone: this.phone,
                    email: this.email
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
        Axios.get(`${config.path}/user/simpleedit`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
                }
            }
        )
            .then((res) => {
                this.name = res.data.name;
                this.secondName = res.data.secondName;
                this.phone = res.data.phone;
                this.email = res.data.email;
            })
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
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }
    .panel {
        padding: 10px;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        box-shadow: 0 3px 10px rgba(0,0,0,.1);
        margin: 10px 0;
    }
    .section-grid-input {
        padding: 3px;
        border-radius: 3px;
        border: 1px solid rgb(118, 118, 118);
        width: 100%;
        margin: 3px;
        font-size: 14px;
    }
    .required {
        color: red;
        padding: 3px;
    }
    .submit-field {
        padding: 10px;
        text-align: right;
    }
    .submit-field input {
        background: #BA1010;
        color: #ffffff;
        padding: 6px 12px;
        border-radius: 3px;
    }
</style>