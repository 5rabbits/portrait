/* eslint-disable react/prop-types */

import React from 'react'

export default ({
  cleanDiacritics,
  option,
  search,
  optionSearchTerms,
}) => {
  if (!search.trim()) {
    return option.label
  }

  const terms = optionSearchTerms({ cleanDiacritics, option, search })

  return (
    <div>
      {terms.map(term => (
        term.matches
          ? (
            <span
              className="Select__searchHighlight"
              key={term.fromIndex}
              >
              {term.text}
            </span>
          )
          : term.text
      ))}
    </div>
  )
}
