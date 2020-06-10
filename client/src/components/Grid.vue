<template>
  <div>
      <ul class="sub-categories-grid">
        <router-link v-for="item in subCategories" :key="item._id" :to="`/${slag}/${item.slag}`">
            <li class="sub-categories-grid-item">
            <figure>
                <img :src="require(`../assets/${item.image}`)" alt="subcateogry image">
                <figcaption>
                <span>{{item.title}}</span>
                </figcaption>
            </figure>
            </li>
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
    .sub-categories-grid {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px 25px;
    
  }
  .sub-categories-grid-item {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    transition: .2s;
  }
  span {
    color: #333;
  }
  .sub-categories-grid-item:hover {
    box-shadow: 0 3px 15px rgba(0,0,0,.2);
  }
  .sub-categories-grid-item:hover span {
    color: #e4003a;
    text-decoration: underline;
  }
</style>