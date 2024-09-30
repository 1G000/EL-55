<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="left-side">
        <p>Общество с ограниченной ответственностью «ЭЛЕКТРОМОНТАЖ 55»</p>
      </div>
      <div class="right-side">
        <p>
          🏢Юридический адрес: 194156 СПб, пр. Энгельса, д.27 л. З, оф. 403.<br />
          📬Почтовый адрес: 194223, проспект Тореза, д. 44, корп. 2, лит. А, п. 12Н<br />
          ☎️Тел.-факс: (812) 294-20-13
        </p>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 20px 0;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.left-side,
.right-side {
  text-align: left;
}

.right-side {
  margin-left: auto;
}

p {
  font-weight: 700;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  /* Стиль для маленьких экранов */
  .container {
    flex-direction: column; /* Изменение порядка элементов */
    align-items: center; /* Выравнивание по центру */
  }

  .left-side,
  .right-side {
    width: 100%; /* Ширина элементов на 100% */
    text-align: center;
  }

  .right-side {
    margin-top: 20px; /* Отступ сверху */
  }
}
</style>
