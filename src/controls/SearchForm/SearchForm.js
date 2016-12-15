import React from 'react'

const SearchForm = props =>
  <div className="form-group has-feedback mb-nn">
    <input
      type="text"
      className="form-control block-rounded input-max-medium"
      placeholder={props.placeholder}
    />

    <span className="fa fa-search form-control-feedback" aria-hidden="true" />
    <span className="sr-only">(success)</span>
  </div>

export default SearchForm
