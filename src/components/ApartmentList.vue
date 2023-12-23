<template>
  <div class="container mx-auto mt-32 p-8">
    <h1 class="text-xl font-extrabold mb-4 text-center text-custom-green700">VIVIENDAS</h1>
    <h2 class="text-lg font-extrabold mb-4 text-center">Descubre nuestros apartamentos</h2>

    <div>

    </div>
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
    >
      Previous
    </button>

      <span>Page {{ currentPage }}</span>

    <button
      @click="nextPage"
      :disabled="apartments.length < itemsPerPage"
    >
      Next
    </button>

    <div v-if="isLoading" class="flex flex-col w-full font-extrabold text-red-500 gap-8 text-2xl justify-center items-center text-center">
      <div class="spinner-border text-custom-green700"></div>
      <div class="mt-2">Cargando apartamentos...</div>
    </div>

    <div v-else>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-12 gap-8 text-center">
        <li v-for="apartment in apartments" :key="apartment.id">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
    </div>

    <div v-if="error" class="flex flex-col gap-8 text-2xl justify-center items-center w-full font-extrabold text-red-500">
      <img class="w-52" src="/icons/error.svg" alt="Error loading API">
      {{ error }}
    </div>
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
    const { apartments, error, isLoading, nextPage, prevPage, currentPage, itemsPerPage } = useApartments();

    return {
      apartments,
      error,
      isLoading,
      nextPage,
      prevPage,
      currentPage,
      itemsPerPage,
    };
  },
};
</script>
