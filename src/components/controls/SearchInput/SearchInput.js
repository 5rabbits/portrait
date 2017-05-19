import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './SearchInput.scss'

/**
 * Input field that displays an icon and a clear button, intended to be used as a global search on
 * sections and popovers.
 */
export default class SearchInput extends Component {
  static propTypes = {
    /**
     * CSS class assigned to the input wrapper.
     */
    className: PropTypes.string,

    /**
     * Invoked when the input text changes, either by writing or by clicking the clear button.
     * The first argument is the current text.
     */
    onChange: PropTypes.func,

    /**
     * Invoked when the user clicks on the clear button.
     */
    onClear: PropTypes.func,

    /**
     * Invoked when the user presses the ENTER key. The first argument is the current text.
     */
    onSubmit: PropTypes.func,

    /**
     * Graphical theme of the input. `default` is intended for global section search and
     * `alternate` for popovers.
     */
    theme: PropTypes.oneOf(['default', 'alternate']).isRequired,
  }

  static defaultProps = {
    className: null,
    onChange: null,
    onClear: null,
    onSubmit: null,
    theme: 'default',
  }

  state = {
    value: '',
  }

  setValue = value => {
    this.setState({ value })

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  focus = () => {
    this.input.focus()
  }

  inputRef = input => {
    this.input = input
  }

  handleClearClick = event => {
    event.preventDefault()
    this.setValue('')
    this.focus()

    if (this.props.onClear) {
      this.props.onClear()
    }
  }

  handleChange = event => {
    this.setValue(event.target.value)
  }

  handleKeyDown = event => {
    if (this.props.onSubmit && event.key === 'Enter') {
      this.props.onSubmit(this.state.value)
    }
  }

  render() {
    const { className, theme, ...other } = this.props
    const { value } = this.state

    delete other.onClear
    delete other.onSubmit

    return (
      <div
        className={cx('SearchInput', className, `SearchInput--${theme}`, {
          'SearchInput--with-value': value,
        })}
        >
        <i className="fa fa-search SearchInput__icon" />

        <input
          {...other}
          className={cx('form-control', 'SearchInput__input')}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          ref={this.inputRef}
          type="text"
          value={value}
        />

        <a
          className="SearchInput__clear"
          href="#"
          onClick={this.handleClearClick}
          >
          &times;
        </a>
      </div>
    )
  }
}
