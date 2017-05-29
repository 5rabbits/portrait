import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Spinner.scss'

export default class Spinner extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    ringSize: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string,
    ]),
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
