<template>
  <div>
      <h1 class="section-title">Мої закладки</h1>
        <table>
            <tr>
                <th>Зображення</th>
                <th>Назва товару</th>
                <th>Код товару</th>
                <th>Наявність</th>
                <th>Ціна за одиницю товару</th>
                <th>Дії</th>
            </tr>
            <wish-list-item v-for="item in wishList" :key="item._id" :product="item"
            v-on:removeFromWishList="removeFromWishList"></wish-list-item>
        </table>
  </div>
</template>

<script>

import WishListItem from '../components/WishListItem';
import Axios from 'axios';
import config from '../proxy';

export default {
    data: () => ({
        wishList: []
    }),
    created() {
        this.getWishList();
    },
    methods: {
        removeFromWishList(productId) {
            Axios.post(
                `${config.path}/wishlist/removefromwishlist`,
                {productId},
                {
                    headers: {
                        Authorization: `Bearer: ${JSON.parse(window.localStorage.getItem('token'))}`
                    }
                }
            )
                .then(() => {
                    this.getWishList()
                })
        },
        getWishList() {
            Axios.get(
                `${config.path}/wishlist/getwishlist`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
                    }
                }
            )
                .then((res) => {
                    this.wishList = res.data.wishList
                })
        }
    },
    components: {
        WishListItem
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
</style>