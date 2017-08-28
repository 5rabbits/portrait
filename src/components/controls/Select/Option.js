/* eslint-disable */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import cx from 'classnames'

export default class Option extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    focused: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    option: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }).isRequired,
    optionRef: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    style: PropTypes.object,
  }

  static defaultProps = {
    color: undefined,
    focused: false,
    selected: false,
    style: {},
  }

  handleClick = () => {
    this.props.onClick(this.props.option)
  }

  handleMouseEnter = () => {
    this.props.onMouseEnter(this.props.option)
  }

  optionRef = node => {
    this.props.optionRef(this.props.option, node)
  }

  render() {
    const { children, color, focused, selected } = this.props
    const style = { ...this.props.style }

    if (selected && color) {
      style.backgroundColor = color
    }
    else if (focused && color) {
      style.backgroundColor = tinycolor(color).lighten(35).toHexString()
    }

    if (style.backgroundColor) {
      style.color = tinycolor.mostReadable(style.backgroundColor, ['#697D91', '#FFF'])
    }

    return (
      <div
        className={cx('Select__option', {
          'Select__option--focused': focused,
        })}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        ref={this.optionRef}
        style={style}
        >
        <div className="Select__option__text">
          {children}
        </div>
        {selected &&
          <div className="Select__option__icon">
            <svg viewBox="0 0 400 400">
              <path d="M397.692 58.953l-52.8-41.645c-1.636-1.346-3.656-2.308-5.964-2.308-2.31 0-4.425.962-6.06 2.404l-192.065 246.79s-75.5-72.613-77.615-74.73c-2.116-2.115-4.905-5.673-9.137-5.673-4.23 0-6.154 2.982-8.366 5.194-1.635 1.73-28.565 30.007-41.837 44.05-.77.865-1.25 1.346-1.923 2.02C.77 236.687 0 238.513 0 240.533c0 2.117.77 3.848 1.924 5.483l2.692 2.5S138.59 377.203 140.803 379.416c2.212 2.212 4.905 5 8.848 5 3.848 0 7.022-4.135 8.85-5.962L398.076 70.686C399.23 69.05 400 67.224 400 65.108c0-2.404-.962-4.424-2.308-6.155z" />
            </svg>
          </div>
        }
      </div>
    )
  }
}
