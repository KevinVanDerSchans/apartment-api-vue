<template>
  <footer class="bg-gray-800 text-white bottom-0 w-full">
    <div class="container mx-auto text-center">
      <div class="flex flex-col md:flex-row items-center justify-between py-2 md:py-2">
        <div class="md:order-2">
          <ul class="flex space-x-4 px-4 font-bold text-sm mr-0 md:mr-12">
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
        <div class="md:order-1 p-2 md:ml-8 md:p-2">
          <p class="text-lg font-bold">Minty Host</p>
          <p class="text-xs">© 2023 Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
