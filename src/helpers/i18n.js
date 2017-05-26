import i18n from 'i18next'
import translations from 'locale'

i18n.init({
  lng: 'en',
  whitelist: ['en', 'es'],
  resources: translations,
  interpolation: {
    prefix: '%{',
    suffix: '}',
  },
})

export default i18n
