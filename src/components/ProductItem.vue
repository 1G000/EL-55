<script setup>
import SmallButton from './SmallButton.vue'

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
  <li>
    <h4>{{ title }}</h4>
    <div class="card" :style="{ backgroundImage: `url(${imgSrc})` }"></div>
    <SmallButton title="Подробнее" />
  </li>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
}

.card {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -5;
  border-radius: 24px;
  padding: 24px;
  transition: all 0.4s;
  width: 100%;
  height: 100%;
  background-position: center;
  background-position: center;
  background-size: cover;
}

h4 {
  width: 100%;
  height: 70px;
  font-family: Inter-bold;
  background-color: rgba(239, 238, 238, 0.8);
  color: rgb(130, 0, 31);
  font-size: 26px;
  line-height: 31.47px;
  padding: 5px 25px;
  z-index: 3;
}

span {
  font-family: Inter;
  color: black;
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

li:hover .card,
li:focus .card {
  transform: scale(1.2);
}
</style>
