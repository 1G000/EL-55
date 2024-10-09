<template>
  <img class="logo" src="../assets/logo.png" />
  <h1 style="display: none">ЭЛЕКТРОМОНТАЖ 55</h1>
  <ul>
    <MenuItem v-for="item in menuItems" :title="item.title" :key="item.id" class="menu-link" />
  </ul>
  <div class="contacts">
    <span>8 (812) 294-20-13</span>
  </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
const menuItems = [
  { title: 'О компании', id: 1 },
  { title: 'Текущая деятельность', id: 2 },
  { title: 'Наши проекты', id: 3 },
  { title: 'Вакансии', id: 4 },
  { title: 'Контакты', id: 5 },
  { title: 'Жизнь компании', id: 6 }
]
</script>

<style scoped>
h1 {
  font-weight: 700;
  color: var(--vt-c-black-soft);
}

ul {
  display: flex;
  gap: 20px;
}

.logo {
  width: 102px;
  height: 48px;
}

.menu-link {
  cursor: pointer;
}

.contacts {
  display: flex;
  flex-direction: column;
}

span {
  color: #82001f;
  font-size: 22px;
  font-weight: 700;
  padding: 6px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(72, 5, 22);
}
</style>
