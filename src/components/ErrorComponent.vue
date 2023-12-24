<template>
  <div class="absolute flex w-screen h-screen items-center justify-center h-screen animate__animated animate__fadeInUp">
    <div class="container-error text-center p-8 bg-white shadow-lg rounded-lg">
      <img src="/icons/404-error.svg" alt="Señal que indica el error 404" class="w-32 mx-auto mb-8"/>
      <h1 class="font-extrabold text-4xl text-custom-green700 mb-4">¡Error 404!</h1>
      <h2 class="text-lg text-gray-700 ">No se ha podido encontrar la página.</h2>
      <h3 class="text-lg text-gray-700 mb-8">
        Si necesita ayuda, contáctenos en la sección de
        <span class="uppercase text-custom-green700 hover:text-black font-extrabold">
          <a href="/contacto">Contacto</a>
        </span>
      </h3>
    </div>
  </div>
</template>

<script>
import 'animate.css';
</script>
