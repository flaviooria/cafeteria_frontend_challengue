// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },

  primevue: {
    usePrimeVue: true,
    components: {
      include: "*",
    },
    directives: {
      include: "*",
    },
    options: {
      ripple: true,
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },

  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/styles.css",
    "primevue/resources/themes/aura-light-green/theme.css",
    "primeicons/primeicons.css",
  ],
});
