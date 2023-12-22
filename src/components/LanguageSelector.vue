<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      selectedLanguage: ref('en'),
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
    }
  }
}
</script>

<template>
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

</template>
