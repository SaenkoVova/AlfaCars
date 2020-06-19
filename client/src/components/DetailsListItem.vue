<template>
    <li class="list-item" v-if="product">
        <div>
            <img :src="require(`../assets/${product.image}`)" alt="">
        </div>
        <div>
            <p>
                <span class="product-state">{{product.state}}</span>
                <router-link :to="`/${fullPath}/${product.slag}`">
                    <span class="product-link">{{product.title}}</span>
                </router-link>
            </p>
            <div>
                <div class="info-panel-item">
                    <div>
                        <span>Артикул:</span>
                    </div>
                    <div>
                        <span>{{product.article}}</span>
                    </div>
                </div>
                <div class="info-panel-item">
                    <div>
                        <span>Виробник:</span>
                    </div>
                    <div>
                        <span>{{product.producer}}</span>
                    </div>
                </div>
                <div class="info-panel-item">
                    <div>
                        <span>Кількість:</span>
                    </div>
                    <div>
                        <span v-if="product.quantity > 10">Є в наявності</span>
                        <span v-else-if="product.quantity < 10 && product.quantity > 0">Закінчується</span>
                        <span v-else>Немає в наявності</span>
                    </div>
                </div>
                <div>
                    <star-rating
                        :star-size="10"
                        :inline="true"
                        :rating="product.reviewsQuantity"
                        inactive-color="#fff"
                        active-color="#ddd"
                        border-color="#ddd"
                        :border-width="3"
                        :padding="8"
                        :read-only="true"
                        :show-rating="false">
                    </star-rating>
                    <span>{{product.reviewsQuantity}} відгуків</span>
                </div>
                <div class="info-panel-item">
                    <div class="d-flex">
                        <button v-if="finded == false && product.quantity !== 0" @click="addToCart" class="btn btn-rounded-left">Купити</button>
                        <button v-else-if="finded == false && product.quantity === 0" class="btn btn-rounded-left">Немає в наявності</button>
                        <button v-else @click="changeCartVisible" class="btn btn-rounded-left">Товар уже в корзині</button>
                        <button class="btn btn-rounded-right" @click="addToWishList">♥</button>
                    </div>
                    <div>
                        <span class="price">{{product.price}}грн</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

import StarRating from 'vue-star-rating';
import Vue from 'vue';
import Axios from 'axios';
import config from '../proxy'

export default {
    props: {
        product: {
            type: Object,
            required: true
        },
        fullPath: {
            type: String,
            required: true
        }
    },
    data: () => ({
        finded: false,
        ordered: 1
    }),
    computed: {
        getCart() {
            return this.$store.getters.getCart;
        }
    },
    watch: {
        getCart() {
            this.findProductInCart(this.product._id);
        }
    },
    methods: {
        findProductInCart(productId) {
            const cart = JSON.parse(window.localStorage.getItem('cart')) || [];
            const findedProduct = cart.find(i => i._id === productId);
            findedProduct !== undefined ? this.finded = true : this.finded = false;
        },
        addToCart() {
            Vue.set(this.product, 'ordered', this.ordered);
            this.$store.dispatch('ADD_TO_CART', this.product);
            this.changeCartVisible();
        },
        changeCartVisible() {
            this.$store.dispatch('CHANGE_CART_VISIBLE');
        },
        addToWishList() {
            Axios.post(`${config.path}/wishlist`, {productId: this.product._id},
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
                    }
                }
            )
                .then(() => {
                    this.$store.dispatch('ADD_TO_WISHLIST', {productId: this.product._id});
                })
        }
    },
    created() {
        this.findProductInCart(this.product._id);
    },
    components: {
        StarRating
    }
}
</script>

<style scoped>
    .list-item {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 20px;
        padding: 10px;
        margin-bottom: 20px;
        line-height: 1.4;
        border: 1px solid #ddd;
        border-radius: 3px;
        transition: .2s;
    }
    .product-state {
        background: #5cb85c;
        padding: .2em .6em .3em;
        font-size: 75%;
        font-weight: bold;
        line-height: 1;
        color: #ffffff;
        border-radius: .25em;
    }
    .product-link {
        color: #333;
        font-weight: bold;
        padding: 2px 20px;
        font-size: 18px;
    }
    .product-link:hover {
        color: #e4003a;
        text-decoration: underline;
    }
    .info-panel-item {
        display: flex;
        justify-content: space-between;
        margin-right: 100px;
        align-items: center;
    }
    .btn {
        color: #777;
        background: #eee;
        margin: 10px 0;
        transition: .2s;
        padding: 5px 10px;
    }
    .btn-rounded-left {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .btn-rounded-right {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 30px;
    }
    .list-item:hover {
        box-shadow: 0 3px 15px rgba(0,0,0,.2);
    }
    .list-item:hover .btn {
        background: #BA1010;
        color: #fff;
        border: none;
    }
    .price {
        font-weight: bold;
        font-size: 20px;
    }
</style>