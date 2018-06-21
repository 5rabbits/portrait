import escapeRegExp from 'lodash/escapeRegExp'

export default ({ cleanDiacritics, option, search }) => {
  const pattern = `(${cleanDiacritics(search.trim())
    .split(/\s+/)
    .map(escapeRegExp)
    .join('|')})`
  const regexp = new RegExp(pattern, 'ig')
  const terms = []
  let currentIndex = 0

  cleanDiacritics(option.label).split(regexp).forEach(term => {
    if (term === '') {
      return
    }

    const fromIndex = currentIndex
    const toIndex = currentIndex + term.length
    const termText = option.label.substring(fromIndex, toIndex)
    const matches = !!term.match(regexp)

    currentIndex = toIndex

    terms.push({
      text: termText,
      matches,
      fromIndex,
      toIndex,
    })
  })

  return terms
}
