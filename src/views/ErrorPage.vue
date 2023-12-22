<script setup>
import NavbarComponent from '../components/NavbarComponent.vue'
import ErrorComponent from '../components/ErrorComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <main>
    <NavbarComponent />

    <ErrorComponent />

    <div class="w-full fixed bottom-0">
      <FooterComponent />
    </div>
  </main>
</template>
