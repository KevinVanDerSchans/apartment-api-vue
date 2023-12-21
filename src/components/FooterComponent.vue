<script>
</script>

<template>
  <footer class="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
    <div class="container mx-auto text-center">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 class="text-lg font-bold">Minty Host</h1>
          <p class="text-sm">© 2023 Todos los derechos reservados.</p>
        </div>
        <div class="mt-4 md:mt-0">
          <ul class="flex space-x-4 font-bold">
            <li class="hover:text-custom-500">
              <router-link to="/viviendas">Viviendas</router-link>
            </li>
            <li class="hover:text-custom-500">
              <router-link to="/preguntas">Preguntas</router-link>
            </li>
            <li class="hover:text-custom-500">
              <router-link to="/contacto">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
