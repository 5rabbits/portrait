import React, { PropTypes } from 'react'
import classNames from 'classnames'

const NavigationItem = props => {
  const { component: Component, isActive, icon, label, ...other } = props

  return (
    <li className={classNames({ active: isActive })}>
      <Component {...other}>
        {icon &&
          <span className="mr-xs navigation-item__icon">
            {icon}
          </span>
        }
        <span className="hidden-sm">
          {label}
        </span>
      </Component>
    </li>
  )
}

NavigationItem.propTypes = {
  component: PropTypes.node,
  isActive: PropTypes.bool,
  icon: PropTypes.node,
  label: PropTypes.string,
}

NavigationItem.defaultProps = {
  component: 'a',
}

export default NavigationItem
