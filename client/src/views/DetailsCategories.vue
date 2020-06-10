<template>
  <div>
      <h1 class="section-title" v-if="car">Запчастини на {{car.ukrTitle}}</h1>
      <div v-if="detailCategories" class="section-wrapper">
        <sub-categories-list :slag="fullRoute" :subCategories="detailCategories"></sub-categories-list>
        <div>
          <grid :slag="fullRoute" :subCategories="detailCategories"></grid>
        </div>
      </div>
  </div>
</template>

<script>

import SubCategoriesList from '../components/SubCategoriesList';
import Grid from '../components/Grid';
import config from '../proxy';

export default {
    props: {
        'slag': {
            type: String,
            required: true
        },
        'carSlag': {
            type: String,
            required: true
        }
    },
    data: () => ({
        detailCategories: []
    }),
    computed: {
        car() {
            return this.$store.getters.getSubCategories.find(i => i.slag === this.carSlag);
        },
        fullRoute() {
            return `${this.slag}/${this.carSlag}`;
        }
    },
    components: {
        SubCategoriesList,
        Grid
    },
    created() {
        const Axios = require('axios');
        Axios.get(`${config.path}/categories/detailscategory`, {params: {
            carSlag: this.carSlag
        }})
            .then((data) => {
                this.detailCategories = data.data.detailCategories;
            });
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