import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import tj from "./locales/tj";

i18n.use(initReactI18next).init({

  resources: {
    en,
    tj,
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export default i18n;
