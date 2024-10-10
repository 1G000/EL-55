<template>
  <div>
    <h3>Продукция</h3>
    <ul>
      <ProductItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :imgSrc="product.imgSrc"
        :title="product.title"
      />
    </ul>
    <img src="/src/assets/courusel pagination.png" />
    <hr />
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import { PRODUCTS } from '../data/data'

defineProps({
  showList: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

ul {
  display: flex;
  justify-content: space-between;
}
</style>
