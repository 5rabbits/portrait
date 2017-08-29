/* eslint-disable */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import uniq from 'lodash/uniq'
import sortBy from 'lodash/sortBy'
import isFunction from 'lodash/isFunction'
import deburr from 'lodash/deburr'
import keyboard from 'utils/keyboard'
import ScrollLock from 'shared/ScrollLock'
import DefaultMenuRenderer from './DefaultMenuRenderer'
import './Select.scss'

export const NEW_VALUE = '$NEW_SELECT_VALUE$'

const defaultOptionRenderer = ({ option, search }) => {
  if (search) {
    const words = uniq(deburr(search.trim()).split(/\s+/))
    const pattern = `(${words.join('|')})`
    const regexp = new RegExp(pattern, 'ig')
    let currentIndex = 0

    return (
      <div>
        {deburr(option.label).split(regexp).map((term, index) => {
          const fromIndex = currentIndex
          const toIndex = currentIndex + term.length
          const termText = option.label.substring(fromIndex, toIndex)

          currentIndex = toIndex

          if (regexp.test(term)) {
            return (
              <span
                className="Select__searchHighlight"
                key={index}
                >
                {termText}
              </span>
            )
          }

          return termText
        })}
      </div>
    )
  }

  return option.label
}

const defaultValueRenderer = option =>
  <div className="Select__value">
    {option.label}
  </div>

const defaultPlaceholderRenderer = placeholder =>
  <div className="Select__placeholder">
    {placeholder}
  </div>

const defaultArrowRenderer = isOpen => {
  let arrow

  if (isOpen) {
    arrow = (
      <svg viewBox="0 0 400 400">
        <path d="M396.375 289.11l-2.25-2.627-170-195.727c-5.75-6.63-14.375-10.756-24-10.756s-18.25 4.252-24 10.756L6.25 286.106l-2.875 3.253C1.25 292.485 0 296.237 0 300.24 0 311.12 9.25 320 20.75 320h358.5c11.5 0 20.75-8.88 20.75-19.76 0-4.127-1.375-8.004-3.625-11.13z" />
      </svg>
    )
  }
  else {
    arrow = (
      <svg viewBox="0 0 400 400">
        <path d="M3.625 110.875l2.25 2.625 170 195.625c5.75 6.625 14.375 10.75 24 10.75s18.25-4.25 24-10.75l169.875-195.25 2.875-3.25C398.75 107.5 400 103.75 400 99.75 400 88.875 390.75 80 379.25 80H20.75C9.25 80 0 88.875 0 99.75c0 4.125 1.375 8 3.625 11.125z" />
      </svg>
    )
  }

  return (
    <div className="Select__arrow">
      {arrow}
    </div>
  )
}

const defaultInputRenderer = ({
  canCreate,
  hasResults,
  inputPlaceholder,
  onChange,
  onKeyDown,
  onNewOptionClick,
  value,
}) =>
  <div className="Select__input">
    <input
      autoFocus
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={inputPlaceholder}
      type="text"
      value={value}
    />
    {canCreate && value != null && !hasResults &&
      <button
        className="Select__input__icon Select__input__icon--clickable"
        onClick={onNewOptionClick}
        type="button"
        >
        <svg viewBox="0 0 400 400">
          <path d="M200 0C89.52 0 0 89.52 0 200s89.52 200 200 200 200-89.52 200-200S310.48 0 200 0zm0 383.365c-101.058 0-183.365-82.21-183.365-183.365C16.635 98.846 98.942 16.635 200 16.635S383.365 98.942 383.365 200 301.058 383.365 200 383.365z" />
          <path d="M207.784 77H191.64v115.216H77v16.144h114.64V323h16.144V208.36H323v-16.144H207.784" />
        </svg>
      </button>
    }
    {(!canCreate || value == null || hasResults) &&
      <div className="Select__input__icon">
        <svg viewBox="0 0 400 400">
          <path d="M292.188 243.75c15.625-24.583 24.79-53.75 24.79-85.104C316.98 71.042 246.043 0 158.543 0 70.937 0 0 71.042 0 158.646c0 87.604 70.938 158.646 158.438 158.646 31.77 0 61.354-9.375 86.145-25.417l7.188-5L364.897 400 400 364.27 286.98 251.147l5.207-7.396zM247.29 70c23.645 23.646 36.666 55.104 36.666 88.542 0 33.437-13.02 64.895-36.666 88.54-23.646 23.647-55.105 36.668-88.542 36.668-33.438 0-64.896-13.02-88.542-36.667-23.645-23.645-36.666-55.104-36.666-88.54 0-33.44 13.02-64.897 36.666-88.543 23.646-23.646 55.105-36.667 88.542-36.667 33.438 0 64.896 13.02 88.542 36.667z" />
        </svg>
      </div>
    }
  </div>

const defaultOptionsFilter = (options, search) => {
  if (!search.trim()) {
    return options
  }

  const words = uniq(deburr(search.trim()).split(/\s+/))
  const pattern = words.map(word => `(?=.*${word})`).join('')
  const regexp = new RegExp(pattern, 'i')

  return options.filter(option => regexp.test(deburr(option.label)))
}

const defaultEmptyRenderer = ({ search }) => {
  if (search) {
    return (
      <div className="Select__emptyView">
        No results
      </div>
    )
  }

  return (
    <div className="Select__emptyView">
      No options available
    </div>
  )
}

const defaultCreateOptionRenderer = ({
  createOptionLabel,
  focused,
  onClick,
  onMouseEnter,
  value,
}) =>
  <div
    className={cx('Select__createOption', {
      'Select__createOption--focused': focused,
    })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    >
    <div className="Select__createOption__icon">
      <svg viewBox="0 0 400 400">
        <path d="M200 0C89.52 0 0 89.52 0 200s89.52 200 200 200 200-89.52 200-200S310.48 0 200 0zm0 383.365c-101.058 0-183.365-82.21-183.365-183.365C16.635 98.846 98.942 16.635 200 16.635S383.365 98.942 383.365 200 301.058 383.365 200 383.365z" />
        <path d="M207.784 77H191.64v115.216H77v16.144h114.64V323h16.144V208.36H323v-16.144H207.784" />
      </svg>
    </div>
    <div className="Select__createOption__textWrapper">
      <div className="Select__createOption__label">
        {createOptionLabel}
      </div>
      <div className="Select__createOption__value">
        {value}
      </div>
    </div>
  </div>

const defaultNewOptionBuilder = value => ({
  label: value,
  value: NEW_VALUE,
})

const defaultPlaceholder = ({ canCreate }) => {
  if (canCreate) {
    return 'Select or create an option'
  }

  return 'Select an option'
}

const defaultInputPlaceholder = ({ canCreate }) => {
  if (canCreate) {
    return 'Write to search or create'
  }

  return 'Write to search'
}

const defaultClearOptionRenderer = ({
  clearText,
  focused,
  onClick,
  onMouseEnter,
}) =>
  <div
    className={cx('Select__clearOption', {
      'Select__clearOption--focused': focused,
    })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    >
    {clearText}
  </div>

const defaultSort = options =>
  sortBy(options, option => deburr(option.label.toLowerCase()))

export default class Select extends PureComponent {
  static propTypes = {
    arrowRenderer: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    canCreate: PropTypes.bool,
    clearable: PropTypes.bool,
    clearText: PropTypes.string,
    clearValue: PropTypes.any,
    clearOptionRenderer: PropTypes.func.isRequired,
    createOptionLabel: PropTypes.string,
    createOptionRenderer: PropTypes.func,
    color: PropTypes.string,
    defaultNewOptionLabel: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    emptyRenderer: PropTypes.func,
    inputPlaceholder: PropTypes.oneOfType([
      PropTypes.string, PropTypes.func,
    ]),
    inputRenderer: PropTypes.func.isRequired,
    menuRenderer: PropTypes.func.isRequired,
    newOptionBuilder: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })).isRequired,
    optionsFilter: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    optionRenderer: PropTypes.func.isRequired,
    placeholder: PropTypes.oneOfType([
      PropTypes.string, PropTypes.func,
    ]),
    placeholderRenderer: PropTypes.func.isRequired,
    searchable: PropTypes.bool,
    sort: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func,
    ]),
    value: PropTypes.any,
    valueRenderer: PropTypes.func.isRequired,
  }

  static defaultProps = {
    arrowRenderer: defaultArrowRenderer,
    autoFocus: false,
    canCreate: false,
    clearable: false,
    clearText: 'Leave without value',
    clearValue: null,
    clearOptionRenderer: defaultClearOptionRenderer,
    createOptionLabel: 'Create new option',
    createOptionRenderer: defaultCreateOptionRenderer,
    defaultNewOptionLabel: '',
    defaultValue: null,
    disabled: false,
    emptyRenderer: defaultEmptyRenderer,
    inputPlaceholder: defaultInputPlaceholder,
    inputRenderer: defaultInputRenderer,
    menuRenderer: DefaultMenuRenderer,
    newOptionBuilder: defaultNewOptionBuilder,
    onChange: () => {},
    optionsFilter: defaultOptionsFilter,
    optionRenderer: defaultOptionRenderer,
    placeholder: defaultPlaceholder,
    placeholderRenderer: defaultPlaceholderRenderer,
    searchable: true,
    sort: defaultSort,
    valueRenderer: defaultValueRenderer,
  }

  constructor(props) {
    super(props)

    let newOption
    let options = this.props.options

    if (this.props.value === NEW_VALUE) {
      newOption = this.props.newOptionBuilder(this.props.defaultNewOptionLabel)
      options = [...options, newOption]
    }

    options = this.getSortedOptions(options)

    this.state = {
      filtered: this.getFilteredOptions(options, ''),
      focusedElement: null,
      isFocused: false,
      isOpen: false,
      input: '',
      newOption,
      options,
      value: this.props.value === undefined
        ? this.props.defaultValue
        : this.props.value,
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value })
    }

    if (!this.props.autoFocus && nextProps.autoFocus) {
      this.focus()
    }

    if (this.props.options !== nextProps.options) {
      const options = this.getSortedOptions(nextProps.options)

      this.setState({
        filtered: this.getFilteredOptions(options, this.state.input),
        options,
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  getFilteredOptions(options, search) {
    const filtered = [...this.props.optionsFilter(options, search)]

    if (this.props.clearValue) {
      const index = filtered.findIndex(option =>
        option.value === this.props.clearValue
      )

      if (index !== -1) {
        filtered.splice(index, 1)
      }
    }

    return filtered
  }

  getSortedOptions = options => {
    const { sort } = this.props

    if (sort === false || !sort) {
      return options
    }

    const callback = sort === true ? defaultSort : sort

    return callback(options)
  }

  setFocused(focused) {
    this.setState({ focusedElement: focused }, () => {
      if (focused !== 'bottom-control') {
        const option = this.state.filtered[focused]

        if (option) {
          this.scrollOptionIntoView(option.value)
        }
      }
    })
  }

  getSelectedOption() {
    if (this.state.value == null) {
      return null
    }

    return this.state.options.find(option =>
      option.value === this.state.value
    )
  }

  setSearch(search) {
    const filtered = this.getFilteredOptions(this.state.options, search)

    this.setState({
      input: search,
      filtered,
      focusedElement: filtered.length === 0 && search.trim()
        ? 'bottom-control'
        : null,
    })

    if (this.menu) {
      this.menu.scrollTop = 0
    }
  }

  setValue(option) {
    const newState = {}
    const value = option ? option.value : null

    if (this.props.value === undefined) {
      newState.value = value
    }

    if (this.state.newOption && this.state.newOption !== option) {
      newState.newOption = null
      newState.options = this.getSortedOptions(this.props.options)
    }

    this.setState(newState, () => {
      this.props.onChange(value, option)
      this.closeMenu()
      this.focus()
    })
  }

  optionRefs = {}

  closeMenu() {
    this.setState({ isOpen: false })
    this.setSearch('')
  }

  openMenu() {
    const selected = this.getSelectedOption()
    let index

    if (selected) {
      index = this.state.filtered.findIndex(option =>
        option.value === selected.value
      )
    }

    this.setState({
      focusedElement: index,
      isOpen: true,
    }, () => {
      if (selected) {
        this.scrollOptionIntoView(selected.value, 'top')
      }
    })
  }

  toggleMenu() {
    if (this.state.isOpen) {
      this.closeMenu()
    }
    else {
      this.openMenu()
    }
  }

  blur() {
    if (this.props.onBlur) {
      this.props.onBlur()
    }

    this.setState({ isFocused: false })
  }

  focus() {
    this.control.focus()
  }

  focusNext() {
    const focused = this.state.focusedElement
    const options = this.state.filtered
    const bottomControl = this.isBottomControlVisible()
    let next

    switch (focused) {
      case null:
      case undefined:
        if (options.length === 0 && !bottomControl) {
          return
        }

        next = options.length === 0 ? 'bottom-control' : 0
        break

      case 'bottom-control':
        if (options.length === 0) {
          return
        }

        next = 0
        break

      default:
        if (focused === options.length - 1 && bottomControl) {
          next = 'bottom-control'
        }
        else if (focused === options.length - 1) {
          next = 0
        }
        else {
          next = focused + 1
        }
    }

    this.setFocused(next)
  }

  focusPrev() {
    const focused = this.state.focusedElement
    const options = this.state.filtered
    const bottomControl = this.isBottomControlVisible()
    let prev

    switch (focused) {
      case null:
      case undefined:
        if (bottomControl) {
          prev = 'bottom-control'
        }
        else if (options.length > 0) {
          prev = options.length - 1
        }

        break

      case 'bottom-control':
        if (options.length === 0) {
          return
        }

        prev = options.length - 1

        break

      default:
        if (focused === 0 && bottomControl) {
          prev = 'bottom-control'
        }
        else if (focused === 0) {
          prev = options.length - 1
        }
        else {
          prev = focused - 1
        }
    }

    this.setFocused(prev)
  }

  scrollOptionIntoView(value, position = 'auto') {
    const node = this.optionRefs[value]
    let viewportInfo

    if (!node) {
      return
    }

    switch (position) {
      case 'top':
        this.scrollToOptionFromTop(node)
        break

      case 'bottom':
        this.scrollToOptionFromBottom(node)
        break

      default:
        viewportInfo = this.isOptionInViewport(value)

        if (!viewportInfo.visibleFromBottom) {
          this.scrollToOptionFromBottom(node)
        }
        else if (!viewportInfo.visibleFromTop) {
          this.scrollToOptionFromTop(node)
        }

        break
    }
  }

  scrollToOptionFromBottom = node => {
    this.menu.scrollTop = node.offsetTop - (this.menu.offsetHeight - node.offsetHeight)
  }

  scrollToOptionFromTop = node => {
    this.menu.scrollTop = node.offsetTop
  }

  isOptionInViewport(value) {
    const node = this.optionRefs[value]
    const menu = this.menu

    const nodeTop = node.offsetTop - menu.offsetTop
    const visibleFromTop = nodeTop >= menu.scrollTop
    const visibleFromBottom = nodeTop + node.offsetHeight <= menu.scrollTop + menu.offsetHeight

    return {
      inViewport: visibleFromBottom && visibleFromTop,
      visibleFromBottom,
      visibleFromTop,
    }
  }

  handleOutsideClick = event => {
    if (this.state.isOpen && this.wrapper && !this.wrapper.contains(event.target)) {
      this.closeMenu()
      this.blur()
    }
  }

  handleControlClick = () => {
    this.toggleMenu()
  }

  handleOptionClick = option => {
    this.setValue(option)
  }

  handleOptionMouseEnter = option => {
    const index = this.state.filtered.indexOf(option)

    this.setState({ focusedElement: index })
  }

  handleControlBlur = () => {
    if (this.state.isOpen) {
      return
    }

    this.blur()
  }

  handleControlFocus = () => {
    if (this.state.isFocused) {
      return
    }

    if (this.props.onFocus) {
      this.props.onFocus()
    }

    this.setState({ isFocused: true })
  }

  handleControlKeyDown = event => {
    if (
      event.keyCode !== keyboard.TAB &&
      event.keyCode !== keyboard.ESCAPE &&
      !keyboard.isModifier(event.keyCode)
    ) {
      this.openMenu()
    }
  }

  handleInputChange = event => {
    this.setSearch(event.target.value)
  }

  handleInputKeyDown = event => {
    const { filtered, focusedElement } = this.state

    switch (event.keyCode) {
      case keyboard.ENTER:
        event.preventDefault()

        switch (focusedElement) {
          case null:
            break

          case 'bottom-control':
            if (this.props.canCreate && this.state.input.trim()) {
              this.handleCreateOptionClick()
            }
            else {
              this.handleClearOptionClick()
            }
            break

          default:
            this.setValue(filtered[focusedElement])
            break
        }

        break

      case keyboard.ESCAPE:
      case keyboard.TAB:
        this.closeMenu()
        this.blur()
        break

      case keyboard.ARROW_DOWN:
        event.preventDefault()
        this.focusNext()
        break

      case keyboard.ARROW_UP:
        event.preventDefault()
        this.focusPrev()
        break

      default:
        break
    }
  }

  handleCreateOptionClick = () => {
    const newOption = this.props.newOptionBuilder(this.state.input)
    const options = this.getSortedOptions([...this.props.options, newOption])
    const newState = {
      newOption,
      options,
      filtered: this.getFilteredOptions(options, ''),
    }

    if (this.props.value === undefined) {
      newState.value = newOption.value
    }

    this.setState(newState, () => {
      this.closeMenu()
      this.focus()
      this.props.onChange(newOption.value, newOption)
    })
  }

  handleClearOptionClick = () => {
    const clearOption = this.state.options.find(option =>
      option.value === this.props.clearValue
    )

    this.setValue(clearOption)
  }

  handleBottomControlMouseEnter = () => {
    this.setState({ focusedElement: 'bottom-control' })
  }

  isBottomControlVisible() {
    return (
      (this.props.canCreate && this.state.input.trim()) ||
      this.props.clearable
    )
  }

  controlRef = control => {
    this.control = control
  }

  menuRef = menu => {
    this.menu = menu
  }

  wrapperRef = wrapper => {
    this.wrapper = wrapper
  }

  optionRef = (option, node) => {
    if (node) {
      this.optionRefs[option.value] = node
    }
    else {
      delete this.optionRefs[option.value]
    }
  }

  render() {
    const {
      arrowRenderer,
      autoFocus,
      canCreate,
      clearable,
      clearText,
      clearValue,
      clearOptionRenderer,
      color,
      disabled,
      createOptionLabel,
      createOptionRenderer,
      emptyRenderer,
      inputPlaceholder,
      inputRenderer,
      menuRenderer,
      optionRenderer,
      placeholder,
      placeholderRenderer,
      searchable,
      valueRenderer,
    } = this.props
    const { filtered, focusedElement, input, isFocused, isOpen, value } = this.state
    const selected = this.getSelectedOption()
    const MenuRenderer = menuRenderer

    const placeholderText = isFunction(placeholder)
      ? placeholder({ canCreate })
      : placeholder

    const inputPlaceholderText = isFunction(inputPlaceholder)
      ? inputPlaceholder({ canCreate })
      : inputPlaceholder

    const showCreateOption = canCreate && input.trim()

    return (
      <div
        className={cx('Select', {
          'Select--open': isOpen,
          'Select--disabled': disabled,
          'Select--focused': isFocused,
        })}
        ref={this.wrapperRef}
        >
        <button
          autoFocus={autoFocus}
          className="Select__control"
          disabled={disabled}
          onBlur={this.handleControlBlur}
          onClick={this.handleControlClick}
          onFocus={this.handleControlFocus}
          onKeyDown={this.handleControlKeyDown}
          ref={this.controlRef}
          tabIndex={0}
          type="button"
          >
          {selected
            ? valueRenderer(selected)
            : placeholderRenderer(placeholderText)
          }
          {arrowRenderer(isOpen)}
        </button>
        {isOpen &&
          <div className="Select__dropdown">
            {searchable &&
              inputRenderer({
                canCreate,
                hasResults: filtered.length > 0,
                inputPlaceholder: inputPlaceholderText,
                onChange: this.handleInputChange,
                onKeyDown: this.handleInputKeyDown,
                onNewOptionClick: this.handleCreateOptionClick,
                value: input,
              })
            }
            {filtered.length === 0 &&
              emptyRenderer({ search: input.trim() })
            }
            {filtered.length > 0 &&
              <ScrollLock>
                <MenuRenderer
                  color={color}
                  focusedElement={focusedElement}
                  menuRef={this.menuRef}
                  onOptionClick={this.handleOptionClick}
                  onOptionMouseEnter={this.handleOptionMouseEnter}
                  options={filtered}
                  optionRef={this.optionRef}
                  optionRenderer={optionRenderer}
                  search={input.trim()}
                  value={value}
                />
              </ScrollLock>
            }
            {showCreateOption &&
              createOptionRenderer({
                createOptionLabel,
                focused: focusedElement === 'bottom-control',
                onClick: this.handleCreateOptionClick,
                onMouseEnter: this.handleBottomControlMouseEnter,
                value: input.trim(),
              })
            }

            {!showCreateOption && clearable &&
              clearOptionRenderer({
                clearText,
                clearValue,
                focused: focusedElement === 'bottom-control',
                onClick: this.handleClearOptionClick,
                onMouseEnter: this.handleBottomControlMouseEnter,
              })
            }
          </div>
        }
      </div>
    )
  }
}
