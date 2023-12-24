<template>
  <main>
    <NavbarComponent />
    <ApartmentList />
    <FooterComponent />
  </main>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import ApartmentList from '@/components/ApartmentList.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    ApartmentList,
    FooterComponent,
  }
};
</script>
