import en from "./locales/en";
import zh from "./locales/zh";

export default defineI18nConfig(() => ({
  fallbackLocale: "zh",
  legacy: false,
  locales: ["en", "zh"], // used in URL path prefix
  locale: "zh", // default locale of your project for Nuxt pages and routings
  messages: {
    en,
    zh,
  },
}));
