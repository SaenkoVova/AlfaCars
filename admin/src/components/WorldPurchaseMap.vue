<template>
  <v-container>
      <v-row>
          <v-col>
              <div>
                  <h1 class="font-weight-light">Статистика покупок по країнах</h1>
              </div>
              <radio-svg-map v-model="selectedLocation" @change="isSelected($event)" :map="World">
                  <slot name="after"></slot>
              </radio-svg-map>
          </v-col>
          <v-col>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>

import { RadioSvgMap } from "vue-svg-map";
import World from "vue-svg-map/svg-maps/world";

export default {
    data: () => ({
        World,
        selectedLocation: null
    }),
    components: {
        RadioSvgMap
    },
    methods: {
        isSelected(event) {
            console.log(event)
            console.log(this.selectedLocation)
        }
    }
}
</script>

<style src="vue-svg-map/dist/index.css">

</style>