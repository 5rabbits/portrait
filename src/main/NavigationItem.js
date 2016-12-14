import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const NavigationItem = props =>
  <li className={classNames({ active: props.isActive })}>
    <Link to={props.href}>
      <i className={`fa mr-xs ${props.icon}`} />
      <span className="hidden-sm">{props.label}</span>
    </Link>
  </li>

export default NavigationItem
