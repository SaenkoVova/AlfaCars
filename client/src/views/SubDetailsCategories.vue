<template>
  <div>
      <h1 v-if="car && detailCategoryTitle" class="section-title">{{detailCategoryTitle}} на {{car.ukrTitle}}</h1>
      <div class="section-wrapper" v-if="detailSubCategories.length !== 0">
        <sub-categories-list :slag="fullRoute" :subCategories="detailSubCategories"></sub-categories-list>
        <div>
          <grid :slag="fullRoute" :subCategories="detailSubCategories"></grid>
        </div>
      </div>
  </div>
</template>

<script>

import SubCategoriesList from '../components/SubCategoriesList';
import Grid from '../components/Grid';

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
        }
    },
    data: () => ({
        detailSubCategories: [],
        detailCategoryTitle: null
    }),
    components: {
        SubCategoriesList,
        Grid
    },
    computed: {
        car() {
            return this.$store.getters.getSubCategories.find(i => i.slag === this.carSlag);
        },
        fullRoute() {
            return `${this.slag}/${this.carSlag}/${this.detailCategorySlag}`;
        }
    },
    created() {
        const Axios = require('axios');
        Axios.get(`http://localhost:5000/api/categories/subdetailcategory`, {params: {
            detailCategorySlag: this.detailCategorySlag
        }})
            .then((data) => {
                this.detailSubCategories = data.data.subDetailCategories,
                this.detailCategoryTitle = data.data.detailCategoryTitle
            })
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