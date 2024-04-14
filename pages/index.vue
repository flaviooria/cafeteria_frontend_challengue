<script lang="ts" setup></script>

<style></style>

<template>
  <div class="bg-background_first min-h-screen">
    <main class="pt-[80px]">
      <article class="flex flex-1 justify-center gap-3">
        <div class="w-[80%] h-[800px] flex justify-between gap-20 p-5 mt-10">
          <div class="w-[40%]">
            <h1
              class="font-title text-[10rem] text-title_first text-balance leading-[150px]"
            >
              Lau's <br />Coffee
            </h1>
            <h2 class="font-subtitle text-[2rem] text-title_first">
              El mejor café solo se encuentra en un solo lugar
            </h2>
            <p class="font-text text-[1.2rem] text-text_first my-5 leading-10">
              ¡Bienvenidos a nuestro oasis delicioso y sostenible! En nuestra
              cafetería, cada taza de café, cada bocado de helado y cada
              tentador postre es una experiencia para los sentidos y para el
              planeta.
            </p>
          </div>
          <div
            class="w-[60%] grid justify-center items-center grid-cols-6 grid-rows-6"
          >
            <div class="box1 bg-background_second opacity-50 rounded-2xl"></div>
            <div class="box3">
              <img
                src="/images/coffee_break.jpg"
                alt="Coffee Image"
                class="rounded-2xl w-full h-full object-cover drop-shadow-sm"
              />
            </div>
            <div
              class="box2 bg-button_background_first rounded-2xl opacity-50"
            ></div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<style scoped>
.box1 {
  grid-column: 1 / 5;
  grid-row: 1 / 5;
  width: 100%;
  height: 100%;
  filter: blur(5px);
}

.box2 {
  grid-column: 3 / -1;
  grid-row: 3 / -1;
  width: 100%;
  height: 100%;
  filter: blur(5px);
}

.box3 {
  grid-column: 2 / 6;
  grid-row: 2 / 6;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
</style>
