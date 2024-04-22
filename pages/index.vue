<script lang="ts" setup></script>

<style></style>

<template>
  <div class="bg-background_first min-h-screen">
    <div class="pt-[80px] flex flex-col">
      <div class="h-full flex md:justify-center gap-3 p-3 md:p-0">
        <div
          class="w-full xl:w-[90%] flex flex-col md:flex-row justify-between gap-20 mt-10"
        >
          <div class="w-full md:w-[40%]">
            <h1
              class="font-title text-[6rem] md:text-[8rem] lg:text-[10rem] text-title_first text-balance leading-[150px]"
            >
              Lau's <br />Coffee
            </h1>
            <h2
              class="font-subtitle text-[1.2rem] md:text-[2rem] text-title_first leading-10"
            >
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
            class="w-full md:p-0 md:w-[60%] grid justify-center items-center grid-cols-6 grid-rows-6"
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
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            class="shape-fill"
            fill-opacity="1"
            d="M0,192L40,202.7C80,213,160,235,240,250.7C320,267,400,277,480,256C560,235,640,181,720,176C800,171,880,213,960,234.7C1040,256,1120,256,1200,224C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="bg-background_second flex flex-col">
        <div class="w-full mb-5">
          <div
            class="w-full flex flex-col items-center justify-center px-4 text-center"
          >
            <h2
              class="font-subtitle text-[2rem] md:text-[2.5rem] text-title_second font-semibold"
            >
              Hecha un vistazo a los productos recientes
            </h2>
            <p class="font-paragraph text-text_second text-xl md:text-2xl my-3">
              Nuestros nuevos productos siempre hechos con la mejor calidad
            </p>
          </div>
          <div
            class="flex flex-col items-center md:flex-row md:justify-center mt-10 gap-10 p-5"
          >
            <ProductCardRecent v-for="i in 4" :key="i" />
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center p-5">
        <div
          class="w-full h-2/4 md:h-[300px] md:w-[70%] flex flex-col md:flex-row md:justify-between rounded-[28px] bg-card_background_first p-5 my-5"
        >
          <div class="w-full md:w-[50%]">
            <h2
              class="font-subtitle text-[2rem] md:text-[2.5rem] text-cart_title_first"
            >
              Explora nuestros mejores productos y granos de café
            </h2>
            <div class="flex justify-start items-center p-5">
              <Button
                label="Ver más"
                icon-pos="right"
                icon="pi pi-arrow-right"
                class="rounded-lg bg-button_background_first border-0 text-button_text_first"
              />
            </div>
          </div>
          <div class="w-full md:w-[50%] overflow-hidden">
            <img
              src="/images/coffee_2.jpg"
              class="w-full h-full object-cover rounded-lg"
              alt="Image coffee"
            />
          </div>
        </div>
      </div>
      <div class="bg-background_second flex flex-col">
        <div class="w-full my-5">
          <div
            class="w-full flex flex-col items-center justify-center px-4 text-center"
          >
            <h2
              class="font-subtitle text-[2rem] md:text-[2.5rem] text-title_second font-semibold"
            >
              Hecha un vistazo a nuestras ofertas
            </h2>
            <p class="font-paragraph text-text_second text-xl md:text-2xl my-3">
              Nuevas ofertas cada mes, con los mejores descuentos
            </p>
          </div>
          <div
            class="flex flex-col items-center md:flex-row md:justify-center mt-10 gap-10 p-5"
          >
            <ProductCardRecent
              v-for="i in 4"
              :key="i"
              tag="50 %"
              :price-discount="1.5"
              has-discount
            />
          </div>
        </div>
      </div>
    </div>
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
  z-index: 1;
}

.shape-fill {
  fill: #abd1c6;
}
</style>
