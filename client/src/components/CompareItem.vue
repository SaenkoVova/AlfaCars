<template>
    <td>
        <button class="btn btn-danger" v-if="finded === false && product.quantity > 0" @click="addToCart">Купити</button>
        <button class="btn btn-muted" v-if="finded === false && product.quantity === 0">Немає в наявності</button>
        <button class="btn btn-danger" v-if="finded == true" @click="changeCartVisible">Товар уже в корзині</button>
        <button class="btn btn-danger" @click="removeFromCompareList">Видалити</button>
    </td>
</template>

<script>
export default {
    props: {
        'product': {
            type: Object,
            required: true
        }
    },
    data: () => ({
        finded: false
    }),
    computed: {
        getCompareItems() {
            return this.$store.getters.getCompareItems;
        }
    },
    watch: {
        getCompareItems() {
            this.findProductInCart(this.product._id);
        }
    },
    methods: {
        findProductInCart(productId) {
            const cart = JSON.parse(window.localStorage.getItem('cart')) || [];
            const findedProduct = cart.find(i => i._id === productId);
            findedProduct !== undefined ? this.finded = true : this.finded = false;
        },
        changeCartVisible() {
            this.$store.dispatch('CHANGE_CART_VISIBLE');
        },
        removeFromCompareList() {
            this.$store.dispatch('REMOVE_FROM_COMPARE_LIST', this.product._id);
        },
        addToCart() {
            this.$set(this.product, 'ordered', 1);
            this.$store.dispatch('ADD_TO_CART', this.product);
            this.changeCartVisible();
        }
    },
    created() {
        this.findProductInCart(this.product._id);
    }
}
</script>

<style scoped>
    .btn-danger, .btn-muted {
        width: 100%;
        padding: 6px 0;
        margin: 2px 0;
    }
    .btn-danger {
        background: #BA1010;
        color: #ffffff;
        
    }
    .btn-muted {
        background: #eee;
        color: #333;
    }
</style>