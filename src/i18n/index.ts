import { createI18n } from 'vue-i18n';
import transEn from '@/translations/en.json';
import transFr from '@/translations/fr.json';

const i18n = createI18n({
    warnHtmlMessage: false,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: transEn,
        fr: transFr
    }
});

export default i18n;