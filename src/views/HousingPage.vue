<template>
  <main>
    <NavbarComponent />

    <UnderConstruction />

    <div class="w-full fixed bottom-0">
      <FooterComponent />
    </div>
  </main>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import UnderConstruction from '../components/UnderConstruction.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    UnderConstruction,
    FooterComponent,
  }
};
</script>
