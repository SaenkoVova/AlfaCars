<template>
  <div class="home">
    <categories-tabs></categories-tabs>
    <post-first-home-page></post-first-home-page>
  </div>
</template>

<script>

import CategoriesTabs from '../components/CategoriesTabs';
import PostFirstHomePage from '../components/Post1HomePage';

export default {
  name: 'Home',
  components: {
    CategoriesTabs,
    PostFirstHomePage
  }
  
}
</script>
