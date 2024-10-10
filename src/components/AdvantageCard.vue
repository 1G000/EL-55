<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <li>
    <h4>{{ title }}</h4>
    <span>{{ description }}</span>
  </li>
</template>

<style scoped>
h3 {
  font-family: Inter;
  color: black;
  font-weight: 500;
  font-size: 40px;
  line-height: 48.41px;
  border-bottom: 1px solid black;
}

li {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 347px;
  background-color: #efeeeef0;
  padding: 24px;
  gap: 29px;
  border-radius: 24px;
  transition: all 0.3s;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #efeeeef5;
}

h4 {
  font-family: Inter-bold;
  color: black;
  font-weight: 700;
  font-size: 26px;
  line-height: 31.47px;
  border-bottom: 1px solid #82001f;
  padding-bottom: 5px;
}

span {
  font-family: Inter;
  color: black;
  font-size: 22px;
  line-height: 24.2px;
}
</style>
