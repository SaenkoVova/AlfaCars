<template>
  <div v-if="product">
      <div class="d-flex">
          <span class="product-state">{{product.state}}</span>
          <h1 class="section-title">{{product.article}} {{product.producer}} {{product.title}}</h1>
      </div>
      <div class="d-flex panel justify-space-between">
          <div class="d-flex">
            <div class="margin-right">
                <span>Виробник: <span class="danger-text">{{product.producer}}</span></span>
            </div>
            <div>
                <span>Код товару: <span class="danger-text">{{product.article}}</span></span>
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
                <a href="#description">{{reviews.length}} відгуків</a>
          </div>
      </div>
      <div class="content">
          <div>
              <img :src="require(`../assets/${mainImage}`)" alt="product image">
          </div>
          <div>
              <h4>Короткий опис</h4>
              <p>
                  ... <a href="#description">Читати повністю -></a>
              </p>
          </div>
          <div class="card">
              <div class="card-header d-flex justify-space-between">
                  <h1 class="section-title">{{product.price}} грн</h1>
                  <div class="d-flex justify-space-between">
                      <button class="btn">♥</button>
                      <button class="btn">♥</button>
                  </div>
              </div>
              <div>
                  <div class="card-body">
                      <div v-if="product.quantity > 0" class="success-block">
                        <h4>Залишок на складах:</h4>
                        <span>Доступно {{product.quantity}} шт.</span>
                      </div>
                      <div v-else class="danger-block">
                        <h4>Немає в наявності</h4>
                      </div>
                  </div>
                  <div v-if="finded == false" class="d-flex justify-space-between">
                        <div class="d-flex">
                            <span>
                                <button class="btn btn-plus" @click="increaseQuantity">+</button>
                                <button class="btn btn-minus" @click="reduceQuantiy">-</button>
                            </span>
                            <input type="text" class="quantiy-input" readonly v-model="ordered">
                        </div>
                        <div>
                            <button class="btn btn-buy" @click="addToCart">Купити</button>
                        </div>
                  </div>
                  <div v-else>
                      <button class="btn btn-buy" @click="changeCartVisible">Товар уже в корзині</button>
                  </div>
              </div>
          </div> 
      </div>
        <div class="images" v-viewer>
            <img width="100" height="100" class="product-image" v-for="item in productImages" :key="item._id" :src="require(`../assets/${item.image}`)">
        </div>
        <div>
            <product-details-tabs v-on:addToReviewsList="addToReviewsList" :product="product" :reviews="reviews"></product-details-tabs>
        </div>
  </div>
</template>

<script>

import ProductDetailsTabs from '../components/ProductDetailsTabs';
import StarRating from 'vue-star-rating';
import 'viewerjs/dist/viewer.css';
import Viewer from 'v-viewer';
import Vue from 'vue';
Vue.use(Viewer);

export default {
    props: {
        'productSlag': {
            type: String,
            required: true
        }
    },
    data: () => ({
        product: null,
        ordered: 1,
        finded: false,
        productImages: [],
        mainImage: null,
        reviews: []
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
        addToReviewsList(review) {
            this.reviews.unshift(review);
        },
        reduceQuantiy() {
            if(this.ordered > 1) {
                this.ordered = this.ordered - 1;
            }
        },
        increaseQuantity() {
            if(this.ordered < this.product.quantity) {
                this.ordered = this.ordered + 1;
            }
        },
        addToCart() {
            Vue.set(this.product, 'ordered', this.ordered);
            this.$store.dispatch('ADD_TO_CART', this.product);
            this.changeCartVisible();
        },
        findProductInCart(productId) {
            const cart = JSON.parse(window.localStorage.getItem('cart')) || [];
            const findedProduct = cart.find(i => i._id === productId);
            findedProduct !== undefined ? this.finded = true : this.finded = false;
        },
        changeCartVisible() {
            this.$store.dispatch('CHANGE_CART_VISIBLE');
        }
    },
    created() {
        const Axios = require('axios');
        Axios.get('http://localhost:5000/api/products/getproduct', {params: {
            productSlag: this.productSlag
        }})
            .then((data) => {
                this.product = data.data.product;
                this.productImages = data.data.productImages;
                this.mainImage = this.productImages[0].image;
                this.reviews = data.data.reviews;
                this.findProductInCart(this.product._id);
            });
    },
    components: {
        StarRating,
        ProductDetailsTabs
    }
}
</script>

<style scoped>
    .product-state {
        background: #5cb85c;
        padding: .2em .6em .3em;
        font-size: 20px;
        font-weight: bold;
        line-height: 1;
        color: #ffffff;
        border-radius: .25em;
    }
    .d-flex {
        align-items: center;
    }
    .section-title {
        margin: 0;
    }
    .panel {
        margin: 20px 0;
        padding: 9px;
        background: #f5f5f5;
        border: 1px solid #e3e3e3;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        border-radius: 4px;
    }
    .margin-right {
        margin-right: 40px;
    }
    .danger-text {
        color: #e4003a;
    }
    .content {
        display: grid;
        grid-template-columns: auto 1fr 330px;
        grid-column-gap: 20px;
    }
    .card {
        padding: 15px;
        color: #333;
        box-shadow: 0 1px 1px rgba(0,0,0,0.05);
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .card-body {
        padding: 15px 0;
        margin-bottom: 20px;
    }
    .success-block, .danger-block {
        padding: 15px;
        border-radius: 4px;
    }
    .success-block {
        color: #3c763d;
        background: #dff0d8;
        border: 1px solid #d6e9c6;
    }
    .danger-block {
        color: #a94442;
        background: #ebccd1;
        border: 1px solid #ebccd1;
    }
    .btn-plus, .btn-minus {
        padding: 0;
        font-size: 12px;
        height: 19px;
        width: 25px;
        line-height: 0;
        margin: 0;
    }
    .btn-plus {
        border-radius: 4px 0 0 0;
    }
    .btn-minus {
        border-radius: 0 0 0 4px;
    }
    .quantiy-input {
        border-radius: 0 4px 4px 0;
        border: 1px solid #ddd;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        padding: 6px 12px;
        width: 100px;
    }
    .btn-buy {
        margin: 0 10px;
        color: #ffffff;
        background: #BA1010;
        padding: 6px 12px;
    }
    .product-image {
        border: 1px solid #ddd;
        border-radius: 4px;
        margin: 10px 10px;
        cursor: pointer;
    }
</style>