import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Spinner.scss'

export default class Spinner extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    ringSize: PropTypes.oneOf([
      PropTypes.number, PropTypes.string,
    ]),
    size: PropTypes.oneOf([
      PropTypes.number, PropTypes.string,
    ]),
  }

  static defaultProps = {
    backgroundColor: null,
    color: null,
    size: null,
    ringSize: null,
  }

  render() {
    const { backgroundColor, color, ringSize, size } = this.props

    return (
      <div
        className={cx('Spinner', {
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
