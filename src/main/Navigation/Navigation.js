import React, { PropTypes, Component } from 'react'
import childrenPropType from 'propTypes/children'
import cx from 'classnames'
import responsive from 'helpers/responsive'
import NavigationItem from 'main/NavigationItem'

class Navigation extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
    brand: PropTypes.node,
    children: childrenPropType,
    className: PropTypes.string,
    // navigationOptions: childrenPropType,
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

  static childContextTypes = {
    hideNavigationItemText: PropTypes.bool,
  }

  getChildContext() {
    return {
      hideNavigationItemText: this.props.hideTexts,
    }
  }

  componentDidMount() {}

  render() {
    const {
      align, brand, children, theme, className, collapsed, currentUser,
      userLinks,
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
          },
        )}
        >
        <div
          className={cx('navigation__header', {
            'navigation__header--visible': collapsed,
          })}
          >
          <button
            type="button"
            className="navigation__toggle"
            >
            <i className="fa fa-bars" />
          </button>

          {brand &&
            <div className="navigation__brand">
              {brand}
            </div>
          }
        </div>

        <div className="navigation__links">
          {!collapsed && children}
        </div>

        <div className="navigation__side">
          {!collapsed && currentUser &&
            <NavigationItem
              hideText={false}
              label={
                <img
                  alt={currentUser.name}
                  className="navigation__user-image"
                  src={currentUser.image}
                />
              }
              >
              {userLinks}
            </NavigationItem>
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

  // <div
  //   className={classNames('navbar', 'navbar-fixed-top',
  //     `navbar-${props.theme}`, props.className,
  //   )}
  //   >
  //   <div className="container-max">
  //     <div className="navbar-header">
  //       <button type="button" className="navbar-t
  // oggle collapsed pull-left" data-toggle="collapse" d
  // ata-target="#bs-example-navbar-collapse-1" aria-expanded="false">
  //         <span className="sr-only">Toggle navigation</span>
  //         <i className="fa fa-bars" />
  //       </button>
  //       {props.brand &&
  //         <div className="navbar-brand">
  //           {props.brand}
  //         </div>
  //       }
  //     </div>
  //
  //     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  //       <ul
  //         className={classNames('nav navbar-nav', {
  //           'navbar-nav--align-left': props.align === 'left',
  //         })}
  //         >
  //         {props.children}
  //       </ul>
  //       {props.navigationOptions}
  //     </div>
  //   </div>
  // </div>
