<script>
import { ref } from 'vue'

export default {

  data() {
    return {
      showMenu: false,
      selectedLanguage: ref('en'),
      isDropdownOpen: ref(false),
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    setLanguage(lang) {
      this.selectedLanguage = lang;
      this.toggleDropdown();
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  },
};
</script>

<template>
  <header class="flex justify-between items-center md:justify-center p-4">
    <router-link to="/">
      <img class="w-40 h-14 mr-8" src="/logo-minty-host.svg" alt="Minty Host Logo">
    </router-link>

    <button @click="toggleMenu" class="text-white cursor-pointer fixed top-7 right-2 md:hidden">
      <img class="w-8 h-8" src="/icons/hamburger.svg" alt="Hamburger Icon">
    </button>

    <div class="hidden md:flex bg h-12">
      <router-link
        :to="{ name: 'housing' }"
        class="flex items-center h-full px-5 text-white-500 font-bold hover:text-custom-500 uppercase"
      >
        Viviendas
      </router-link>
      <router-link
        :to="{ name: 'questions' }"
        class="flex items-center h-full px-5 text-white-500 font-bold hover:text-custom-500 uppercase"
      >
        Preguntas
      </router-link>
      <router-link
        :to="{ name: 'contact' }"
        class="flex items-center h-full px-5 text-white-500 font-bold hover:text-custom-500 uppercase"
      >
        Contacto
      </router-link>
    </div>

    <div v-if="showMenu" class="md:hidden flex flex-col bg fixed top-20 right-0 bg-custom-500 rounded">
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

    <div class="relative pl-8">
      <button
        @click="toggleDropdown"
        :class="{ '': isDropdownOpen }"
        class="bg-custom-500 text-white px-4 py-1 ml-8cursor-pointer focus:outline-none lg:fixed fixed top-7 right-16"
      >
      <div class="relative flex gap-2 items-center w-18">
        <span class="font-extrabold">{{ selectedLanguage.toUpperCase() }}</span>
        <img src="/icons/arrow-down.svg" class="w-3"/>
      </div>
      </button>

      <div v-if="isDropdownOpen" class="origin-top-right mt-2 w-20 bg-white ring-1 ring-black ring-opacity-5 lg:fixed fixed top-14 right-16">
        <div class="py-1">
          <button
            @click="setLanguage('es')"
            :class="{ 'bg-custom-500 text-white font-bold': selectedLanguage === 'es' }"
            class="w-full text-left px-4 py-2 text-sm">
            ES
          </button>

          <button
            @click="setLanguage('en')"
            :class="{ 'bg-custom-500 text-white font-bold': selectedLanguage === 'en' }"
            class="w-full text-left px-4 py-2 text-sm">
            EN
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
