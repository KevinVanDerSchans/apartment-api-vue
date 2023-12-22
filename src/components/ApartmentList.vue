<script>
import ApartmentCard from './ApartmentCard.vue';
import useSearchHook from '../hooks/searchHook';

export default {
  components: {
    ApartmentCard,
  },

  setup() {
    const { apartments } = useSearchHook();

    return {
      apartments,
    };
  },
};
</script>

<template>
  <div class="container mx-auto mt-8 p-8">
    <h1 class="text-xl font-extrabold mb-4 text-center text-custom-500">VIVIENDAS</h1>
    <h2 class="text-lg font-extrabold mb-4 text-center">Descubre nuestros apartamentos</h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-12 gap-8 text-center">
      <li v-for="apartment in apartments" :key="apartment.id">
        <ApartmentCard :apartment="apartment" />
      </li>
    </ul>
  </div>
</template>
