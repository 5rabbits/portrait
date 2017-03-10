import React, { PropTypes } from 'react'

const Examples = ({ children }) =>
  <div className="example">
    {children}
  </div>

Examples.propTypes = {
  children: PropTypes.node,
}

export default Examples
