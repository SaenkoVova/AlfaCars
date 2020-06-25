<template>
  <div>
      <table v-if="compareProducts.length != 0">
        <thead>
          <tr>
            <td :colspan="compareProducts.length + 1">
              <strong>Опис</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Товар</td>
            <td v-for="item in compareProducts" :key="item._id">
              <strong>
                <router-link :to="'/'">{{item.title}}</router-link>
              </strong>
            </td>
          </tr>
          <tr>
            <td>Зображення</td>
            <td v-for="item in compareProducts" :key="item._id" class="td-image">
              <img :src="require(`../assets/${item.image}`)" width="100" height="100" :alt="item.title">
            </td>
          </tr>
          <tr>
            <td>Ціна</td>
            <td v-for="item in compareProducts" :key="item._id">{{item.price}} грн</td>
          </tr>
          <tr>
            <td>Код товару</td>
            <td v-for="item in compareProducts" :key="item._id">{{item.article}} грн</td>
          </tr>
          <tr>
            <td>Виробник</td>
            <td v-for="item in compareProducts" :key="item._id">{{item.producer}} грн</td>
          </tr>
          <tr>
            <td>Наявність</td>
            <td v-for="item in compareProducts" :key="item._id">{{item.quantity}} грн</td>
          </tr>
          <tr>
            <td></td>
            <compare-item v-for="item in compareProducts" :key="item._id" :product="item"></compare-item>
          </tr>
        </tbody>
      </table>
      <div v-else style="margin-bottom: 200px">
        <p>Список порівняння пустий</p>
        <router-link :to="'/'">Продовжити</router-link>
      </div>
  </div>
</template>

<script>

import CompareItem from '../components/CompareItem';

export default {
  data: () => ({
    
  }),
  computed: {
    compareProducts() {
      return this.$store.getters.getCompareItems;
    },
    getCompareItemsLength() {
      return this.$store.getters.getCompareItemsLength;
    }
  },
  components: {
    CompareItem
  }
}
</script>

<style scoped>
  table {
    color: #333;
    border-collapse: collapse;
    width: 100%;
    display: block;
    overflow-x: auto;
  }
  tbody td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  thead td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  .td-image {
    text-align: center;
  }
  .td-image img {
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>