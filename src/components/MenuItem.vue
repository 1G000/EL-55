<script setup>
defineProps({
  title: String,
  id: Number
})
</script>

<template>
  <li>
    <a>{{ title }}</a>
  </li>
</template>

<style scoped>
a {
  font-family: Inter;
  font-size: 18px;
  line-height: 24.2px;
}
</style>
