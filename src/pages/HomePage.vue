<template>
  <HeroSection />
  <AdvantagesSection />
  <!-- <MainSlider /> -->
  <ProductSection />
  <BottomSection />
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AdvantagesSection from '@/components/AdvantagesSection.vue'
import BottomSection from '@/components/BottomSection.vue'
import ProductSection from '@/components/ProductSection.vue'
// import CardsSection from '@/components/CardsSection.vue'
// import MainSlider from '@/components/MainSlider.vue'
</script>

<style scoped>
.slider-section {
  position: relative;
}
</style>
