// https://nuxt.com/docs/api/configuration/nuxt-config

import { qausar } from "@quasar/vite-plugin";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-quasar-ui"],
  // quasar: {
  //   plugins: [
  //     'BottomSheet',
  //     'Dialog',
  //     'Loading',
  //     'LoadingBar',
  //     'Notify',
  //     'Dark',
  //   ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
