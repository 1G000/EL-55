<script setup>
import UiButton from './UiButton.vue'
</script>

<template>
  <div class="hero">
    <div class="left-side">
      <h2>Ваш надёжный партнёр в электротехнической отрасли</h2>
      <p>
        Наши услуги помогают решать ключевые задачи в области безопасности, функциональности и
        надёжности электроснабжения, обеспечивая бесперебойную и эффективную работу электрических
        сетей
      </p>
      <UiButton title="Оставить заявку" />
    </div>
    <img src="/src//assets/banner img.png" />
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 650px;
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 710px;
}
img {
  border: none;
  max-width: 520px;
  max-height: 520px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h2 {
  font-family: Inter;
  color: black;
  font-size: 60px;
  line-height: 64px;
  text-align: left;
}

p {
  font-family: Inter;
  color: black;
  font-weight: 400;
  font-size: 22px;
  line-height: 24.2px;
}
</style>
