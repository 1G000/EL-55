<script setup>
import UiButton from './UiButton.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer-section_top">
      <div class="footer-item">
        <h5>Контакты</h5>
        <div>
          <span class="bold">Отдел продаж:</span>
          <div class="contact">
            <span class="regular">Владимир Фёдорович</span>
            <span class="regular">+7 911 719-70-59</span>
          </div>
        </div>
        <div>
          <span class="bold">Отдел низковольтного оборудования (0.4кВ)</span>
          <div class="contact">
            <span class="regular">Любовь Юрьевна</span>
            <span class="regular">+7 911 734-90-01</span>
          </div>
        </div>
        <div>
          <span class="bold">Отдел высоковольтного оборудования (от 6–10кВ)</span>
          <div class="contact">
            <span class="regular">Татьяна Гавриловна</span>
            <span class="regular">+7 911 734-90-01</span>
          </div>
        </div>
      </div>
      <div class="footer-item">
        <h5>Адрес</h5>
        <div>
          <span class="bold">Юридический адрес:</span>
          <div class="contact">
            <span class="regular">194156 СПб, пр. Энгельса, д. 27 л. З, оф. 403.</span>
          </div>
        </div>
        <div>
          <span class="bold">Почтовый адрес</span>
          <div class="contact">
            <span class="regular">194223, проспект Тореза, д. 44, корп. 2, лит. А, п. 12Н</span>
          </div>
        </div>
        <span class="regular">Тел/факс: (812) 294–20–13</span>
        <a class="footer-link" href="info@em-55.com">info@em-55.com</a>
      </div>
    </div>
    <div class="footer-section_bottom">
      <div class="footer-item">
        <span class="form-textcontent"
          >Оставьте заявку и мы обсудим детали сотрудничества, а еще предложим оптимальное для вас
          решение.</span
        >
        <input type="text" placeholder="Имя" />
        <input type="tel" pattern="+7(\d{3})\d{2}-\d{2}-\d{2}" placeholder="+7 (___)-___-__-__" />
        <UiButton title="Оставить заявку" />
        <div class="checkbox">
          <input type="checkbox" /><label>Даю согласие на обработку данных</label>
        </div>
      </div>
      <div class="footer-item_map"></div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  background-color: #efeeeef0;
  padding: 10px 0;
}

.footer-section_top,
.footer-section_bottom {
  display: flex;
  justify-content: space-around;
}

.footer-item {
  display: flex;
  flex-direction: column;
  width: 610px;
  height: 380px;
  gap: 12px;
  padding: 24px;
  border-radius: 24px;
  background-color: white;
}

.footer-item_map {
  background-image: url('/src/assets/map.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 610px;
  height: 380px;
}

h5 {
  font-family: Inter-bold;
  font-size: 22px;
  color: black;
}

.bold {
  font-family: Inter-bold;
  font-size: 20px;
  color: black;
}

.regular {
  font-family: Inter;
  font-size: 20px;
  color: black;
}

.contact {
  display: flex;
  justify-content: space-between;
}

.footer-link {
  font-family: Inter;
  color: black;
  font-size: 20px;
}

.footer-link:hover {
  color: rgb(130, 0, 31);
  background-color: transparent;
}

input {
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
  gap: 10px;
  height: 50px;
  font-family: Inter;
  font-size: 20px;
  line-height: 17px;
}

.form-textcontent {
  color: black;
  font-family: Inter;
  font-size: 22px;
  line-height: 26.63px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 15px;
}

label {
  color: black;
  font-family: Inter;
  font-size: 18px;
}
</style>
