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
     * Whether the link is disabled or not.
     */
    disabled: PropTypes.bool,

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
    disabled: false,
    href: '#',
    onClick: null,
  }

  handleClick = event => {
    event.preventDefault()

    if (this.props.disabled) {
      return
    }

    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    const { active, children, className, disabled, href, onClick, ...other } = this.props

    return (
      <a
        className={cx('LayoutLink', className, {
          'LayoutLink--active': active,
          'LayoutLink--disabled': disabled,
        })}
        href={href}
        onClick={(href === '#' || disabled) ? this.handleClick : onClick}
        {...other}
        >
        {children}
      </a>
    )
  }
}
