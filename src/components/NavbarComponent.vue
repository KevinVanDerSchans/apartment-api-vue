<template>
  <header class="flex fixed w-full top-0 justify-between items-center bg-custom-green700 text-custom-navbarLinks md:justify-center p-2 z-10">
    <router-link to="/" class="flex-shrink-0">
      <img class="w-40 h-12 mr-8 ml-4" src="/logo-minty-host.svg" alt="Logo oficial de Minty Host">
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

    <div v-show="showMenu" class="md:hidden flex flex-col bg fixed top-16 right-0 bg-custom-green700 transition-all duration-300 ease-in-out">
      <div class="justify-end items-end p-6">
        <router-link
          :to="{ name: 'housing' }"
          class="flex items-center h-full px-8 text-white font-bold mb-8 transition-all duration-300 ease-in-out"
        >
          Viviendas
        </router-link>
        <router-link
          :to="{ name: 'questions' }"
          class="flex items-center h-full px-8 text-white font-bold mb-8 transition-all duration-300 ease-in-out"
        >
          Preguntas
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="flex items-center h-full px-8 text-white font-bold transition-all duration-300 ease-in-out"
        >
          Contacto
        </router-link>
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
