<script lang="ts" setup></script>

<template>
  <header
    class="flex items-center justify-around p-3 bg-white h-[80px] fixed w-full top-0 left-0 right-0"
  >
    <h1 class="font-title text-3xl cursor-pointer">Lau's Coffee</h1>
    <div class="w-[60%]">
      <ul class="flex items-center justify-center flex-1 gap-10">
        <li class="cursor-pointer hover:text-background_first">Productos</li>
        <li class="cursor-pointer hover:text-background_first">
          Ofertas especiales
        </li>
        <li class="cursor-pointer hover:text-background_first">
          Sobre nosotros
        </li>
      </ul>
    </div>
    <div class="flex gap-3">
      <Button
        label="Iniciar Sesión"
        class="bg-button_background_first text-button_text_first border-0"
        raised
      />
      <Button
        label="¿Eres Socio?"
        class="bg-background_second text-button_text_first border-0"
        raised
      />
    </div>
  </header>
</template>
