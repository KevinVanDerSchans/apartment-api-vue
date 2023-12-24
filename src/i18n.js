import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
    }
  },

  en: {
    translation: {
    }
  },
}

i18n
  .use(LanguageDetector)

  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
