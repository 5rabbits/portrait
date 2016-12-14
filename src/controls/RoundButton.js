import React from 'react'

const RoundButton = props =>
  <a href="#" className="btn btn-outline-primary btn-sm block-rounded">
    <i className={`fa fa-fw fa-btn fa-${props.icon}`} />
    {props.label}
  </a>

export default RoundButton
