import React, { PropTypes, Component } from 'react'
import NavigationItem from 'main/NavigationItem'
import childrenPropType from 'propTypes/children'
import cx from 'classnames'

export default class NavigationLinks extends Component {
  static propTypes = {
    children: childrenPropType,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    currentUser: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
    userLinks: childrenPropType,
    hideTexts: PropTypes.bool,
  }

  static childContextTypes = {
    hideNavigationItemText: PropTypes.bool,
  }

  getChildContext() {
    return {
      hideNavigationItemText: this.props.hideTexts,
    }
  }

  render() {
    const { children, currentUser, collapsed, userLinks, className } = this.props

    return (
      <div className={cx('navigation__links', className)}>
        <div className="navigation__main-links">
          {children}
        </div>

        <div className="navigation__user-links">
          {currentUser &&
            <NavigationItem
              hideText={!collapsed}
              label={currentUser.name}
              icon={
                <img
                  alt={currentUser.name}
                  className="navigation__user-image"
                  src={currentUser.image}
                />
              }
              menuAlign="right"
              >
              {userLinks}
            </NavigationItem>
          }
        </div>
      </div>
    )
  }
}
