/* eslint-disable */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import uniq from 'lodash/uniq'
import Option from './Option'

export default class DefaultMenuRenderer extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    focusedElement: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['bottom-control']),
    ]),
    menuRef: PropTypes.func.isRequired,
    onOptionClick: PropTypes.func.isRequired,
    onOptionMouseEnter: PropTypes.func.isRequired,
    optionRef: PropTypes.func.isRequired,
    optionRenderer: PropTypes.func.isRequired,
    optionSearchTerms: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })).isRequired,
    search: PropTypes.string.isRequired,
    value: PropTypes.any,
  }

  state = {
    fromIndex: null,
    toIndex: null,
  }

  componentDidMount() {
    this.updateViewport()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      this.setState({
        fromIndex: null,
        toIndex: null,
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.options !== prevProps.options) {
      this.updateViewport()
    }
  }

  getOption = index => {
    const {
      color,
      focusedElement,
      onOptionClick,
      onOptionMouseEnter,
      optionRef,
      optionRenderer,
      optionSearchTerms,
      options,
      search,
      value,
    } = this.props
    const option = options[index]

    return (
      <Option
        color={color}
        focused={focusedElement === index}
        key={option.value}
        onClick={onOptionClick}
        onMouseEnter={onOptionMouseEnter}
        option={option}
        optionRef={optionRef}
        selected={value === option.value}
        style={{
          position: 'absolute',
          top: index * 40,
          left: 0,
          width: '100%',
        }}
        >
        {optionRenderer({
          cleanDiacritics: deburr,
          option,
          search,
          optionSearchTerms,
        })}
      </Option>
    )
  }

  handleScroll = () => {
    this.updateViewport()
  }

  updateViewport = () => {
    let fromIndex = Math.floor(this.menu.scrollTop / 40) - 1
    let toIndex = Math.ceil((this.menu.scrollTop + this.menu.offsetHeight) / 40) + 1

    fromIndex = Math.max(0, fromIndex)
    toIndex = Math.min(this.props.options.length, toIndex)

    this.setState({
      fromIndex,
      toIndex,
    })
  }

  menuRef = menu => {
    this.menu = menu
    this.props.menuRef(menu)
  }

  render() {
    const { options, value } = this.props
    const { fromIndex, toIndex } = this.state
    const indices = [0, options.length - 1]

    for (let i = fromIndex; i < toIndex; i += 1) {
      indices.push(i)
    }

    if (value) {
      const selectedIndex = options.findIndex(option => option.value === value)

      if (selectedIndex !== -1) {
        indices.push(selectedIndex)
      }
    }

    return (
      <div
        className="Select__menu"
        onScroll={this.handleScroll}
        ref={this.menuRef}
        >
        <div
          className="Select__innerMenu"
          style={{
            height: options.length * 40,
            position: 'relative',
          }}
          >
          {uniq(indices).map(this.getOption)}
        </div>
      </div>
    )
  }
}
