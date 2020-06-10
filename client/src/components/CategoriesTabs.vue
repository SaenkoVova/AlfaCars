<template>
  <div>
      <div>
          <ul class="categories-list">
              <li v-for="item in categories" :key="item._id">
                  <router-link :to="'/'" class="categories-list-link">
                    <img v-if="categories.length != 0" :src="require(`../assets/${item.image}`)" alt="category logo">
                    <div>
                        <h4>{{item.originalTitle}}</h4>
                        <p>Запчастини для автомобілів {{item.title}}</p>
                    </div>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    }
}
</script>

<style scoped>
    .categories-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto auto;
        grid-gap: 20px 20px;
        padding: 0;
    }
    .categories-list > li {
       box-shadow: 0 3px 10px rgba(0,0,0,.1);
       border-radius: 6px;
       border: 1px solid #ddd;
       padding: 15px;
       display: flex;
       align-items: center;
    }
    .categories-list-link {
        display: flex;
        color: #333;
    }
    img {
        display: block;
        margin-right: 15px;
    }
    h4 {
        padding-bottom: 5px;
        border-bottom: 1px solid #eee;
        text-transform: uppercase;
    }
    p {
        font-size: 14px;
    }
</style>