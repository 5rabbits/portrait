import React, { PropTypes } from 'react'

const RoundButton = props =>
  <a href="#" className="btn btn-outline-primary btn-sm block-rounded">
    <i className={`fa fa-fw fa-btn fa-${props.icon}`} />
    {props.label}
  </a>

RoundButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
}

export default RoundButton
