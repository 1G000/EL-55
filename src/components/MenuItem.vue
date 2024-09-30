<template>
  <li>
    <a>{{ title }}</a>
  </li>
</template>

<script setup>
defineProps({
  title: String,
  id: Number
})
</script>

<style></style>
