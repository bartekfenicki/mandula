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
      link: [
        { rel: 'icon', type: 'svg', href: '/favicon.svg' },
      ],
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s -  Cakeshop',
      title: 'Mandula',
      meta: [ 
        { name: 'description', content: 'A Lovely Cakeshop located in Budapest, Hungary. Come and see what do we have to offer!' },
        { name: 'keywords', content: 'cakes, bakery, Budapest, custom cakes, desserts' }
      ]
    }
  }
})