<template>
  <div class="container">
    <header>
      <AppHeader />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
.container {
  max-width: 1440px;
  display: flex;
  flex-direction: column;
}
</style>
