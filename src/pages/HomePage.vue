<template>
  <div class="slider-section">
    <MainSlider />
    <CardsSection />
  </div>
  <BottomSection />
</template>

<script setup>
import MainSlider from '@/components/MainSlider.vue'
import CardsSection from '@/components/CardsSection.vue'
import BottomSection from '@/components/BottomSection.vue'
</script>

<style scoped>
.slider-section {
  position: relative;
}
</style>
