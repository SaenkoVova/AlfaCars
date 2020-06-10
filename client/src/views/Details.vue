<template>
  <div>
      <h1 class="section-title" v-if="car && subDetailCategorySlagTitle">{{subDetailCategorySlagTitle}} на {{car.ukrTitle}}</h1>
      <div class="section-wrapper">
        <h1>Фильтр товаров</h1>
        <div>
          <details-list :details="details" :fullPath="fullPath"></details-list>
        </div>
      </div>
  </div>
</template>

<script>

import DetailsList from '../components/DetailsList';

export default {
  props: {
    'slag': {
        type: String, 
        required: true
    },
    'carSlag': {
      type: String,
      required: true
    },
    'detailCategorySlag': {
        type: String,
        required: true
    },
    'subDetailCategorySlag': {
        type: String,
        required: true
    }
  },
  data: () => ({
      subDetailCategorySlagTitle: null,
      details: []
  }),
  computed: {
    car() {
        return this.$store.getters.getSubCategories.find(i => i.slag === this.carSlag);
    },
    fullPath() {
        return `${this.slag}/${this.carSlag}/${this.detailCategorySlag}/${this.subDetailCategorySlag}`;
    }
  },
  created() {
      const Axios = require('axios');
      Axios.get('http://localhost:5000/api/products',{params: {
          subDetailCategorySlag: this.subDetailCategorySlag
      }})
        .then((data) => {
            this.details = data.data.details;
            this.subDetailCategorySlagTitle = data.data.subDetailCategorySlagTitle;
        })
  },
  components: {
      DetailsList
  }
}
</script>

<style scoped>
  .section-wrapper {
    display: grid;
    grid-template-columns: 270px auto;
    grid-template-rows: auto;
    grid-column-gap: 30px;
  }
</style>