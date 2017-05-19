import React from 'react'
import PropTypes from 'prop-types'

const Examples = ({ children }) =>
  <div className="example">
    {children}
  </div>

Examples.propTypes = {
  children: PropTypes.node,
}

Examples.defaultProps = {
  children: null,
}

export default Examples
