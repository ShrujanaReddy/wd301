//i18.ts

import i18n from "i18next";  
import { initReactI18next } from "react-i18next";  
import LanguageDetector from "i18next-browser-languagedetector";  
import de from "./locale/de_DE.json";  
import en from "./locale/en.json";  
import te from "./locale/te_IN.json";
  
i18n  
  .use(LanguageDetector)  
  .use(initReactI18next)  
  .init({  
    resources: {  
      en: { ...en },  
      de: { ...de }, 
      te: { ...te }, 
    },  
    fallbackLng: 'en',
    ns: ['common'],  // Ensure the namespace is included here
    defaultNS: 'common',  // Set the default namespace
    detection: {  
      order: ["path", "localStorage", "htmlTag", "cookie"],  
      caches: ["localStorage", "cookie"], // cache user language on  
    },  
    debug: true,  
  });
