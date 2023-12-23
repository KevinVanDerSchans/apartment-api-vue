import { ref, onMounted } from 'vue';

const useApartments = () => {
  const apartments = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const fetchApartments = async () => {
    try {
      loading.value = true;

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
        console.log('Después de la llamada a la API', data);
        apartments.value = data;

      } else {
        console.log('Error en la llamada a la API', response.statusText);
        error.value = response.statusText;
      }

    } catch (error) {
        console.error('Error en la llamada a la API', error);
        error.value = error.message;

    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchApartments);

  return {
    apartments,
    error,
    loading,
  };
};

export default useApartments;
