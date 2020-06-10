<template>
  <div>
      <h1 class="section-title" v-if="category">Запчастини {{category.ukrTitle}}</h1>
      <div class="section-wrapper">
        <sub-categories-list :slag="slag" :subCategories="subCategories"></sub-categories-list>
        <div>
          <grid :slag="slag" :subCategories="subCategories"></grid>
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
    }
  },
  computed: {
    category() {
      return this.$store.getters.getCategories.find(i => i.slag === this.slag);
    },
    subCategories() {
      return this.$store.getters.getSubCategories.filter(i => i.categoryId === this.category._id);
    }
  },
  components: {
    SubCategoriesList,
    Grid
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