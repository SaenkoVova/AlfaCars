<template>
  <div id="description">
      <v-tabs
    fixed-tabs
    background-color="#f5f5f5"
    color="#ddd"
    active-class="active-tab"
  >
    <v-tab>
      Опис
    </v-tab>
    <v-tab>
      <div class="tab-container">
          Відгуків({{reviews.length}})
      </div>
    </v-tab>
    <v-tab-item>
        <div class="tab-container">
            <p>Опис відсутній</p>
        </div>
    </v-tab-item>
    <v-tab-item>
        <div class="tab-container">
            <button class="btn" @click="showReviewForm = !showReviewForm">Написати відгук</button>
            <review-form v-if="showReviewForm" :product="product" v-on:passToReviewsList="addToReviewsList"></review-form>
        </div>
        <ul v-if="reviews.length != 0">
            <review-item v-for="item in reviews" :key="item._id" :review="item"></review-item>
        </ul>
    </v-tab-item>
  </v-tabs>
  </div>
</template>

<script>

import ReviewForm from '../components/ReviewForm';
import ReviewItem from '../components/ReviewItem';

export default {
    props: {
        'product': {
            type: Object,
            required: true
        },
        'reviews': {
            type: Array,
            required: true
        }
    },
    data: () => ({
        showReviewForm: false,
    }),
    methods: {
        addToReviewsList(review) {
            this.$emit('addToReviewsList', review);
        }
    },
    components: {
        ReviewForm,
        ReviewItem
    }
}
</script>

<style scoped>
    .active-tab {
        color: #333;
        background: #eee;
    }
    .tab-container {
        padding: 20px 0;
    }
</style>