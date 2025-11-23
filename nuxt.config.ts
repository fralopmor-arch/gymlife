import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-12',

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],

  // 👇 THIS IS THE FIX. IT FORCES LIGHT MODE.
  colorMode: {
    preference: 'light',
    fallback: 'light', 
    storageKey: '' // Disables saving preference to browser storage
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css: ['~/assets/css/main.css'],

  // Fix for the icons type error
  ui: {
    icons: ['ph', 'logos', 'simple-icons'],
  } as any,

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },

  devtools: { enabled: true },
})