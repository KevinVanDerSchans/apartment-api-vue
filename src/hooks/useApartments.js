import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

const useApartments = () => {
  const apartments = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const currentPage = ref(1);
  const itemsPerPage = 3;

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

        const startIndex = (currentPage.value - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        apartments.value = data.slice(startIndex, endIndex);

      } else {
        console.log('Error en la llamada a la API', response.statusText);
        error.value = response.statusText;

        Swal.fire({
          position: "center",
          icon: "warning",
          iconColor: 'red',
          color: 'red',
          title: "Error al conectar con la API.",
          showConfirmButton: false,
          timer: 5000,
          customClass: {
            container: 'custom-swal-container',
          },
        });
      }

    } catch (error) {
      console.error('Error en la llamada a la API', error);
      error.value = error.message;

      Swal.fire({
        position: "center",
        icon: "warning",
        iconColor: 'red',
        color: 'red',
        title: "Error al conectar con la API.",
        showConfirmButton: false,
        timer: 5000,
        customClass: {
          container: 'custom-swal-container',
        },
      });

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
  };
};

export default useApartments;
