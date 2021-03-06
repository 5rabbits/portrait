import escapeRegExp from 'lodash/escapeRegExp'

export default ({ cleanDiacritics, options, search }) => {
  if (!search.trim()) {
    return options
  }

  const words = cleanDiacritics(search.trim()).split(/\s+/)
  const pattern = words.map(word => `(?=.*${escapeRegExp(word)})`).join('')
  const regexp = new RegExp(pattern, 'ig')

  return options.filter(option => regexp.test(cleanDiacritics(option.label)))
}
