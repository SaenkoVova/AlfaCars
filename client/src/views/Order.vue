<template>
  <div>
      <sign-in-modal v-if="modalVisible" v-on:closeDialog="closeDialog"></sign-in-modal>
      <h1 class="section-title">Оформлення замовлення</h1>
      <div class="section-grid">
        <div>
            <div class="d-flex justify-space-between">
                <div>
                    <span>Покупець</span>
                </div>
                <div>
                    <span v-if="isAuth == false" @click="modalVisible = true">Я зареєстрований</span>
                </div>
            </div>
            <div class="panel">
                <div class="section-grid">
                    <div>
                        <span>Ім'я</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="name">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span>Прізвище</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="secondName">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span>Телефон</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="phone">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span>Email</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="email">
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="section-grid">
                    <div>
                        <span>Область</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="area">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span>Місто</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="city">
                    </div>
                </div>
                <div class="section-grid">
                    <div>
                        <span>Адреса</span>
                    </div>
                    <div>
                        <input type="text" class="section-grid-input" v-model="address">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <span>Спосіб доставки</span>
            </div>
            <div class="panel">
                <div class="radio-input-wrapper d-flex justify-space-between" v-for="(item, index) in supliers" :key="index">
                    <div>
                        <input type="radio" :id="`suplier${index}`" name="suplier" class="radio-input" :value="item.name">
                        <label :for="`suplier${index}`">{{item.name}}</label>
                    </div>
                    <div>
                        <span>{{item.price}} грн</span>
                    </div>
                </div>
            </div>
            <div>
            <div>
                <span>Спосіб оплати</span>
            </div>
            <div class="panel">
                <div class="radio-input-wrapper" v-for="(item, index) in payments" :key="index">
                    <input type="radio" :id="`payment${index}`" name="payment" class="radio-input" :value="item.name">
                    <label :for="`payment${index}`">{{item.name}}</label>
                </div>
            </div>
         </div>
        </div>
        
      </div>
      <div>

      </div>
      <div>
          <cart :cartMode="`orderMode`"></cart>
      </div>
  </div>
</template>

<script>

import Cart from '../components/Cart';
import Axios from 'axios';
import config from '../proxy';
import SignInModal from '../components/SignInModal';

export default {
    data: () => ({
        isAuth: false,
        supliers: [],
        payments: [],
        name: null,
        secondName: null,
        phone: null,
        email: null,
        area: null,
        city: null,
        address: null,
        modalVisible: false
    }),
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        getUser() {
            return this.$store.getters.getUser;
        }
    },
    methods: {
        getUserDataForOrder() {
            if(window.localStorage.getItem('token')) {
                Axios.get(
                    `${config.path}/user/order`,
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
                        }
                    }
                )
                    .then((res) => {
                        this.phone = res.data.phone;
                        this.email = res.data.email;
                        this.area = res.data.area;
                        this.city = res.data.city;
                        this.address = res.data.address;
                        this.name = res.data.name;
                        this.secondName = res.data.secondName;
                    })
            }
        },
        closeDialog() {
            this.modalVisible = false;
        }
    },
    watch: {
        isAuthenticated(val) {
            if(val) {
                this.getUserDataForOrder();
                this.isAuth = true;
            }
            else {
                this.isAuth = false
            }
        }
    },
    created() {
        Axios.get(`${config.path}/supliers`)
            .then((res) => {
                this.supliers = res.data.supliers;
            });
        Axios.get(`${config.path}/payments`)
            .then((res) => {
                this.payments = res.data.payments;
            });
    },
    components: {
        Cart,
        SignInModal
    }
}
</script>

<style scoped>
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
    .radio-input {
        margin: 5px;
    }
    .radio-input-wrapper {
        margin: 7px 0;
    }
</style>