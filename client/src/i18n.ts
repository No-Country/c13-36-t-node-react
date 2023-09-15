import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/navbar/en.json";
import es from "./locales/navbar/es.json";
import landing_es from "./locales/landing/landing_es.json";
import landing_en from "./locales/landing/landing_en.json";
import footer_es from "./locales/footer/footer_es.json";
import footer_en from "./locales/footer/footer_en.json";
import login_es from "./locales/login/login_es.json";
import login_en from "./locales/login/login_en.json";
import menu_es from "./locales/menu/menu_es.json";
import menu_en from "./locales/menu/menu_en.json";
import reset_es from "./locales/reset/reset_es.json";
import reset_en from "./locales/reset/reset_en.json";
import create_es from "./locales/create/create_es.json";
import create_en from "./locales/create/create_en.json";
import petform_es from "./locales/petform/petform_es.json";
import petform_en from "./locales/petform/petform_en.json";
import match_es from "./locales/match/match_es.json";
import match_en from "./locales/match/match_en.json";
import userprofile_es from "./locales/userprofile/userprofile_es.json";
import userprofile_en from "./locales/userprofile/userprofile_en.json";
import notfound_es from "./locales/notfound/notfound_es.json";
import notfound_en from "./locales/notfound/notfound_en.json";
import newpassword_es from "./locales/newpassword/newpassword_es.json";
import newpassword_en from "./locales/newpassword/newpassword_en.json";
import contact_es from "./locales/contact/contact_es.json";
import contact_en from "./locales/contact/contact_en.json";

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
        login: login_es,
        menu: menu_es,
        reset: reset_es,
        create: create_es,
        petform: petform_es,
        match: match_es,
        userprofile: userprofile_es,
        notfound: notfound_es,
        newpassword: newpassword_es,
        contact: contact_es,
      },
      en: {
        navbar: en,
        landing: landing_en,
        footer: footer_en,
        login: login_en,
        menu: menu_en,
        reset: reset_en,
        create: create_en,
        petform: petform_en,
        match: match_en,
        userprofile: userprofile_en,
        notfound: notfound_en,
        newpassword: newpassword_en,
        contact: contact_en,
      },
    },
  });

export default i18n;
