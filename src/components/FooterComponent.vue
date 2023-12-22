<script>
</script>

<template>
  <footer class="bg-gray-800 text-white bottom-0 w-full">
    <div class="container mx-auto text-center ">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="p-4">
          <h1 class="text-sm font-bold">Minty Host</h1>
          <p class="text-xs">© 2023 Todos los derechos reservados.</p>
        </div>
        <div class="md:mt-0">
          <ul class="flex space-x-4 px-4 font-bold text-sm">
            <li class="hover:text-custom-green700">
              <router-link to="/viviendas">Viviendas</router-link>
            </li>
            <li class="hover:text-custom-green700">
              <router-link to="/preguntas">Preguntas</router-link>
            </li>
            <li class="hover:text-custom-green700">
              <router-link to="/contacto">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
