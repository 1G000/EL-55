<script setup>
import UiButton from './UiButton.vue'

defineProps({
  imgSrc: String,
  title: String,
  subtitle: String,
  description: Array,
  showList: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      <img :src="imgSrc" class="card-img" />
      <h4>{{ title }}</h4>
    </div>
    <span>{{ subtitle }}</span>
    <template v-if="showList">
      <ul v-if="description.length > 0" class="descriptions-list">
        <li v-for="(item, index) in description" :key="index" class="description-item">
          {{ item }}
        </li>
      </ul>
      <UiButton title="Заказать" />
    </template>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 24px;
  width: 610px;
  height: 508px;
  padding: 24px;
  background-color: #efeeeef0;
  transition: 0.4s;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 12px;
}

.card-img {
  height: 50px;
  width: 50px;
}

h4 {
  font-family: Inter;
  color: black;
  font-weight: 700;
  font-size: 26px;
  line-height: 31.47px;
  padding-bottom: 5px;
}

span {
  font-family: Inter;
  color: black;
  font-weight: 400;
  font-size: 22px;
  line-height: 24.2px;
  min-height: 80px;
}

.descriptions-list {
  display: flex;
  flex-direction: column;
  list-style: square;
}

.description-item {
  font-family: Inter;
  color: black;
  font-weight: 400;
  font-size: 22px;
  line-height: 24.2px;
  margin-left: 40px;
}

.li-item_logo {
  width: 20px;
  height: 20px;
}
</style>
