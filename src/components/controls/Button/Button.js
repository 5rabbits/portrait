import React from 'react'
import PropTypes from 'prop-types'

const Button = props =>
  <a href={props.href} className="btn btn-primary">
    {props.label}
  </a>

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
}

Button.defaultProps = {
  href: null,
  label: null,
}

export default Button
