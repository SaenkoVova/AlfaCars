<template>
  <li class="review-item" v-if="review">
        <div class="d-flex">
            <h4 class="review-title">{{review.name}}</h4>
            <star-rating
                :star-size="20"
                :rating="review.rating"
                inactive-color="#fff"
                active-color="#BA1010"
                border-color="#ddd"
                :border-width="1"
                :padding="8"
                :read-only="true"
                :show-rating="false">
            </star-rating>
            <div>
                <span>{{review.date}}</span>
            </div>
        </div>
        <span>{{review.review}}</span>
  </li>
</template>

<script>

import StarRating from 'vue-star-rating';

export default {
    props: {
        'review': {
            type: Object,
            required: true
        }
    },
    components: {
        StarRating
    }
}
</script>

<style scoped>
    .review-item {
        padding: 10px 30px;
        margin: 10px 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        background: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .review-title {
        padding-right: 20px;
    }
</style>