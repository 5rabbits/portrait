import React, { PropTypes, Component } from 'react'
import childrenPropType from 'propTypes/children'
import cx from 'classnames'
import responsive from 'helpers/responsive'
import NavigationLinks from './NavigationLinks'

class Navigation extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
    brand: PropTypes.node,
    children: childrenPropType,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'inverse']).isRequired,
    hideTexts: PropTypes.bool,
    collapsed: PropTypes.bool,
    currentUser: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
    userLinks: childrenPropType,
  }

  static defaultProps = {
    align: 'center',
    currentUser: {},
    theme: 'default',
  }

  state = {
    sideVisible: false,
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.collapsed && this.state.sideVisible) {
      this.setState({ sideVisible: false })
    }
  }

  handleToggleClick = () => {
    this.setState({
      sideVisible: !this.state.sideVisible,
    })
  }

  render() {
    const {
      align, brand, children, theme, className, collapsed, currentUser,
      userLinks, hideTexts,
    } = this.props

    return (
      <div
        className={cx(
          'navigation',
          `navigation--${theme}`,
          `navigation--align-${align}`,
          className,
          {
            'navigation--collapsed': collapsed,
            'navigation--side-visible': this.state.sideVisible,
          },
        )}
        >
        <div className="navigation__container">
          <div
            className={cx('navigation__header', {
              'navigation__header--visible': collapsed,
            })}
            >
            <button
              type="button"
              className={cx('navigation__toggle', {
                'navigation__toggle--active': this.state.sideVisible,
              })}
              onClick={this.handleToggleClick}
              >
              <i className="fa fa-bars" />
            </button>

            {brand &&
              <div className="navigation__brand">
                {brand}
              </div>
            }
          </div>

          <NavigationLinks
            className={cx({
              'navigation__links--hidden': collapsed,
            })}
            currentUser={currentUser}
            hideTexts={hideTexts}
            userLinks={userLinks}
            >
            {children}
          </NavigationLinks>

          {collapsed &&
            <NavigationLinks
              className="navigation__links-side"
              currentUser={currentUser}
              collapsed={collapsed}
              userLinks={userLinks}
              >
              {children}
            </NavigationLinks>
          }
        </div>
      </div>
    )
  }
}

const rules = () => ({
  hideTexts: '(max-width: 991px)',
  collapsed: '(max-width: 767px)',
})

export default responsive(rules)(Navigation)
