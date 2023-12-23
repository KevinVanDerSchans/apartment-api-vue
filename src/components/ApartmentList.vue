<template>
  <div class="container mx-auto mt-32 p-8">
    <h1 class="text-xl font-extrabold mb-4 text-center text-custom-green700">VIVIENDAS</h1>
    <h2 class="text-lg font-extrabold mb-4 text-center">Descubre nuestros apartamentos</h2>

    <FilterModal @apply-filters="applyFilters" />

    <button @click="fetchApartments">Fetch Apartments</button>

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

    <div class="pagination-container w-full justify-center text-center my-10 flex items-center gap-14">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        v-if="currentPage > 1"
        class="rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 focus:outline-none focus:ring focus:border-custom-green700 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-left.svg" alt="Previous page" class="w-4"/>
      </button>

      <span class="text-xl font-bold text-gray-800">Pág. {{ currentPage }}</span>

      <button
        @click="nextPage"
        :disabled="apartments.length < itemsPerPage"
        v-if="apartments.length >= itemsPerPage"
        class="rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 focus:outline-none focus:ring focus:border-custom-green700 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-right.svg" alt="Next page" class="w-4"/>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ApartmentCard from './ApartmentCard.vue';
import useApartments from '../hooks/useApartments';
import FilterModal from './FilterModal.vue';

export default {
  components: {
    ApartmentCard,
    FilterModal,
  },
  setup() {
    const {
      apartments,
      error,
      isLoading,
      nextPage,
      prevPage,
      currentPage,
      itemsPerPage,
      fetchApartments: fetchApartmentsHook, // Renamed to avoid conflict
    } = useApartments();

    const applyFiltersMainComponent = () => {
      console.log('Applied Filters:', filters.value);
      fetchApartmentsHook(filters.value);
    };

    // Ensure that filters are reactive
    const filters = ref({
      priceMin: null,
      priceMax: null,
      bedrooms: null,
      maxGuests: null,
    });

    return {
      apartments,
      error,
      isLoading,
      nextPage,
      prevPage,
      currentPage,
      itemsPerPage,
      fetchApartments: fetchApartmentsHook,
      applyFilters: applyFiltersMainComponent, // Use the renamed function
    };
  },
};
</script>

