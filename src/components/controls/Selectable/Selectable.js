import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import sortBy from 'lodash/sortBy'
import isNumber from 'lodash/isNumber'
import defaults from 'lodash/defaults'

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
      focusedElement: null,
      isFocused: false,
      options: sortedOptions,
      search: '',
      selectedOption: null,
      sortedOptions,
      value: this.props.value === undefined
        ? this.props.defaultValue
        : this.props.value,
    }

    this.focusableRefs = {}
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  setSearch = search => {
    if (search === this.state.search) {
      return
    }

    this.setState({
      options: this.filterOptions({
        options: this.state.sortedOptions,
        search,
      }),
      focusedElement: null,
      search,
    })
  }

  setValue = value => {
    if (value === this.state.value) {
      return
    }

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
    if (isFocused === this.state.isFocused) {
      return
    }

    this.setState({
      isFocused,
      focusedElement: null,
    })
  }

  setFocusedElement = (id, options = {}) => {
    if (this.state.focusedElement === id) {
      return
    }

    defaults(options, {
      virtual: true,
      scrollToViewport: false,
    })

    if (id == null) {
      this.setState({ focusedElement: null })
      return
    }

    let elementToFocus = id

    if (isNumber(id)) {
      const optionsCount = this.state.options.length

      elementToFocus = id < 0
        ? (optionsCount + id) % optionsCount
        : id % optionsCount
    }

    this.setState({ focusedElement: elementToFocus })

    const node = this.focusableRefs[elementToFocus]

    if (!options.virtual && node.focus) {
      node.focus()
    }

    if (this.overflow && options.scrollToViewport && elementToFocus != null) {
      const viewportInfo = this.isNodeInViewport(node)

      if (!viewportInfo.visibleFromBottom) {
        this.scrollNodeToViewport(node, 'bottom')
      }
      else if (!viewportInfo.visibleFromTop) {
        this.scrollNodeToViewport(node, 'top')
      }
    }
  }

  isNodeInViewport(node) {
    if (!this.overflow.contains(node)) {
      return {
        inViewport: true,
        visibleFromBottom: true,
        visibleFromTop: true,
      }
    }

    const overflow = this.overflow
    const nodeTop = node.offsetTop
    const visibleFromTop = nodeTop >= overflow.scrollTop
    const visibleFromBottom = nodeTop + node.offsetHeight <=
      overflow.scrollTop + overflow.offsetHeight

    return {
      inViewport: visibleFromBottom && visibleFromTop,
      visibleFromBottom,
      visibleFromTop,
    }
  }

  scrollNodeToViewport = (node, fromDirection) => {
    const scrollTop = fromDirection === 'bottom'
      ? node.offsetTop - (this.overflow.offsetHeight - node.offsetHeight)
      : node.offsetTop

    this.overflow.scrollTop = scrollTop
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

  handleOutsideClick = event => {
    if (
      this.state.isFocused &&
      this.container &&
      !this.container.contains(event.target)
      && event.target.parentNode
    ) {
      this.setState({ isFocused: false })
    }
  }

  containerRef = () => (
    container => {
      this.container = container
    }
  )

  focusableRef = id => (
    node => {
      this.focusableRefs[id] = node
    }
  )

  overflowRef = () => (
    overflow => {
      this.overflow = overflow

      if (
        overflow &&
        (!overflow.style.position || overflow.style.position === 'static')
      ) {
        // eslint-disable-next-line no-param-reassign
        overflow.style.position = 'relative'
      }
    }
  )

  render() {
    const { focusedElement, isFocused, options, search, selectedOption, value } = this.state

    return this.props.renderer({
      containerRef: this.containerRef,
      focusableRef: this.focusableRef,
      focusedElement,
      getSearchMatches: this.searchMatches,
      isFocused,
      options,
      overflowRef: this.overflowRef,
      search,
      selectedOption,
      setFocused: this.setFocused,
      setFocusedElement: this.setFocusedElement,
      setSearch: this.setSearch,
      setValue: this.setValue,
      value,
    })
  }
}
