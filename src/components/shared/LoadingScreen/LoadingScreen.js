import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'shared'
import cx from 'classnames'
import './LoadingScreen.scss'

export default class LoadingScreen extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
  }

  static defaultProps = {
    className: null,
    text: null,
  }

  render() {
    const { className, text } = this.props

    return (
      <div
        className={cx('LoadingScreen', className)}
        >
        <Spinner
          size="5em"
          ringSize={4}
        />
        {text &&
          <div className="LoadingScreen__text">
            {text}
          </div>
        }
      </div>
    )
  }
}
