<script>
import LanguageSelector from './LanguageSelector.vue'

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

<template>
  <header class="flex fixed w-full top-0 justify-between items-center bg-custom-navbar text-custom-navbarLinks md:justify-center p-2">
    <router-link to="/">
      <img class="w-40 h-12 mr-8" src="/logo-minty-host.svg" alt="Minty Host Logo">
    </router-link>

    <button @click="toggleMenu" class="text-white cursor-pointer fixed top-4 right-3 md:hidden">
      <img class="w-8 h-8" src="/icons/hamburger.svg" alt="Hamburger Icon">
    </button>

    <div class="hidden md:flex bg h-12">
      <router-link
        :to="{ name: 'housing' }"
        class="flex items-center h-full px-5 text-white-500 font-bold hover:text-black uppercase"
      >
        Viviendas
      </router-link>
      <router-link
        :to="{ name: 'questions' }"
        class="flex items-center h-full px-5 text-white-500 font-bold hover:text-black uppercase"
      >
        Preguntas
      </router-link>
      <router-link
        :to="{ name: 'contact' }"
        class="flex items-center h-full px-5 text-white-500 font-bold hover:text-black uppercase"
      >
        Contacto
      </router-link>
    </div>

    <div v-if="showMenu" class="md:hidden flex flex-col bg fixed top-16 right-0 bg-custom-green700 ">
      <div class="justify-end items-end p-6">
        <router-link
          :to="{ name: 'housing' }"
          class="flex items-center h-full px-8 text-white font-bold mb-8"
        >
          Viviendas
        </router-link>
        <router-link
          :to="{ name: 'questions' }"
          class="flex items-center h-full px-8 text-white font-bold mb-8"
        >
          Preguntas
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="flex items-center h-full px-8 text-white font-bold"
        >
          Contacto
        </router-link>
      </div>
    </div>

    <LanguageSelector />
  </header>
</template>
