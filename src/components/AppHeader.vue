<template>
  <img class="logo" src="../assets/logo.png" />
  <h1 style="display: none">ЭЛЕКТРОМОНТАЖ 55</h1>
  <ul>
    <MenuItem v-for="item in menuItems" :title="item.title" :key="item.id" class="menu-link" />
  </ul>
  <div class="contacts">
    <span>(812)123-45-67</span>
    <button>Оставить заявку</button>
  </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
const menuItems = [
  { title: 'О компании', id: 1 },
  { title: 'Текущая деятельность', id: 2 },
  { title: 'Выполненные проекты', id: 3 },
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
}

.logo {
  height: 80px;
  width: 140px;
}

.menu-link {
  cursor: pointer;
}

.contacts {
  display: flex;
  flex-direction: column;
}

span {
  color: black;
  font-size: 18px;
}

button {
  margin-left: auto;
  width: 150px;
  height: 30px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  transition: 0.4s;
  padding: 6px;
  border-radius: 10px;
  background-color: var(--vt-c-white-mute);
  border: 0px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(72, 5, 22);
}
</style>
