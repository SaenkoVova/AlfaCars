<template>
  <div>
      <div class="section-wrapper">
          <div>
              <h1 class="section-title font-color">Авторизація</h1>
              
                
          </div>
          <actions-tabs></actions-tabs>
      </div>
  </div>
</template>

<script>

import ActionsTabs from '../components/ActionsTabs';

export default {
    components: {
        ActionsTabs
    }
}
</script>

<style scoped>
    .section-wrapper {
        display: grid;
        grid-template-columns: 1fr 275px;
        grid-template-rows: auto;
        grid-column-gap: 20px;
    }
</style>