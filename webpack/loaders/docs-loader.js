const docgen = require('react-docgen')

module.exports = function docsLoader(source) {
  this.cacheable && this.cacheable()

  let value = {}

  try {
    value = docgen.parse(source)
  } catch (e) {} // eslint-disable-line no-empty

  return `module.exports = ${JSON.stringify(value, undefined, '\t')}`
}
