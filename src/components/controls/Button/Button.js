import React, { PropTypes } from 'react'

const Button = props =>
  <a href={props.href} className="btn btn-primary">
    {props.label}
  </a>

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
}

export default Button
