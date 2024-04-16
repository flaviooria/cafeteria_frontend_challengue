<script lang="ts" setup></script>

<template>
  <header
    class="w-full h-[80px] fixed top-0 left-0 right-0 z-50 flex items-center md:justify-around p-3 bg-white"
  >
    <h1 class="font-title text-3xl cursor-pointer">Lau's Coffee</h1>
    <div class="w-[60%] hidden md:block">
      <ul class="flex items-center justify-center flex-1 gap-10">
        <li class="cursor-pointer hover:text-background_first">Inicio</li>
        <li class="cursor-pointer hover:text-background_first">Productos</li>
        <li class="cursor-pointer hover:text-background_first">
          Sobre nosotros
        </li>
      </ul>
    </div>
    <div class="hidden md:flex gap-3">
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
