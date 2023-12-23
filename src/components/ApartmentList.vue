<template>
  <div class="container mx-auto mt-32 p-8">
    <h1 class="text-xl font-extrabold mb-4 text-center text-custom-green700">VIVIENDAS</h1>
    <h2 class="text-lg font-extrabold mb-4 text-center">Descubre nuestros apartamentos</h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-12 gap-8 text-center">
      <li v-for="apartment in apartments" :key="apartment.id">
        <ApartmentCard :apartment="apartment" />
      </li>
    </ul>
  </div>
</template>

<script>
import ApartmentCard from './ApartmentCard.vue';
import useApartments from '../hooks/useApartments';

export default {
  components: {
    ApartmentCard,
  },

  setup() {
    const { apartments } = useApartments();

    return {
      apartments,
    };
  },
};
</script>
