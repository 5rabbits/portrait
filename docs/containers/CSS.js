import React, { PropTypes } from 'react'

const CSS = ({ children }) =>
  <div>
    {children}
  </div>

CSS.propTypes = {
  children: PropTypes.node,
}

CSS.defaultProps = {
  children: null,
}

export default CSS
