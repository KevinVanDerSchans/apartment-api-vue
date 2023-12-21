<script>
import useSearchHook from '../hooks/searchHook';

export default {
  setup() {
    const { apartments, onMounted } = useSearchHook();

    onMounted();

    return {
      apartments,
    };
  },
};
</script>

<template>
  <div class="container mx-auto mt-8">
    <div class="pb-8">
      <h1 class="text-2xl font-bold mb-4 text-center">Apartment List</h1>
    </div>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      <li v-for="apartment in apartments" :key="apartment.id" class="bg-white p-4 shadow-md rounded-md">
        <h2 class="text-lg font-semibold mb-2">{{ apartment.address }}</h2>
      </li>
    </ul>
  </div>
</template>
