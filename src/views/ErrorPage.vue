<template>
  <main>
    <NavbarComponent />
    <ErrorComponent />

    <div class="w-full fixed bottom-0">
      <FooterComponent />
    </div>
  </main>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import ErrorComponent from '../components/ErrorComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    ErrorComponent,
    FooterComponent,
  }
};
</script>
