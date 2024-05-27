// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    ConsumerKey: process.env.CONSUMER_KEY_API,
    ConsumerSecret: process.env.CONSUMER_SECRET_API,
    Password: process.env.ADMIN_PASSWORD,
    EmailNews: process.env.EMAIL_USER,
    EmailPass: process.env.EMAIL_PASS
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Mandula',
      meta: [
        { name: 'mandula', content: 'Hungarian Cakeshop website' }
      ]
    }
  }
})