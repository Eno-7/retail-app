export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    "@nuxt/icon",
    "nuxt-swiper",
    '@pinia/nuxt'
  ],
  css: ['~/assets/styles/globals.css'],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    config: {
      darkMode: "class",
      theme: {
        colors: {
          green: { 100: '#6bc652', 200: "#06ab2a", theme: "#25af60" },
          bg: '#f5f5f5',
          'hover-bg': '#e0e0e0',
          black: '#000000',
          yellow: {
            theme: "#f1c40f"
          },
          primary: {
            900: '#fc8019',
            800: '#fef2e8',
            theme: "#f39c13"
          },
          'hover-primary': '#ff9933',
          white: "#ffffff",
          transparent: 'transparent',
          gray: {
            100: "#f2f2f2",
            200: '#a4a6a7'
          },
          purple: "#9b59b6"
        }
      }
    },
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})