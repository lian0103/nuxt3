import { defineNuxtConfig } from 'nuxt';
import Icons from 'unplugin-icons/vite';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },
  publicRuntimeConfig: {
    LINE_CHANNEL_ID:process.env.LINE_CHANNEL_ID,
    LINE_CALLBACK_URI:process.env.LINE_CALLBACK_URI,
    LINE_CLIENT_SECRET:process.env.LINE_CLIENT_SECRET,
    OAUTH_LINE: `https://access.line.me/oauth2/v2.1/authorize?client_id=${process.env.LINE_CHANNEL_ID}&redirect_uri=${process.env.LINE_CALLBACK_URI}&response_type=code&scope=openid%20email%20profile&bot_prompt=aggressive&state=200`,
  },
});
