import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/nuxt3/'
  },
  css: ['@/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  publicRuntimeConfig: {
    port: 3000,
  },
});
