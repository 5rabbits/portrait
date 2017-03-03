import React, { PropTypes, Component } from 'react'
import childrenPropType from 'propTypes/children'
import cx from 'classnames'
import responsive from 'helpers/responsive'

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
  }

  static defaultProps = {
    align: 'center',
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
    const { align, brand, children, theme, className, collapsed } = this.props

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
        {brand &&
          <div className="navigation__brand-container">
            <div className="navigation__brand">
              {brand}
            </div>
          </div>
        }

        {!collapsed &&
          <div className="navigation__links">
            {children}
          </div>
        }
      </div>
    )
  }
}

const rules = () => ({
  hideTexts: '(max-width: 1000px)',
  collapsed: '(max-width: 800px)',
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
