// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || "Sometiems Lab",
    },
  },
  css: ["@/assets/styles/index.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    [
      "@nuxt/image-edge",
      {
        presets: {
          cover: {
            modifiers: {
              fit: "cover",
              format: "jpg",
            },
          },
        },
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Serif+JP": true,
          "Noto+Serif+Traditional+Chinese": true,
        },
        preload: true,
        download: true,
      },
    ],
    "@nuxtjs/i18n",
  ],
  srcDir: "src/",

  i18n: {
    locales: ["en", "zh-tw"], // used in URL path prefix
    defaultLocale: "zh-tw", // default locale of your project for Nuxt pages and routings
    vueI18n: {
      legacy: false,
      locale: "zh-tw",
      messages: {
        "zh-tw": {
          welcome: "歡迎",
          link: "鏈接",
        },
        en: {
          welcome: "Welcome",
        },
      },
    },
  },
});
