/* eslint-disable jsx-a11y/no-autofocus */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isFunction from 'lodash/isFunction'
import deburr from 'lodash/deburr'
import keyboard from 'utils/keyboard'
import ScrollLock from 'shared/ScrollLock'
import i18n from 'helpers/i18n'
import defaultArrowRenderer from './defaults/arrowRenderer'
import defaultClearOptionRenderer from './defaults/clearOptionRenderer'
import defaultCreateOptionRenderer from './defaults/createOptionRenderer'
import defaultEmptyRenderer from './defaults/emptyRenderer'
import defaultInputPlaceholder from './defaults/inputPlaceholder'
import defaultInputRenderer from './defaults/inputRenderer'
import defaultMenuRenderer from './defaults/menuRenderer'
import defaultNewOptionBuilder from './defaults/newOptionBuilder'
import defaultOptionRenderer from './defaults/optionRenderer'
import defaultOptionSearchTerms from './defaults/optionSearchTerms'
import defaultOptionsFilter from './defaults/optionsFilter'
import defaultPlaceholder from './defaults/placeholder'
import defaultPlaceholderRenderer from './defaults/placeholderRenderer'
import defaultSort from './defaults/sort'
import defaultValueRenderer from './defaults/valueRenderer'
import NEW_VALUE from './newValue'
import './Select.scss'

/**
 * A component to replace native `select` controls.
 *
 * For deep customization, open the source `Select/defaults` folder to see the
 * default implementations as reference.
 */
export default class Select extends PureComponent {
  static propTypes = {
    /**
     * Function that returns the arrow icon the select.
     */
    arrowRenderer: PropTypes.func.isRequired,

    /**
     * Specifies if the select should gain focus automatically or not.
     */
    autoFocus: PropTypes.bool,

    /**
     * Specifies if the user can create options on the fly or not.
     */
    canCreate: PropTypes.bool,

    /**
     * Specifies if the user can clear the select value after a selection as beign made.
     */
    clearable: PropTypes.bool,

    /**
     * Text to be displayed on the clear button, if `clearable`.
     */
    clearText: PropTypes.string,

    /**
     * Value to be assigned when the user clicks the clear button, if `clearable`.
     */
    clearValue: PropTypes.any,

    /**
     * Function that returns the clear button, if `clearable`.
     */
    clearOptionRenderer: PropTypes.func.isRequired,

    /**
     * Text to be displayed as the hint of the create option button, if `canCreate`.
     */
    createOptionLabel: PropTypes.string,

    /**
     * Function that returns the create option button, if `canCreate`.
     */
    createOptionRenderer: PropTypes.func,

    /**
     * A color to theme the options focus and selected styles.
     */
    color: PropTypes.string,

    /**
     * Text to be displayed on a select that initially has a transient option.
     */
    defaultNewOptionLabel: PropTypes.string,

    /**
     * Initial search value for an uncontrolled select.
     */
    defaultValue: PropTypes.any,

    /**
     * Specifies if the select is interactable or not.
     */
    disabled: PropTypes.bool,

    /**
     * Function that returns the view displayed when there are no options to show.
     */
    emptyRenderer: PropTypes.func,

    /**
     * Function or string that represents the placeholder to assign to the search input.
     */
    inputPlaceholder: PropTypes.oneOfType([
      PropTypes.string, PropTypes.func,
    ]),

    /**
     * Function that returns the search input.
     */
    inputRenderer: PropTypes.func.isRequired,

    /**
     * Function that returns the options list.
     */
    menuRenderer: PropTypes.func.isRequired,

    /**
     * Function that returns a new option structure based on what the user wrote.
     */
    newOptionBuilder: PropTypes.func,

    /**
     * Array of options to display in the select.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })).isRequired,

    /**
     * Function that returns a subset of the available options based on the current search.
     */
    optionsFilter: PropTypes.func,

    /**
     * Function that returns the text matches of an option based on the current search, useful
     * for highlighting.
     */
    optionSearchTerms: PropTypes.func,

    /**
     * Invoked when the select loses focus.
     */
    onBlur: PropTypes.func,

    /**
     * Invoked when the selection changes. The first argument is the current value and the
     * second one is the full option object.
     */
    onChange: PropTypes.func,

    /**
     * Invoked when the select gains focus.
     */
    onFocus: PropTypes.func,

    /**
     * Function that returns the view to display an option in the list.
     */
    optionRenderer: PropTypes.func.isRequired,

    /**
     * Function or string that represents the placeholder to assign to select.
     */
    placeholder: PropTypes.oneOfType([
      PropTypes.string, PropTypes.func,
    ]),

    /**
     * Function that returns the select placeholder view.
     */
    placeholderRenderer: PropTypes.func.isRequired,

    /**
     * Specifies if the select should display a search input when the menu is opened.
     */
    searchable: PropTypes.bool,

    /**
     * Function that sorts the options before displaying them.
     */
    sort: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func,
    ]),

    /**
     * Controlled value for the select. Use the `onChange` callback to update
     * the value from the parent component.
     */
    value: PropTypes.any,

    /**
     * Function that returns a view to display the selected option.
     */
    valueRenderer: PropTypes.func.isRequired,
  }

  static defaultProps = {
    arrowRenderer: defaultArrowRenderer,
    autoFocus: false,
    canCreate: false,
    clearable: false,
    clearText: i18n.t('Select.clearText'),
    clearValue: null,
    clearOptionRenderer: defaultClearOptionRenderer,
    createOptionLabel: i18n.t('Select.createOption'),
    createOptionRenderer: defaultCreateOptionRenderer,
    defaultNewOptionLabel: '',
    defaultValue: null,
    disabled: false,
    emptyRenderer: defaultEmptyRenderer,
    inputPlaceholder: defaultInputPlaceholder,
    inputRenderer: defaultInputRenderer,
    menuRenderer: defaultMenuRenderer,
    newOptionBuilder: defaultNewOptionBuilder,
    optionsFilter: defaultOptionsFilter,
    optionSearchTerms: defaultOptionSearchTerms,
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
      newOption = this.props.newOptionBuilder({
        label: this.props.defaultNewOptionLabel,
        value: NEW_VALUE,
      })
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
    const filtered = [
      ...this.props.optionsFilter({
        cleanDiacritics: deburr,
        options,
        search,
      }),
    ]

    if (this.props.clearValue) {
      const index = filtered.findIndex(option =>
        option.value === this.props.clearValue,
      )

      if (index !== -1) {
        filtered.splice(index, 1)
      }
    }

    return filtered
  }

  getSortedOptions = options => {
    const { sort } = this.props

    if (sort === false || !sort) {
      return options
    }

    const callback = sort === true ? defaultSort : sort

    return callback({ cleanDiacritics: deburr, options })
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
      option.value === this.state.value,
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
      if (this.props.onChange) {
        this.props.onChange(value, option)
      }

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
        option.value === selected.value,
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
        else {
          return
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
        this.closeMenu()
        break

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
    }
  }

  handleCreateOptionClick = () => {
    const newOption = this.props.newOptionBuilder({
      label: this.state.input,
      value: NEW_VALUE,
    })
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

      if (this.props.onChange) {
        this.props.onChange(newOption.value, newOption)
      }
    })
  }

  handleClearOptionClick = () => {
    const clearOption = this.state.options.find(option =>
      option.value === this.props.clearValue,
    )

    this.setValue(clearOption)
  }

  handleBottomControlMouseEnter = () => {
    this.setState({ focusedElement: 'bottom-control' })
  }

  isBottomControlVisible() {
    return !!(
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
      optionSearchTerms,
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
            ? valueRenderer({ option: selected })
            : placeholderRenderer({ placeholder: placeholderText })
          }
          {arrowRenderer({ isOpen })}
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
                  optionSearchTerms={optionSearchTerms}
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
