<script>
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
  },
};
</script>

<template>
  <div class="bg-white shadow-xl rounded-tl-2xl rounded-br-2xl overflow-hidden flex-col">
    <img :src="currentImage" class="w-full" alt="Apartment photo" />

    <div class="carousel-controls flex justify-center mt-2 gap-10 p-2">
      <button
        @click="prevImage"
        class="text-black font-extrabold text-2xl "
      >
      <img src="/icons/arrow-left.svg" alt="Previous photo" class="w-6"/>
      </button>

      <button
        @click="nextImage"
        class="text-black font-extrabold text-2xl"
      >
      <img src="/icons/arrow-right.svg" alt="Next photo" class="w-6" />
      </button>

    </div>

    <div class="flex-col">
      <div class="container">
        <div class="top">
          <div>
            <div class="title-container">
              <p class="font-extrabold p-4 text-sm">{{ apartment.apartment_title }}</p>
            </div>

            <div class="location-container flex justify-center w-full gap-6 border-b-2 border-gray-200 pb-4">
              <div class="flex p-2 bg-custom-green500 rounded-lg gap-1.5">
                <img class="w-6" src="/icons/user.svg" alt="User Icon">
                <span class="text-white font-bold">{{ apartment.accommodates_max }}</span>
              </div>

              <div class="house-container flex items-center gap-2">
                <img class="w-6" src="/icons/house.svg" alt="House icon">
                <span class="font-bold text-custom-green500">{{ apartment.town }}</span>
              </div>

              <button class="map-container flex pl-4 pr-4 rounded-lg items-center bg-custom-green500 hover:bg-black">
                <span><img class="w-6" src="/icons/map.svg" alt="Map icon" /></span>
              </button>
            </div>
          </div>
        </div>

        <div class="bottom flex flex-col md:flex-row justify-center gap-6 p-2">
          <div class="left-container">
            <div class="left">
              <div class="flex gap-1 p-1 items-center">
                <span v-if="apartment.amenities.wifi">
                  <img class="w-6" src="/icons/wifi.svg" alt="Wifi icon"/>
                </span>
                <span v-else class="placeholder"> </span>

                <span v-if="apartment.amenities['A/C']">
                  <img class="w-6" src="/icons/air.svg" alt="Air icon"/>
                </span>
                <span v-else class="placeholder"> </span>

                <span v-if="apartment.amenities.heating">
                  <img class="w-6" src="/icons/heating.svg" alt="Heating icon"/>
                </span>
                <span v-else class="placeholder"></span>

                <span class="text-custom-green700 font-bold text-xl md:text-2xl ml-2">{{ apartment.square_meter }}m²</span>
              </div>

              <div class="flex items-center p-1">
                <img src="/icons/bedroom.svg" class="w-6 mr-1" alt="Bedroom icon"/>
                <span class="font-bold text-sm">{{ apartment.bedrooms }} Dorm.</span>
              </div>

              <div class="flex items-center p-1">
                <img src="/icons/bathroom.svg" class="w-6 mr-1" alt="Bathroom icon"/>
                <span class="font-bold text-sm">{{ apartment.bathrooms }} Baño</span>
              </div>
            </div>
          </div>

          <div class="right items-center justify-center flex flex-col">
            <div class="p-1">
              <span class="text-custom-grey300 text-sm">desde </span>
              <span class="font-extrabold text-xl md:text-2xl">{{ apartment.monthly_price }}</span><span class="font-extrabold text-xl">€</span>
              <span class="text-custom-grey300 text-sm">/mes</span>
            </div>

            <div>
              <button class="bg-custom-green700 p-1.5 rounded hover:bg-black">
                <span class="font-bold text-sm text-white">Ver disponibilidad</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
