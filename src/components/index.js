import 'styles/prev/portrait.scss'
import i18n from 'helpers/i18n'
import * as icons from './icons'

export * from './controls'
export * from './elements'
export * from './main'
export * from './shared'
export * from './decorators'
export const Icon = icons

export const setLocale = locale =>
  new Promise(resolve => i18n.changeLanguage(locale, resolve))

/* istanbul ignore if */
if (module.hot) {
  module.hot.accept()
}
