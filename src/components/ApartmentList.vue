<template>
  <div class="container mx-auto mt-32 p-8">
    <h1 class="text-xl font-extrabold mb-4 text-center text-custom-green700">VIVIENDAS</h1>
    <h2 class="text-lg font-extrabold mb-4 text-center">VIVIVENDAS</h2>

    <div v-if="isLoading" class="flex flex-col w-full font-extrabold text-red-500 gap-8 text-2xl justify-center items-center text-center">
      <div class="spinner-border text-custom-green700"></div>
      <div class="mt-2">{{ t('translation.loading') }}</div>
    </div>

    <div v-else>
      <ul class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 p-12 gap-8 text-center">
        <li v-for="apartment in apartments" :key="apartment.id">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
    </div>

    <div v-if="error" class="flex flex-col gap-8 text-2xl justify-center items-center w-full font-extrabold text-red-500">
      <img class="w-52" src="/icons/error.svg" alt="{{ t('translation.errorAlt') }}">
      {{ error }}
    </div>

    <div class="pagination-container w-full justify-center text-center my-10 flex items-center gap-14">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        v-if="currentPage > 1"
        class="arrow rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-left.svg" alt="{{ t('translation.previousPageAlt') }}" class="w-4"/>
      </button>

      <span class="bg-custom-green700 text-white rounded-full w-20 p-2 text-lg font-bold text-center">
        {{ t('translation.page') }} {{ currentPage }}
      </span>

      <button
        @click="nextPage"
        :disabled="apartments.length < itemsPerPage"
        v-if="apartments.length >= itemsPerPage"
        class="arrow rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-right.svg" alt="{{ t('translation.nextPageAlt') }}" class="w-4"/>
      </button>
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

  data() {
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

<style scoped>
.check-availability-button-transition {
  animation: colorChange 2.2s infinite alternate;
}

@keyframes arrowColorChange {
  from {
    background-color: #f3f4f6;
  }
  to {
    background-color: #80bbb4;
  }
}
</style>
