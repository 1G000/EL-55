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
  font-size: 22px;
  font-weight: 400;
  line-height: 24.2px;
}
</style>
