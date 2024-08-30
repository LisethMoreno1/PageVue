import { createI18n } from 'vue-i18n';
import en from '@/components/locales/en.json';
import es from '@/components/locales/es.json';

const i18n = createI18n({
  legacy: false,
  locale: 'es', 
  fallbackLocale: 'en', 
  messages: {
    en,
    es,
  },
});

export default i18n;
