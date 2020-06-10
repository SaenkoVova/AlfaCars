<template>
  <div>
      
      <ul class="categories-list" @mouseout="subCategories = []">
          <router-link v-for="(item, index) in categories" :key="index" :to="item.slag">
              <li class="categories-list-item">{{item.originalTitle}}</li>
          </router-link>
          <router-link :to="'/'">
            <li class="categories-list-item">Масла і робочі рідини</li>
          </router-link>
            <div>
                <ul class="sub-categories" @mouseleave="subCategories = []">
                    <router-link :to="'/'">
                        <li class="sub-categories-item" v-for="(item, index) in subCategories" :key="index">{{item.title}}</li>
                    </router-link>
                </ul>
            </div>
      </ul>
  </div>
</template>

<script>
export default {
    
    data: () => ({
        subCategories: [],
    }),
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        getSubCategories(name) {
            let subCategory = this.categories.find(i => i.title === name);
            this.subCategories = subCategory.subCategories;
            this.visible1 = true;
        }
    }
}
</script>

<style scoped>
    .categories-list {
        padding: 0;
        position: relative;
        box-shadow: 0 6px 12px rgba(0,0,0,0.175);
        border: 1px solid #eee;
    }
    .categories-list-item {
        padding: 8px 20px;
        color: #333;
        font-size: 14px;
        border-bottom: 1px solid #eee;
    }
    
    .sub-categories {
        position: absolute;
        width: 300px;
        top: 0;
        left: 100%;
        box-shadow: 0 6px 12px rgba(0,0,0,0.175);
        border-radius: 5px;
        z-index: 1000;
        background: #ffffff;
    }
    .sub-categories-item {
        padding: 10px 15px;
        color: #333;
        font-weight: 600;
        margin: 0 10px;
        border-bottom: 1px solid #eee
    }
</style>