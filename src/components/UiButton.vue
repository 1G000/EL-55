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
  width: 263px;
  height: 64px;
  border-radius: 20px;
  background-color: #82001f;
  color: white;
  transition: background 0.3s;
  border: none;
  margin-top: auto;
}

button:hover {
  background-color: #a8002f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
