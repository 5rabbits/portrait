import sortBy from 'lodash/sortBy'

export default ({ cleanDiacritics, options }) =>
  sortBy(options, option => cleanDiacritics(option.label.toLowerCase()))
