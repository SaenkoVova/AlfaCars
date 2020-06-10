<template>
  <div>
      <form class="review-form" @submit.prevent="doReview">
          <div class="label">
              <span class="text-danger">*</span>
              <span>Ваше ім'я</span>
          </div>
          <div>
              <input type="text" class="reviiew-form-input" v-model="name">
          </div>
          <div class="label">
              <span class="text-danger">*</span>
              <span>Ваш відгук</span>
          </div>
          <div>
              <textarea name="review" id="review" rows="5" class="reviiew-form-input" v-model="review"></textarea>
          </div>
          <div class="label">
              <span class="text-danger">*</span>
              <span>Рейтинг</span>
          </div>
          <div>
              <star-rating
                    :star-size="30"
                    :inline="true"
                    :rating="rating"
                    inactive-color="#ddd"
                    active-color="#BA1010"
                    border-color="#ddd"
                    :border-width="1"
                    :padding="8"
                    :show-rating="false"
                    :rounded-corners="true"
                    @rating-selected="setRating">
                </star-rating>
          </div>
          <div></div>
          <div>
              <button class="btn btn-send" :disabled="!name || !review || !rating">Відправити</button>
          </div>
      </form>
  </div>
</template>

<script>

import StarRating from 'vue-star-rating';
import Axios from 'axios';
import config from '../proxy';

export default {
    props: {
        'product': {
            type: Object,
            required: true
        }
    },
    data: () => ({
        name: null,
        review: null,
        rating: 0
    }),
    methods: {
        setRating(rating) {
            this.rating = rating;
        },
        doReview() {
            Axios.post(`${config.path}/reviews`, {
                name: this.name,
                review: this.review,
                rating: this.rating,
                productId: this.product._id
            })
                .then((data) => {
                    this.passToReviewsList(data.data.comment);
                    this.name = null;
                    this.review = null;
                    this.rating = null;
                });
        },
        passToReviewsList(review) {
            this.$emit('passToReviewsList', review);
        }
    },
    components: {
        StarRating,
    }
}
</script>

<style scoped>
    .review-form {
        padding: 20px;
        margin: 20px 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        background: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 4px;
        display: grid;
        grid-template-columns: 220px 1fr;
        grid-gap: 20px 20px;
    }
    .reviiew-form-input {
        width: 100%;
        background: #fff;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 4px;
        line-height: 1.4;
        color: #555;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
        border: 1px solid #ddd;
    }
    .btn-send {
        background: #BA1010;
        color: #fff;
        padding: 6px 12px;
    }
    .label {
        justify-self: end;
    }
    .text-danger {
        color: red;
        margin-right: 2px;
    }
</style>