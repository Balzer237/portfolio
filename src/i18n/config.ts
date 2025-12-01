import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "localStorage", "navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
