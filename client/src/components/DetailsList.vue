<template>
  <div>
      <div class="top-filter-panel">
          <div class="top-filter-panel-left">
              <span>Сортування:</span>
              <select name="order-filter" id="order-filter">
                  <option value="За замовчуанням">За замовчуанням</option>
                  <option value="Від дешевих до дорогих">Від дешевих до дорогих</option>
                  <option value="Від дорогих до дешевих">Від дорогих до дешевих</option>
              </select>
          </div>
          <div class="top-filter-panel-left">
              <span>Сортування:</span>
              <select name="order-filter" id="order-filter">
                  <option value="За замовчуанням">За замовчуанням</option>
                  <option value="Від дешевих до дорогих">Від дешевих до дорогих</option>
                  <option value="Від дорогих до дешевих">Від дорогих до дешевих</option>
              </select>
          </div>
      </div>
      <ul class="products-list">
            <details-list-item v-for="item in details" :key="item._id" :product="item" :fullPath="fullPath"></details-list-item>
        </ul>
  </div>
</template>

<script>

import DetailsListItem from '../components/DetailsListItem';

export default {
    props: {
        'details': {
            type: Array,
            required: true
        },
        'fullPath': {
            type: String,
            required: true
        }
    },
    components: {
        DetailsListItem
    }
}
</script>

<style scoped>
    .top-filter-panel {
        margin-bottom: 20px;
        background: #f5f5f5;
        border: 1px solid #e3e3e3;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        padding: 9px;
        display: flex;
        border-radius: 4px;
    }
    .top-filter-panel-left {
        margin-right: 20px;
    }
    .top-filter-panel-left span {
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1;
        color: #555;
        text-align: center;
        background: #eee;
        border: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .top-filter-panel-left select {
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.4;
        color: #555;
        background: #fff;
        border: 1px solid #ccc;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    }
    .products-list {
        padding: 0;
    }
</style>