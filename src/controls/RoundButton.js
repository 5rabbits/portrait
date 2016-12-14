import React from 'react'

const RoundButton = () =>
  <a href="#" className="btn btn-outline-primary btn-sm block-rounded">
    <i className={`fa fa-fw fa-btn fa-${this.props.icon}`} />
    {this.props.label}
  </a>

export default RoundButton
