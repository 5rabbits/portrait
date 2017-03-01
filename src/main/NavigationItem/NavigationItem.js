import React, { PropTypes } from 'react'
import classNames from 'classnames'

const NavigationItem = props => {
  const { component: Component, isActive, icon, label, children, ...other } = props
  const isDropdown = children != null

  return (
    <li
      className={classNames({
        active: isActive,
        dropdown: isDropdown,
      })}
      >
      <Component
        {...other}
        data-toggle={isDropdown ? 'dropdown' : undefined}
        >
        {icon &&
          <span className="mr-xs navigation-item__icon">
            {icon}
          </span>
        }

        <span className="hidden-sm">
          {label}
        </span>

        {isDropdown &&
          <span className="caret navigation-item__caret" />
        }
      </Component>

      {isDropdown &&
        <ul className="dropdown-menu">
          {children}
        </ul>
      }
    </li>
  )
}

NavigationItem.propTypes = {
  children: PropTypes.node,
  component: PropTypes.node,
  isActive: PropTypes.bool,
  icon: PropTypes.node,
  label: PropTypes.string,
}

NavigationItem.defaultProps = {
  component: 'a',
}

export default NavigationItem
