import React from 'react'

const Button = props =>
  <a href={props.href} className="btn btn-primary">
    {props.label}
  </a>

export default Button
