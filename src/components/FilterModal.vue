<template>
  <div class="filter-modal">
    <label>Price Range:</label>
    <input v-model="filters.priceMin" type="number" placeholder="Min">
    <input v-model="filters.priceMax" type="number" placeholder="Max">

    <label>Number of Bedrooms:</label>
    <input v-model="filters.bedrooms" type="number">

    <label>Max Guests:</label>
    <input v-model="filters.maxGuests" type="number">

    <button @click="applyFilters">Apply Filters</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        priceMin: null,
        priceMax: null,
        bedrooms: null,
        maxGuests: null,
        // Add more filters as needed
      },
    };
  },
  methods: {
    applyFilters() {
      // Emit an event to notify the parent component about the applied filters
      this.$emit('apply-filters', this.filters);
    },
  },
};
</script>

<style scoped>
/* Add your styling for the modal */
</style>
