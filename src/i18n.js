import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    translation: {
      discover: 'Discover our apartments',
    }
  },
  es: {
    translation: {
      discover: 'Descubre nuestros apartamentos',
    }
  }
}

const i18n = createI18n({

  locale: 'es',
  fallbackLocale: 'es',
  messages,
});

export default i18n;
