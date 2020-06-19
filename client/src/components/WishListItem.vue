<template>
    <tr>
        <td>
            <router-link :to="'/'">
                <img :src="require(`../assets/${product.image}`)" :alt="product.title">
            </router-link>
        </td>
        <td>
            <router-link :to="'/'">
                <span>{{product.title}}</span>
            </router-link>
        </td>
        <td>
            <span>{{product.article}}</span>
        </td>
        <td>
            <span>{{product.quantity}}</span>
        </td>
        <td>
            <span>{{product.price}}</span>
        </td>
        <td>
            <div>
                <button class="btn btn-danger">Купити</button>
            </div>
            <div>
                <button class="btn btn-danger" @click="removeFromWishList">x</button>
            </div>
        </td>
    </tr>
</template>

<script>

export default {
    props: {
        'product': {
            type: Object,
            required: true
        }
    },
    methods: {
        removeFromWishList() {
            this.$emit('removeFromWishList', this.product._id);
        }
    }
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
}
table, td, th {
    border: 1px solid black;
}

td {
    padding: 10px;
}

.btn-danger {
    background: #BA1010;
    color: #fff;
    width: 100%;
    margin: 0;
}

</style>