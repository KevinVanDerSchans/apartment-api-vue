<template>
  <header class="flex fixed w-full top-0 justify-between items-center bg-custom-green700 text-custom-navbarLinks md:justify-center p-2 z-10">
    <router-link to="/" class="flex-shrink-0">
      <img class="w-[14.5em] h-12 mr-8 rounded-lg" src="/logo.png" alt="Apartment API logo">
    </router-link>

    <button @click="toggleMenu" class="text-white cursor-pointer fixed top-2 right-3 md:hidden p-2">
      <img class="w-8 h-8" src="/icons/hamburger.svg" alt="Icono menú 'hamburguesa' para tamaño móvil. Despliega opciones de navegación">
    </button>

    <div class="hidden md:flex bg h-12 transition-all duration-300 ease-in-out">
      <router-link
        :to="{ name: 'housing' }"
        class="flex items-center h-full px-5 text-white font-bold hover:text-black uppercase transition-all duration-300 ease-in-out"
      >
        Viviendas
      </router-link>
      <router-link
        :to="{ name: 'questions' }"
        class="flex items-center h-full px-5 text-white font-bold hover:text-black uppercase transition-all duration-300 ease-in-out"
      >
        Preguntas
      </router-link>
      <router-link
        :to="{ name: 'contact' }"
        class="flex items-center h-full px-5 text-white font-bold hover:text-black uppercase transition-all duration-300 ease-in-out"
      >
        Contacto
      </router-link>
    </div>

    <div v-show="showMenu" class="h-[100%] md:hidden flex flex-col bg fixed top-16 right-0 bg-custom-green700 transition-all duration-300 ease-in-out">
      <div class="h-[20%] justify-end items-end px-3">
        <router-link
          :to="{ name: 'housing' }"
          class="flex items-center h-full px-8 text-white font-bold transition-all duration-300 ease-in-out"
        >
          Viviendas
        </router-link>
        <router-link
          :to="{ name: 'questions' }"
          class="flex items-center h-full px-8 text-white font-bold transition-all duration-300 ease-in-out"
        >
          Preguntas
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="flex items-center h-full px-8 text-white font-bold transition-all duration-300 ease-in-out"
        >
          Contacto
        </router-link>

        <div class="flex-column items-center justify-center h-[80%] pt-32">
          <img class="w-32 h-16 opacity-25" src="/icons/house-menu.svg" alt="Apartment API logo">
        </div>
      </div>
    </div>

    <LanguageSelector />
  </header>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';

export default {
  components: {
    LanguageSelector
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
