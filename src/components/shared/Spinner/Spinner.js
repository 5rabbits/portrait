import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Spinner.scss'

/**
 * A spinner to represent a "busy" state in a consistent way.
 */
export default class Spinner extends PureComponent {
  static propTypes = {
    /**
     * Background color of the spinner ring.
     */
    backgroundColor: PropTypes.string,

    /**
     * CSS class assigned to the spinner.
     */
    className: PropTypes.string,

    /**
     * Active color of the spinner ring.
     */
    color: PropTypes.string,

    /**
     * The ring size. By default is 10% of the size.
     */
    ringSize: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string,
    ]),

    /**
     * The spinner diameter. By default is the font size of the container.
     */
    size: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string,
    ]),
  }

  static defaultProps = {
    backgroundColor: null,
    className: null,
    color: null,
    size: null,
    ringSize: null,
  }

  render() {
    const { backgroundColor, className, color, ringSize, size } = this.props

    return (
      <div
        className={cx('Spinner', className, {
          'Spinner--force-color': backgroundColor && !color,
        })}
        style={{
          height: size,
          width: size,
          borderColor: backgroundColor,
          borderLeftColor: color,
          borderWidth: ringSize,
        }}
      />
    )
  }
}
