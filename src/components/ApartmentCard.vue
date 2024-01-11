<template>
  <div class="bg-white shadow-xl rounded-tl-2xl rounded-br-2xl overflow-hidden flex-col">
    <transition
      mode="out-in"
      enter-active-class="transition-transform ease-in-out duration-500 transform"
      leave-active-class="transition-transform ease-in-out duration-500 transform"
    >
      <img
        :key="currentImage"
        :src="currentImage"
        class="w-full h-64 object-cover transform-gpu hover:scale-150"
        alt="Foto actual del apartamento"
      />
    </transition>

    <div class="carousel-controls flex relative justify-center mt-2 gap-10 p-2">
      <button
        @click="prevImage"
        class="arrow rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-left.svg" alt="Foto anterior" class="w-4"/>
      </button>

      <button
        @click="nextImage"
        class="arrow rounded-full bg-gray-200 hover:bg-custom-green700 w-10 h-10 flex items-center justify-center text-gray-600 transition-all duration-300 ease-in-out"
      >
        <img src="/icons/arrow-right.svg" alt="Siguiente foto" class="w-4"/>
      </button>
    </div>

    <div class="flex-col">
      <div class="container">
        <div class="top">
          <div>
            <div class="title-container">
              <p class="font-extrabold p-4 text-sm">{{ apartment.apartment_title }}</p>
            </div>

            <div class="location-container flex justify-center w-full gap-3 sm:gap-4 border-b-2 border-gray-200 pb-4">
              <div class="flex p-2 bg-custom-green700 rounded-full gap-1.5">
                <img class="w-6" src="/icons/user.svg" alt="Icono de usuario para indicar número máximo de huéspedes">
                <span class="text-white font-bold">{{ apartment.accommodates_max }}</span>
              </div>

              <div class="house-container flex items-center gap-2">
                <img class="w-6" src="/icons/house.svg" alt="Icono de una casa para indicar la provincia del apartamento">
                <span class="font-bold text-custom-green700">{{ apartment.town }}</span>
              </div>

              <button @click="notAvailable" class="map-container flex pl-4 pr-4 rounded-full items-center bg-custom-green700 hover:bg-black">
                <span><img class="w-6" src="/icons/map.svg" alt="Icono de un mapa para indicar la ubicación del apartamento" /></span>
              </button>
            </div>
          </div>
        </div>

        <div class="bottom flex flex-col md:flex-row justify-center sm:gap-0 p-2">
          <div class="left-container">
            <div class="left">
              <div class="flex w-full justify-center gap-1 p-1 items-center">
                <span v-if="apartment.amenities.wifi">
                  <img class="w-6" src="/icons/wifi.svg" alt="Icono de wi-fi que indica si el apartamento dispone de ello"/>
                </span>
                <span v-else class="placeholder"> </span>

                <span v-if="apartment.amenities['A/C']">
                  <img class="w-6" src="/icons/air.svg" alt="Icono de A/C que indica si el apartamento dispone de ello"/>
                </span>
                <span v-else class="placeholder"> </span>

                <span v-if="apartment.amenities.heating">
                  <img class="w-6" src="/icons/heating.svg" alt="Icono de calefacción que indica si el apartamento dispone de ello"/>
                </span>
                <span v-else class="placeholder"></span>
                <span class="text-custom-green700 font-bold text-xl md:text-lg ml-2">{{ apartment.square_meter }}m²</span>
              </div>

              <div class="flex items-center p-1 sm:flex sm:w-full justify-center sm:text-center">
                <img src="/icons/bedroom.svg" class="w-6 mr-1" alt="Icono de una cama para indicar el máximo de dormitorios"/>
                <span class="font-bold text-sm">{{ apartment.bedrooms }} Dorm.</span>
              </div>

              <div class="flex items-center p-1 sm:flex sm:w-full justify-center sm:text-center">
                <img src="/icons/bathroom.svg" class="w-6 mr-1" alt="Icono de una bañera para indicar el máximo de baños"/>
                <span class="font-bold text-sm">{{ apartment.bathrooms }} Baño</span>
              </div>
            </div>
          </div>

          <div class="right items-center justify-center flex flex-col">
            <div class="p-2">
              <span class="text-custom-grey300 text-sm">desde </span>
              <span class="font-bold text-xl md:text-3xl">{{ apartment.monthly_price }}</span><span class="font-extrabold text-xl">€</span>
              <span class="text-custom-grey300 text-sm">/mes</span>
            </div>

            <div>
              <button @click="notAvailable" class="check-availability-button-transition p-2">
                <span class="font-bold text-sm text-white">
                  Ver disponibilidad
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  props: {
    apartment: Object,
  },
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.apartment.pic[this.currentImageIndex];
    }
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.apartment.pic.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.apartment.pic.length) % this.apartment.pic.length;
    },
    notAvailable() {
      Swal.fire({
        position: "center",
        icon: "warning",
        iconColor: 'black',
        color: '#e3ebea',

        title: "Actualmente, el apartamento no está disponible. Para obtener asistencia, contáctenos en info@apartmentsapi.com",
        showConfirmButton: false,
        timer: 4000,
        customClass: {
          container: 'custom-swal-container',
        },
        didOpen: () => {
          Swal.getPopup().style.background = 'linear-gradient(to bottom, #38b2a4, #036156)';
          Swal.getTitle().style.fontSize = '1.4rem';
        }
      });
    },
  },
};
</script>

<style scoped>
.check-availability-button-transition {
  animation: availabilityButton 2.2s infinite alternate;
}

.arrow {
  animation: arrowColorChange 4.4s infinite alternate;
}

@keyframes availabilityButton {
  from {
    background-color: #38b2a4;
  }
  to {
    background-color: #1F2937;
  }
}

@keyframes arrowColorChange {
  from {
    background-color: #f3f4f6;
  }
  to {
    background-color: #57baafc0;
  }
}
</style>
