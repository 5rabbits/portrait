import React, { PropTypes } from 'react'
import classNames from 'classnames'

const NavigationItem = props => {
  const { component: Component, isActive, icon, label, ...other } = props

  return (
    <li className={classNames({ active: isActive })}>
      <Component {...other}>
        <i className={`fa mr-xs ${icon}`} />
        <span className="hidden-sm">{label}</span>
      </Component>
    </li>
  )
}

NavigationItem.propTypes = {
  component: PropTypes.func,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.element,
}

NavigationItem.defaultProps = {
  component: 'a',
}

export default NavigationItem
