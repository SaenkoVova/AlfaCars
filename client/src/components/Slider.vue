<template>
  <div>
    <carousel :autoplay="true" :nav="false" :items="1">

        <div class="slide-wrapper">
            <img src="../assets/red-848x350.svg">
        </div>

        <div class="slide-wrapper">
            <img src="../assets/oil-1-848x350.png">
        </div>

        <div class="slide-wrapper">
            <img src="../assets/COMM-oil-848x350.jpg">
        </div>

        <div class="slide-wrapper">
            <img src="../assets/sto-848x350.png">
        </div>

    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
}
</script>

<style scoped>
    .slide-wrapper {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #eee;
    }
</style>