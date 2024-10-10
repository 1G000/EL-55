<template>
  <div class="card-section">
    <CardItem
      v-for="card in INFO_CARDS"
      :key="card.id"
      :imgSrc="card.imgSrc"
      :title="card.title"
      class="card"
      :showList="false"
    />
  </div>
</template>

<script setup>
import CardItem from './CardItem.vue'
import { INFO_CARDS } from '../data/data'

defineProps({
  showList: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.card-section {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  position: absolute;
  top: 50px;
}
</style>
