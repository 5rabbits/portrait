export default ({ cleanDiacritics, options, search }) => {
  if (!search.trim()) {
    return options
  }

  const words = cleanDiacritics(search.trim()).split(/\s+/)
  const pattern = words.map(word => `(?=.*${word})`).join('')
  const regexp = new RegExp(pattern, 'ig')

  return options.filter(option => regexp.test(cleanDiacritics(option.label)))
}
