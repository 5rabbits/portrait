import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default class NavigationItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    containerProps: PropTypes.object,
    component: PropTypes.oneOfType([
      PropTypes.string, PropTypes.func,
    ]),
    isActive: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.node,
  }

  static defaultProps = {
    component: 'a',
    containerProps: {},
  }

  static contextTypes = {
    isNestedNavigationItem: PropTypes.bool,
    hideNavigationItemText: PropTypes.bool,
  }

  static childContextTypes = {
    isNestedNavigationItem: PropTypes.bool,
  }

  getChildContext() {
    return {
      isNestedNavigationItem: true,
    }
  }

  render() {
    const {
      component: Component, isActive, icon, label, children, containerProps,
      ...other
    } = this.props

    const { isNestedNavigationItem, hideNavigationItemText } = this.context
    const isNested = isNestedNavigationItem || false
    const isDropdown = children != null

    return (
      <div
        {...containerProps}
        className={classNames('navigation-item', containerProps.className, {
          active: isActive,
          dropdown: isDropdown,
          'navigation-item--top-level': !isNested,
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

          {!hideNavigationItemText && label}

          {isDropdown &&
            <span className="caret navigation-item__caret" />
          }
        </Component>

        {isDropdown &&
          <ul className="dropdown-menu">
            {children}
          </ul>
        }
      </div>
    )
  }
}
