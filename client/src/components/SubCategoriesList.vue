<template>
  <div>
      <ul class="subcategories">
          <li class="subcategories-item muted">Виберіть підкатегорію</li>
          <router-link v-for="item in subCategories" :key="item._id" :to="`/${slag}/${item.slag}`">
            <li class="subcategories-item">{{item.originalTitle || item.title}}</li>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        'subCategories': {
            type: Array,
            required: true
        },
        'slag': {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .subcategories {
        padding: 0;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    .subcategories li {
        color: #555;
        padding: 10px 15px;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
    }
    .subcategories li:hover {
        background: #f5f5f5;
    }
    .muted {
        background: #f5f5f5;
    }
</style>