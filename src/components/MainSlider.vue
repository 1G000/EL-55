<template>
  <carousel :items-to-show="1" autoplay="5000" wrapAround="true">
    <slide v-for="slide in 4" :key="slide">
      <img :src="`/src/assets/images/slider/slide-${slide}.jpg`" class="slider-image" />
    </slide>

    <template #addons>
      <navigation :class="{ arrow: true }" />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation
  }
}
</script>

<style>
.slider-image {
  width: 100%;
  height: 75vh;
}

.arrow {
  color: white;
  transition: background-color 0.4s ease;
  border-radius: 20px;
}

.arrow:hover {
  color: black;
  background-color: orange;
}
</style>
