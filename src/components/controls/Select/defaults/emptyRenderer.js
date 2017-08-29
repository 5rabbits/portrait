/* eslint-disable react/prop-types */

import React from 'react'

export default ({ search }) =>
  <div className="Select__emptyView">
    {search ? 'No results' : 'No options available'}
  </div>
