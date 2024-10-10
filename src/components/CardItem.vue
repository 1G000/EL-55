<script setup>
import SmallButton from './SmallButton.vue'

defineProps({
  imgSrc: String,
  title: String,
  subtitle: String,
  subtitleShort: String,
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
    <span>{{ subtitleShort }}</span>
    <template v-if="showList">
      <ul v-if="description.length > 0" class="descriptions-list">
        <li v-for="(item, index) in description" :key="index" class="description-item">
          {{ item }}
        </li>
      </ul>
    </template>
    <SmallButton title="Подробнее" />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 24px;
  width: 400px;
  background-color: #efeeeef0;
  transition: 0.4s;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 12px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
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
}

span {
  font-family: Inter;
  color: black;
  font-weight: 400;
  font-size: 22px;
  line-height: 24.2px;
  min-height: 80px;
  padding: 0 24px;
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
