import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)

  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {

        }
      },


      en: {
        translation: {

        }
      },
    }
  });

export default i18n;
