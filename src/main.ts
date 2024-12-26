import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import transEn from './translations/en.json'
import transFr from './translations/fr.json'

const i18n = createI18n({
    warnHtmlMessage: false,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: transEn,
        fr: transFr
    }
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
