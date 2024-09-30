<template>
  <h2>Комплекс работ «под ключ»</h2>
  <div class="card-section_bottom">
    <CardItem
      v-for="card in CARDS"
      :key="card.id"
      :imgSrc="card.imgSrc"
      :title="card.title"
      :description="card.description"
      :showList="showList"
      class="bottom-card"
    />
  </div>
</template>

<script setup>
import CardItem from './CardItem.vue'
import { CARDS } from '../data/data'

defineProps({
  showList: {
    type: Boolean,
    default: true
  }
})
</script>

<style>
.card-section_bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

h2 {
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vt-c-black-soft);
}

.bottom-card {
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
}

.bottom-card h4 {
  min-width: 220px;
  text-align: center;
  font-size: 18px;
}
</style>
