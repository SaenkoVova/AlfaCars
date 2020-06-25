<template>
  <tr v-if="product">
      <td>
          <router-link :to="'/'">
              <img width="80" :src="require(`../assets/${product.image}`)" :alt="product.article">
          </router-link>
      </td>
      <td>
          <router-link :to="'/'" class="link">
              <span>{{product.title}}</span>
          </router-link>
      </td>
      <td>
          <span>{{product.producer}}</span>
      </td>
      <td>
          <div class="d-flex">
              <button class="btn" @click="reduceOrdered">-</button>
              <input type="text" class="price-input" :value="product.ordered">
              <button class="btn" @click="increaseOrdered">+</button>
          </div>
      </td>
      <td v-if="cartMode === 'orderMode'">
          <span>{{product.price}} грн</span>
      </td>
      <td>
          <span>{{priceByItem}}</span>
      </td>
      <td>
          <button @click="removeFromCart(product._id)">x</button>
      </td>
  </tr>
</template>

<script>
export default {
    props: {
        'product': {
            type: Object,
            required: true
        },
        'cartMode': {
            type: String,
            required: false
        }
    },
    computed: {
        priceByItem() {
            return `${this.product.price * this.product.ordered} грн`;
        }
    },
    methods: {
        reduceOrdered() {
            if(this.product.ordered > 1) {
                this.product.ordered -= 1;
            }
        },
        increaseOrdered() {
            if(this.product.ordered < this.product.quantity) {
                this.product.ordered += 1;
            }
        },
        removeFromCart(id) {
            this.$store.dispatch('REMOVE_FROM_CART', id);
        }
    }
}
</script>

<style scoped>
.cart-item {
    display: grid;
    grid-template-columns: 90px 3fr auto auto 3fr 1fr;
    grid-column-gap: 10px;
    padding: 10px 0;
    color: #777;
    font-weight: 500;
    text-shadow: 0 1px 0 #fff;
    font-size: 0.8em;
}
.price-input {
    border-radius: 0 4px 4px 0;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    padding: 6px 12px;
    width: 40px;
    text-align: center;
}
td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    color: #777;
    text-align: center;
}
.link {
    color: #777;
}
img {
    border: 1px solid #ddd;
    border-radius: 3px;
}
</style>