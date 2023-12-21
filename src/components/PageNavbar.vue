<script>

</script>

<template>
  <header class="flex justify-center">
    <div class="text-center inline-flex items-center">
      <router-link to="/">
        <img class="w-20 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-52 xl:h-32 mr-14" src="/logo-minty-host.svg" alt="Minty Host Logo">
      </router-link>

      <div class="bg h-16 flex">
        <router-link
          :to="{ name: 'housing' }"
          class="inline-flex items-center h-full px-5 text-white-500 font-bold"
        >
          Viviendas
        </router-link>
        <router-link
          :to="{ name: 'questions' }"
          class="inline-flex items-center h-full px-5 text-white-500 font-bold"
        >
          Preguntas
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="inline-flex items-center h-full px-5 text-white-500 font-bold"
        >
          Contacto
        </router-link>
      </div>
    </div>
  </header>
</template>
