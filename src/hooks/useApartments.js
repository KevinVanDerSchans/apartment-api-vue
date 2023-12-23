import { ref, onMounted } from 'vue';

const useApartments = () => {
  const apartments = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const currentPage = ref(1);
  const itemsPerPage = 3;

  const fetchApartments = async (filters = {}) => {
    try {
      loading.value = true;

      // Your API endpoint and fetch logic here
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      // Include filters in the API request if needed
      const response = await fetch(`${baseURL}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(filters),
      });

      if (response.ok) {
        const data = await response.json();

        const startIndex = (currentPage.value - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        apartments.value = data.slice(startIndex, endIndex);
      } else {
        console.log('Error in API call:', response.statusText);
        error.value = response.statusText;
        // Handle errors as needed
      }
    } catch (error) {
      console.error('Error in API call:', error);
      error.value = error.message;
      // Handle errors as needed
    } finally {
      loading.value = false;
    }
  };

  const nextPage = () => {
    currentPage.value++;
    fetchApartments();
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchApartments();
    }
  };

  onMounted(fetchApartments);

  return {
    apartments,
    error,
    loading,
    nextPage,
    prevPage,
    currentPage,
    itemsPerPage,
    fetchApartments,
  };
};

export default useApartments;
