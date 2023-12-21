import { ref } from 'vue';
import axiosClient from '../utils/axios';

const useSearchHook = () => {
  const apartments = ref([]);

  const fetchApartments = async () => {
    try {
      const { data } = await axiosClient.post('/search');
      apartments.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const onMounted = () => {
    fetchApartments();
  };

  return {
    apartments,
    onMounted,
  };
};

export default useSearchHook;
