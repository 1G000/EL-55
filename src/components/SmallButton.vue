<script setup>
defineProps({
  title: String
})
</script>

<template>
  <button>{{ title }}</button>
</template>

<style scoped>
button {
  font-family: Inter;
  font-size: 22px;
  line-height: 24.2px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  color: #82001f;
  background-color: rgba(239, 238, 238, 0.8);
  transition: background 0.3s;
  border: none;
  margin: auto 10px 10px 10px;
}

button:hover {
  color: #a8002f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.9);
}
</style>
