// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-icon', 'nuxt-swiper'],
  plugins: [
    '~/plugins/vue-the-mask.js'
  ],
  css: [
    '~/assets/scss/style.scss' 
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/include/_mixins.scss";
          @import "@/assets/scss/include/_variables.scss";
          `
        }
      }
    }
  }
})
