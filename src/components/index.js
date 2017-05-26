import 'styles/prev/portrait.scss'
import i18n from 'helpers/i18n'

export * from './controls'
export * from './elements'
export * from './main'
export * from './shared'

export const setLocale = locale =>
  new Promise(resolve => i18n.changeLanguage(locale, resolve))

if (module.hot) {
  module.hot.accept()
}
