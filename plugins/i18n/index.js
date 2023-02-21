const i18n = {
  locales: ["en", "zh-tw"], // used in URL path prefix
  defaultLocale: "zh-tw", // default locale of your project for Nuxt pages and routings
  vueI18n: {
    legacy: false,
    locale: "zh-tw",
    messages: {
      "zh-tw": require("./locales/zh-tw"),
      en: require("./locales/en"),
    },
  },
};

export default i18n;
