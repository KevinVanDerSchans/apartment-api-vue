import { ref, onMounted } from 'vue';
import axiosClient from '../utils/axios';

const useSearchHook = () => {
  const apartments = ref([]);

  const fetchApartments = async () => {
    try {
      console.log('Antes de la llamada a la API');
      const { data } = await axiosClient.post('/search');
      console.log('Después de la llamada a la API', data);
      apartments.value = data;
    } catch (error) {
      console.log('Error en la llamada a la API', error);
    }
  };

  onMounted(fetchApartments);

  return {
    apartments,
  };
};

export default useSearchHook;
