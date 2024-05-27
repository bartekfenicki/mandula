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
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-light.svg', id: 'favicon' },
      ],
      script: [
        {
          children: `
            (function() {
              function setFavicon(mode) {
                const favicon = document.getElementById('favicon');
                if (mode === 'dark') {
                  favicon.href = '/favicon-dark.svg';
                } else {
                  favicon.href = '/favicon-light.svg';
                }
              }

              function detectTheme() {
                const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                setFavicon(darkModeMediaQuery.matches ? 'dark' : 'light');
                darkModeMediaQuery.addEventListener('change', event => {
                  setFavicon(event.matches ? 'dark' : 'light');
                });
              }

              document.addEventListener('DOMContentLoaded', detectTheme);
            })();
          `
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s -  Cakeshop',
      title: 'Mandula',
      meta: [ 
        { name: 'description', content: 'A Lovely Cakeshop located in Budapest, Hungary. Come and see what do we have to offer!' },
        { name: 'keywords', content: 'cakes, bakery, Budapest, custom cakes, desserts' },
        { property: 'og.title', content: 'Mandula' },
        { property: 'og.description', content: 'Explore our sweet world of cakes! Visit Mnadula Now!' },
        { property: 'og.url', content: 'mandula17.vercel.app' },
        { property: 'og.image', content: '/assets/images/lady-cake.webp' }
      ]
    }
  }
})