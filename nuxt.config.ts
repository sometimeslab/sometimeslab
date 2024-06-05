// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || "Sometimes Lab",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: false },
  // css: ["@/assets/styles/index.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Serif+JP": "200..900",
          "Noto+Serif+TC": "200..900",
          "Noto+Serif+SC": "200..900",
          "Noto+Serif": { wght: "200..900", ital: "200..700" },
        },
        preload: true,
        download: true,
      },
    ],
    "@nuxtjs/i18n",
    // "@nuxtjs/apollo",
  ],
  srcDir: "src/",
  tailwindcss: {
    cssPath: "~/assets/styles/index.scss",
    viewer: false,
  },
  i18n: {
    defaultLocale: "zh", // default locale of your project for Nuxt pages and routings
    locales: [
      { code: "zh", iso: "zh-TW", name: "繁體中文" },
      { code: "en", iso: "en-US", name: "English" },
    ],
    detectBrowserLanguage: {
      fallbackLocale: "zh",
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    strategy: "no_prefix",
    vueI18n: "./i18n.option.ts",
  },

  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'http://www.sometimeslab.localhost/graphql'
  //     }
  //   },
  // },

  image: {
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          format: "jpg",
        },
      },
    },
  },
});
