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

<template>
  <div class="card-section_bottom">
    <h3>Комплекс работ «под ключ»</h3>
    <p>
      Мы открыты к сотрудничеству и готовы адаптировать наши услуги под любые ваши пожелания и
      потребности. Наша цель — обеспечить надёжность, безопасность и долговечность ваших
      электроустановок, предоставляя полный спектр услуг на высшем уровне.
    </p>
    <CardItem
      v-for="card in CARDS"
      :key="card.id"
      :imgSrc="card.imgSrc"
      :title="card.title"
      :subtitle="card.subtitle"
      :description="card.description"
      :showList="showList"
    />
  </div>
  <hr />
</template>

<style>
h3 {
  font-family: Inter;
  color: black;
  font-weight: 500;
  font-size: 40px;
  line-height: 48.41px;
}

p {
  font-family: Inter;
  color: black;
  font-weight: 400;
  font-size: 22px;
  line-height: 24.2px;
}

.card-section_bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}

.bottom-card h4 {
  min-width: 220px;
  text-align: center;
  font-size: 18px;
}

hr {
  color: #82001f;
}
</style>
