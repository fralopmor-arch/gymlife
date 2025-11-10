// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '@/assets/css/main.css',  // Cambiado de ~ a @
  },
})
