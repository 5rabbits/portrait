import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const NavigationItem = () =>
  <li className={classNames({ active: this.props.isActive })}>
    <Link to={this.props.href}>
      <i className={`fa mr-xs ${this.props.icon}`} />
      <span className="hidden-sm">{this.props.label}</span>
    </Link>
  </li>

export default NavigationItem
