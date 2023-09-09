import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/navbar/en.json";
import es from "./locales/navbar/es.json";
import landing_es from "./locales/landing/landing_es.json";
import landing_en from "./locales/landing/landing_en.json";
import footer_es from "./locales/footer/footer_es.json";
import footer_en from "./locales/footer/footer_en.json";

console.log(i18n.language);
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        navbar: es,
        landing: landing_es,
        footer: footer_es,
      },
      en: {
        navbar: en,
        landing: landing_en,
        footer: footer_en,
      },
    },
  });

export default i18n;
