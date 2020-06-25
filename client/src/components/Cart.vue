<template>
    <div>
        <div class="cart-wrapper" v-if="cartMode !== 'orderMode'">
            <div class="cart-popup">
                <div class="cart-popup-header d-flex justify-space-between">
                    <div>
                        <span>Корзина покупок</span>
                    </div>
                    <div>
                        <button @click="toggleCartVisible">x</button>
                    </div>
                </div>
                <div class="cart-popup-body">
                        <p v-if="cart.length === 0" class="cart-empty-text">В вашій корзині пусто</p>
                        <div v-else>
                            <div class="table">
                                <table>
                                    <thead class="cart-popup-body-header">
                                        <tr>
                                            <td>Зображення</td>
                                            <td>Назва</td>
                                            <td>Бренд</td>
                                            <td>Кількість</td>
                                            <td>Вартість</td>
                                            <td></td>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        <cart-item v-for="item in cart" :key="item._id" :product="item"></cart-item>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <div class="price-line">
                                    <span>Всього: {{fullSum}} грн</span>
                                </div>
                                <div class="d-flex justify-space-between">
                                    <button class="btn btn-danger" @click="toggleCartVisible">Продовжити покупки</button>
                                    <button class="btn btn-danger" @click="toOrder">Оформлення замовлення</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div>
                <span>Корзина</span>
            </div>
            <div>
                <table class="order-table">
                    <tr class="order-table-header">
                        <th>Зображення</th>
                        <th>Назва товару</th>
                        <th>Модель</th>
                        <th>Кількість</th>
                        <th>Ціна</th>
                        <th>Всього</th>
                        <th></th>
                    </tr>
                    <cart-item :cartMode="'orderMode'" v-for="item in cart" :key="item._id" :product="item"></cart-item>
                </table>
                <div class="price-line price-line-ordered">
                    <span>Всього: {{fullSum}} грн</span>
                </div>
                <div class="price-line price-line-ordered price-line-ordered-button">
                    <button class="btn btn-danger" @click="toOrder">Оформити замовлення</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CartItem from '../components/CartItem';

export default {
    props: {
      'cartMode': {
          type: String,
          required: false
      }  
    },
    data: () => ({
        
    }),
    computed: {
        cart() {
            return this.$store.getters.getCart;
        },
        fullSum() {
            return this.$store.getters.getFullSum;
        }
    },
    methods: {
        toggleCartVisible() {
            this.$store.dispatch('CHANGE_CART_VISIBLE');
        },
        toOrder() {
            this.toggleCartVisible();
            this.$router.push('/order');
        }
    },
    components: {
        CartItem
    }
}
</script>

<style scoped>
    .cart-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cart-popup {
        width: 620px;
        background: #F5F5F5;
        box-shadow: 0 0 15px #555;
        border-radius: 8px;
        font-size: 14px;
        
    }
    .table {
        overflow: auto;
        max-height: 350px;
    }
    .cart-popup-header {
        background: linear-gradient(to bottom, #eee 0%, #ddd 100%);
        padding: 13px 19px 15px;
        border-radius: 8px 8px 0 0;
        text-shadow: 1px 1px 0 #f8f8f8;
        border-bottom: solid 1px #d2d2d2;
        font-weight: 400;
        font-size: 1.2em;
    }
    .cart-popup-body {
        padding: 13px 25px 15px;
    }
    .cart-empty-text {
        margin: 20px 0;
        text-align: center;
        font-weight: bold;
    }
    .cart-popup-body-header {
        padding: 10px 0;
        color: #777;
        font-weight: 500;
        text-shadow: 0 1px 0 #fff;
        font-size: 0.8em;
    }
    td {
        padding: 0 10px 10px 10px;
        border-bottom: 1px solid #ddd;
    }
    .hr {
        border-bottom: 1px solid #000;
    }
    .price-line {
        padding: 12px;
        text-align: right;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
    }
    .price-line-ordered {
        border: 1px solid #ddd;
        border-top: none;
    }
    .price-line-ordered-button {
        display: flex;
        justify-content: flex-end;
        margin: 20px 0;
        padding: 10px;
        border-top: 1px solid #ddd;
    }
    .btn-danger {
        background: #ba1010;
        color: #fff;
        padding: 4px 8px;
        border-radius: 6px;
    }
    .order-table {
        width: 100%;
        border: 1px solid #ddd;
        border-collapse: collapse;
    }
    tr {
        text-align: center;
    }
    .order-table-header {
        color: #4D4D4D;
        background: #F8F8F8;
    }
    th {
        padding: 8px;
    }
</style>