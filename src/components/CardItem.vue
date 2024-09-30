<template>
  <div>
    <img :src="imgSrc" class="card-img" />
    <h4>{{ title }}</h4>
    <template v-if="showList">
      <ul v-if="description.length > 0" class="descriptions-list">
        <li v-for="(item, index) in description" :key="index" class="description-item">
          {{ item }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  title: String,
  description: Array,
  showList: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 250px;
  height: 140px;
  padding: 5px;
  background-color: rgb(255, 255, 255, 0.6);
  transition: 0.4s;
}

.card-img {
  height: 100px;
  width: 100px;
}

h4 {
  text-align: center;
  color: var(--vt-c-black-soft);
  font-weight: 700;
}

.descriptions-list {
  display: flex;
  flex-direction: column;
}

.description-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--vt-c-black-soft);
  font-size: 12px;
}

.li-item_logo {
  width: 20px;
  height: 20px;
}

.card:hover {
  background-color: rgb(255, 165, 0, 0.7);
  transform: scale(1.02);
}
</style>

<!-- background-color: rgba(128, 0, 33, 0.8); -->
