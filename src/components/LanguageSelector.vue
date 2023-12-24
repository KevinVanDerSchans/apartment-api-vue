<template>
  <div class="relative pl-8">
    <button
      @click="toggleDropdown"
      :class="{ 'bg-custom-languageSelector-active': isDropdownOpen, 'bg-custom-languageSelector': !isDropdownOpen }"
      class="hover:bg-custom-green700 focus:bg-custom-green700 text-white px-4 py-2 ml-8 cursor-pointer focus:outline-none lg:fixed fixed top-3 right-20 lg:top-3 lg:right-16 transition-all duration-300 ease-in-out"
    >
      <div class="relative flex items-center">
        <img src="/icons/flag-es.svg" class="w-4 h-6 mr-2" alt="Idioma ES" />
        <span class="font-extrabold">{{ selectedLanguage.toUpperCase() }}</span>
        <img src="/icons/arrow-down.svg" class="w-3 ml-2" alt="Selector para desplegar opciones para cambiar el idioma" />
      </div>
    </button>

    <div v-if="isDropdownOpen" class="mt-2 w-24 bg-custom-grey300 ring-1 ring-black ring-opacity-5 lg:fixed fixed top-11 right-16 shadow-md">
      <div class="divide-y divide-gray-400">
        <button
          @click="setLanguage('es')"
          :class="{ 'bg-custom-green700 text-white font-bold flex items-center': selectedLanguage === 'es', 'text-black font-bold flex items-center': selectedLanguage !== 'es' }"
          class="w-full text-left px-4 py-2 text-sm transition-all duration-300 ease-in-out"
        >
          <img src="/icons/flag-es.svg" class="w-4 h-6 mr-2" alt="Español" />
          <span class="text-lg">ES</span>
        </button>

        <button
          @click="setLanguage('en')"
          :class="{ 'bg-custom-green700 text-white font-bold flex items-center': selectedLanguage === 'en', 'text-black font-bold flex items-center': selectedLanguage !== 'en' }"
          class="w-full text-left px-4 py-2 text-sm transition-all duration-300 ease-in-out"
        >
          <img src="/icons/flag-en.svg" class="w-4 h-6 mr-2" alt="Inglés" />
          <span class="text-lg">EN</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      selectedLanguage: ref('es'),
      isDropdownOpen: ref(false),
    };
  },
  methods: {
    setLanguage(lang) {
      this.selectedLanguage = lang;
      this.toggleDropdown();
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
