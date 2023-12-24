<template>
  <div class="container mx-auto mt-32 p-8">
    <h1 class="text-xl font-extrabold mb-4 text-center text-custom-green700">VIVIENDAS</h1>
    <h2 class="text-lg font-extrabold mb-4 text-center">Descubre nuestros apartamentos</h2>

    <div v-if="loading" class="flex flex-col w-full font-extrabold text-red-500 gap-8 text-2xl py-20 justify-center items-center text-center">
      <div class="spinner-border text-custom-green700"></div>

      <div class="mt-1">
        <img src="/spinner.svg" alt="Cargando apartamentos..."/>
      </div>
    </div>

    <div v-else>
      <ul class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 p-12 gap-8 text-center">
        <li v-for="apartment in apartments" :key="apartment.id">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
    </div>

    <div v-if="error" class="flex flex-col gap-8 text-2xl justify-center items-center w-full font-extrabold text-red-500">
      <img class="w-52" src="/icons/error.svg" alt="No se ha podido conectar con la API externa">
      {{ error }}
    </div>

    <div class="pagination-container w-full justify-center text-center my-10 flex items-center gap-14">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        v-if="currentPage > 1"
        class="arrow rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-left.svg" alt="Página anterior" class="w-4" />
      </button>

      <span class="bg-custom-green700 text-white rounded-full w-20 p-2 text-lg font-bold text-center">
        Pág. {{ currentPage }}
      </span>

      <button
        @click="nextPage"
        :disabled="apartments.length < itemsPerPage"
        v-if="apartments.length >= itemsPerPage"
        class="arrow rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-right.svg" alt="Siguiente página" class="w-4"/>
      </button>
    </div>
  </div>
</template>

<script>
import ApartmentCard from './ApartmentCard.vue';
import { ref } from 'vue';

export default {
  components: {
    ApartmentCard,
  },

  data() {
    const apartments = ref([]);
    const error = ref(null);
    const loading = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = 3;

    return {
      apartments,
      error,
      loading,
      currentPage,
      itemsPerPage,
    };
  },

  methods: {
    async nextPage() {
      if (this.apartments.length >= this.itemsPerPage) {
        this.currentPage++;
        await this.fetchApartments();
      }
    },

    async prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.fetchApartments();
      }
    },

    async fetchApartments() {
      this.loading = true;

      try {
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseURL}/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const startIndex = (this.currentPage - 1) * this.itemsPerPage;
          const endIndex = startIndex + this.itemsPerPage;
          this.apartments = data.slice(startIndex, endIndex);
          this.error = null;

        } else {
          console.log('Error en la llamada a la API', response.statusText);
          this.error = response.statusText;
        }

      } catch (error) {
        console.error('Error en la llamada a la API', error);
        this.error = error.message;

      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    this.fetchApartments();
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
