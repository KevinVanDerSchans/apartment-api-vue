<script>
export default {
  data() {
    return {
      showMenu: false,
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
  <header class="flex justify-between items-center md:justify-center p-4">
    <router-link to="/">
      <img class="w-40 h-14 mr-8" src="/logo-minty-host.svg" alt="Minty Host Logo">
    </router-link>

    <button @click="toggleMenu" class="text-white cursor-pointer md:hidden">
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
  </header>
</template>
