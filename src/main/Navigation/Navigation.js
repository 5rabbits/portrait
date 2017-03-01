import React, { PropTypes } from 'react'
import childrenPropType from 'propTypes/children'
import classNames from 'classnames'

const Navigation = props =>
  <div className={`navbar navbar-fixed-top navbar-${props.theme}`}>
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
          className={classNames('nav navbar-nav', {
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
  align: PropTypes.oneOf(['left', 'center']).isRequired,
  brand: PropTypes.node,
  children: childrenPropType,
  navigationOptions: childrenPropType,
  theme: PropTypes.oneOf(['default', 'inverse']).isRequired,
}

Navigation.defaultProps = {
  align: 'center',
  theme: 'default',
}

export default Navigation
