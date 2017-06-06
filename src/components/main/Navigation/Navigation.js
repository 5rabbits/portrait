import React from 'react'
import PropTypes from 'prop-types'
import childrenPropType from 'propTypes/children'
import classNames from 'classnames'

/**
 * Creates a navigation bar.
 */
const Navigation = props =>
  <div
    className={classNames('navbar', 'navbar-fixed-top',
      `navbar-${props.theme}`, 'container-scroll', props.className,
    )}
    >
    <div className="container-max">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" />
        </button>
        <button type="button" className="navbar-toggle pull-right" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-search" />
        </button>
        {props.brand &&
          <div className="navbar-brand">
            {props.brand}
          </div>
        }
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul
          className={classNames('nav navbar-nav', 'scroll-inline', {
            'navbar-nav--align-left': props.align === 'left',
          })}
          >
          {props.children}
        </ul>
        {props.navigationOptions}
      </div>
    </div>
  </div>

Navigation.propTypes = {
  /**
   * Main links alignment.
   */
  align: PropTypes.oneOf(['left', 'center']).isRequired,

  /**
   * Product name or logo.
   */
  brand: PropTypes.node,

  /**
   * One or more NavigationItem that represents the main links.
   */
  children: childrenPropType,

  /**
   * `className` for the outermost wrapper.
   */
  className: PropTypes.string,

  /**
   * Right navbar sections contents.
   */
  navigationOptions: childrenPropType,

  /**
   * Visual theme.
   */
  theme: PropTypes.oneOf(['default', 'inverse']).isRequired,
}

Navigation.defaultProps = {
  align: 'center',
  brand: null,
  children: null,
  className: null,
  navigationOptions: null,
  theme: 'default',
}

export default Navigation
