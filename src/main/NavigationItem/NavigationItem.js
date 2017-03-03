import React, { PropTypes } from 'react'
import cx from 'classnames'
import FixedWidth from 'helpers/FixedWidth'

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

  state = {
    open: false,
  }

  getChildContext() {
    return {
      isNestedNavigationItem: true,
    }
  }

  toggleDropdown = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const {
      component: Component, isActive, icon, label, children, containerProps,
      ...other
    } = this.props

    const { open } = this.state
    const { isNestedNavigationItem, hideNavigationItemText } = this.context
    const isNested = isNestedNavigationItem || false
    const isDropdown = children != null
    const withText = !hideNavigationItemText || isNested

    return (
      <div
        {...containerProps}
        className={cx('navigation-item', containerProps.className, {
          'navigation-item--active': isActive,
          'navigation-item--top-level': !isNested,
          'navigation-item--with-text': withText,
          'navigation-item--without-text': !withText,
          'navigation-item--open': open,
          dropdown: isDropdown,
        })}
        >
        <Component
          {...other}
          onClick={isDropdown ? this.toggleDropdown : undefined}
          >
          {icon &&
            <span className="navigation-item__icon">
              {icon}
            </span>
          }

          <FixedWidth>
            <span className="navigation-item__label">
              {label}
            </span>
          </FixedWidth>

          {isDropdown &&
            <span className="caret navigation-item__caret" />
          }
        </Component>

        {isDropdown &&
          <div
            className={cx('navigation-item__dropdown', {
              'navigation-item__dropdown--visible': open,
            })}
            >
            {children}
          </div>
        }
      </div>
    )
  }
}
