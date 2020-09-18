import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// .use(Backend)
// .use(LanguageDetector)

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      namespace1: {
        interestHeader: "Choose your interests",
        interests: {
          business: "Business",
          entertainment: "Entertainment",
          health: "Health",
          science: "Science",
          sports: "Sports",
          technology: "Technology",
        },
      },
    },
    es: {
      interestHeader: "Elige tus intereses",
      interests: {
        business: "Los negocios",
        entertainment: "La Entretenimiento",
        health: "La Salud",
        science: "La Ciencia",
        sports: "Los Deportes",
        technology: "La Tecnología",
      },
    },
  },
});

export default i18n;

