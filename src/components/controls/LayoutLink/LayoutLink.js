import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './LayoutLink.scss'

/**
 * Link used to display layout changes on the main section containers.
 */
export default class LayoutLink extends PureComponent {
  static propTypes = {
    /**
     * Whether the link should be displayed with active/hover styles.
     */
    active: PropTypes.bool,

    /**
     * The link contents to be displayed.
     */
    children: PropTypes.node.isRequired,

    /**
     * CSS class assigned to the container.
     */
    className: PropTypes.string,

    /**
     * Optional link href.
     */
    href: PropTypes.string,

    /**
     * Callback invoked when the user clicks the link.
     */
    onClick: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    className: null,
    href: '#',
    onClick: null,
  }

  handleClick = event => {
    event.preventDefault()

    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    const { active, children, className, href, onClick, ...other } = this.props

    return (
      <a
        className={cx('LayoutLink', className, {
          'LayoutLink--active': active,
        })}
        href={href}
        onClick={href === '#' ? this.handleClick : onClick}
        {...other}
        >
        {children}
      </a>
    )
  }
}
