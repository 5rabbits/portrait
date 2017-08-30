import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'

export default class Selectable extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    renderer: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  state = {
    filtered: this.props.options,
    focusedOptionIndex: null,
    isFocused: false,
    search: '',
    selectedOption: null,
    value: this.props.value === undefined
      ? this.props.defaultValue
      : this.props.value,
  }

  setSearch = search => {
    this.setState({
      filtered: this.filterOptions({
        options: this.props.options,
        search,
      }),
      focusedOptionIndex: null,
      search,
    })
  }

  setValue = value => {
    if (this.props.value === undefined) {
      this.setState({
        selectedOption: value == null
          ? null
          : this.props.options.find(option => option.value === value),
        value,
      })
    }

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  setFocused = isFocused => {
    this.setState({
      isFocused,
      focusedOptionIndex: null,
    })
  }

  setFocusedOptionIndex = index => {
    let normalizedIndex = index

    if (index >= this.state.filtered.length) {
      normalizedIndex = index % this.state.filtered.length
    }
    else if (index < 0) {
      normalizedIndex = (this.state.filtered.length + index) % this.state.filtered.length
    }

    this.setState({ focusedOptionIndex: normalizedIndex })
  }

  filterOptions = ({ options, search }) => {
    if (!search.trim()) {
      return options
    }

    const words = deburr(search.trim()).split(/\s+/)
    const pattern = words.map(word => `(?=.*${word})`).join('')
    const regexp = new RegExp(pattern, 'ig')

    return options.filter(option => regexp.test(deburr(option.label)))
  }

  searchMatches = text => {
    const { search } = this.state

    if (!search) {
      return [{
        text,
        match: false,
        fromIndex: 0,
        toIndex: text.length - 1,
      }]
    }

    const pattern = `(${deburr(search.trim()).split(/\s+/).join('|')})`
    const regexp = new RegExp(pattern, 'ig')
    const terms = []
    let currentIndex = 0

    deburr(text).split(regexp).forEach(term => {
      if (term === '') {
        return
      }

      const fromIndex = currentIndex
      const toIndex = currentIndex + term.length
      const termText = text.substring(fromIndex, toIndex)
      const match = !!term.match(regexp)

      currentIndex = toIndex

      terms.push({
        text: termText,
        match,
        fromIndex,
        toIndex,
      })
    })

    return terms
  }

  render() {
    const { filtered, focusedOptionIndex, isFocused, search, selectedOption, value } = this.state

    return this.props.renderer({
      focusedOptionIndex,
      getSearchMatches: this.searchMatches,
      isFocused,
      options: filtered,
      search,
      selectedOption,
      setFocused: this.setFocused,
      setFocusedOptionIndex: this.setFocusedOptionIndex,
      setSearch: this.setSearch,
      setValue: this.setValue,
      value,
    })
  }
}
