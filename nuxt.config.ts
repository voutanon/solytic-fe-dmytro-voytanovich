// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/Styles/Colors.sass',
    '@/assets/Styles/Global.sass',
    '@/assets/Styles/Modal.sass',
    'vue-final-modal/style.css'
  ],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       sass: {
  //         additionalData: '@import "@/assets/Styles/Colors.sass"',
  //       },
  //     },
  //   },
  // },
  modules: [
    "@nuxtjs/apollo",
    'nuxt3-vuex-module'
  ],
  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        httpEndpoint: process.env.API_BASE_URL as string,
        httpLinkOptions: {
          headers: {
            'x-api-key': process.env.API_KEY as string,
          },
        },
    
      }
    },
  },
})
