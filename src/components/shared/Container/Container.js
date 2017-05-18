import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Container.scss'

/**
 * Wrapper component for the main page contents. It includes some horizontal padding to
 * avoid the content for reaching the screen edges.
 *
 * This component will have some responsive properties in the near future 😁.
 */
export default class Container extends PureComponent {
  static propTypes = {
    /**
     * The contents to be displayed.
     */
    children: PropTypes.node.isRequired,

    /**
     * CSS class assigned to the container.
     */
    className: PropTypes.string,

    /**
     * The size of the container. Use `fluid` for content that should use the full screen width.
     */
    size: PropTypes.oneOf([
      'fluid', 'large', 'normal',
    ]).isRequired,
  }

  static defaultProps = {
    className: null,
    size: 'normal',
  }

  render() {
    const { children, className, size, ...other } = this.props

    return (
      <div
        {...other}
        className={cx(`Container--${size}`, className)}
        >
        {children}
      </div>
    )
  }
}
