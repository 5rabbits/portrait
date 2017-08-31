import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import sortBy from 'lodash/sortBy'

export default class Selectable extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    renderer: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  constructor(props) {
    super(props)

    const sortedOptions = this.sortOptions(this.props.options)

    this.state = {
      focusedOptionIndex: null,
      isFocused: false,
      options: sortedOptions,
      search: '',
      selectedOption: null,
      sortedOptions,
      value: this.props.value === undefined
        ? this.props.defaultValue
        : this.props.value,
    }
  }

  setSearch = search => {
    this.setState({
      options: this.filterOptions({
        options: this.state.sortedOptions,
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
    if (index == null) {
      this.setState({ focusedOptionIndex: null })
      return
    }

    const optionsCount = this.state.options.length

    this.setState({
      focusedOptionIndex: index < 0
        ? (optionsCount + index) % optionsCount
        : index % optionsCount,
    })
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

  sortOptions = options => (
    sortBy(options, option => deburr(option.label.toLowerCase()))
  )

  render() {
    const { focusedOptionIndex, isFocused, options, search, selectedOption, value } = this.state

    return this.props.renderer({
      focusedOptionIndex,
      getSearchMatches: this.searchMatches,
      isFocused,
      options,
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
