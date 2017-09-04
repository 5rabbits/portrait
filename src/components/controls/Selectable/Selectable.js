import { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import sortBy from 'lodash/sortBy'
import isNumber from 'lodash/isNumber'
import controllable from 'helpers/controllable'

@controllable({
  focused: 'onFocusedChange',
  focusedElement: 'onFocusedElementChange',
  search: 'onSearchChange',
  value: 'onChange',
}, ['scrollToFocusedElement'])
export default class Selectable extends PureComponent {
  static propTypes = {
    // Handled by uncontrollable
    /* eslint-disable react/no-unused-prop-types */
    defaultFocused: PropTypes.bool,
    defaultFocusedElement: PropTypes.any,
    defaultSearch: PropTypes.any,
    defaultValue: PropTypes.string,
    /* eslint-enable react/no-unused-prop-types */

    blurOnClickOutside: PropTypes.bool,
    focused: PropTypes.bool.isRequired,
    focusedElement: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onClickOutside: PropTypes.func,
    onFocusedChange: PropTypes.func.isRequired,
    onFocusedElementChange: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    renderer: PropTypes.func.isRequired,
    search: PropTypes.string,
    value: PropTypes.any,
  }

  static defaultProps = {
    blurOnClickOutside: true,
    defaultFocused: false,
    defaultSearch: '',
  }

  constructor(props) {
    super(props)

    const sortedOptions = this.sortOptions(this.props.options)
    let selectedOption

    if (this.props.value != null) {
      selectedOption = sortedOptions.find(option => option.value === this.props.value)
    }

    this.state = {
      focusedElement: this.props.focusedElement,
      options: this.filterOptions({
        options: sortedOptions,
        search: this.props.search,
      }),
      selectedOption,
      sortedOptions,
    }

    this.focusableRefs = {}
  }

  componentDidMount() {
    this.container = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillReceiveProps(nextProps) {
    let sortedOptions = this.state.sortedOptions

    if (this.props.options !== nextProps.options) {
      sortedOptions = this.sortOptions(nextProps.options)
      this.setState({ sortedOptions })
    }

    if (
      this.props.options !== nextProps.options ||
      this.props.search !== nextProps.search
    ) {
      this.setState({
        options: this.filterOptions({
          options: sortedOptions,
          search: nextProps.search,
        }),
      })
    }

    if (this.props.value !== nextProps.value) {
      this.setState({
        selectedOption: nextProps.value == null
          ? null
          : nextProps.options.find(option => option.value === nextProps.value),
      })
    }

    if (
      this.props.search !== nextProps.search ||
      this.props.focused !== nextProps.focused
    ) {
      nextProps.onFocusedElementChange(null)
    }

    if (this.props.focusedElement !== nextProps.focusedElement) {
      let elementToFocus = nextProps.focusedElement

      if (isNumber(nextProps.focusedElement)) {
        const optionsCount = this.state.options.length

        elementToFocus = nextProps.focusedElement < 0
          ? (optionsCount + nextProps.focusedElement) % optionsCount
          : nextProps.focusedElement % optionsCount
      }

      this.setState({ focusedElement: elementToFocus })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  getFocusableElement = id => (
    this.focusableRefs[id]
  )

  getRendererProps = () => {
    const { focused, search, value } = this.props
    const { focusedElement, options, selectedOption } = this.state

    return {
      focusableRef: this.focusableRef,
      focusedElement,
      getSearchMatches: this.searchMatches,
      focused,
      options,
      overflowRef: this.overflowRef,
      search,
      selectedOption,
      setFocused: this.props.onFocusedChange,
      setFocusedElement: this.props.onFocusedElementChange,
      setSearch: this.props.onSearchChange,
      setValue: this.props.onChange,
      scrollToFocusedElement: this.scrollToFocusedElement,
      value,
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

  scrollToFocusedElement = () => {
    requestAnimationFrame(() => {
      const { focusedElement } = this.state
      const node = this.focusableRefs[focusedElement]

      if (this.overflow && focusedElement != null) {
        const viewportInfo = this.isNodeInViewport(node)

        if (!viewportInfo.visibleFromBottom) {
          this.scrollNodeToViewport(node, 'bottom')
        }
        else if (!viewportInfo.visibleFromTop) {
          this.scrollNodeToViewport(node, 'top')
        }
      }
    })
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
    const { search } = this.props

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
    const isOutside = (
      this.container &&
      this.container !== event.target &&
      !this.container.contains(event.target) &&
      event.target.parentNode
    )

    if (isOutside && this.props.blurOnClickOutside && this.props.focused) {
      this.props.onFocusedChange(false)
    }

    if (isOutside && this.props.onClickOutside) {
      this.props.onClickOutside(this.getRendererProps())
    }
  }

  focusableRef = id => node => {
    this.focusableRefs[id] = node
  }

  overflowRef = () => overflow => {
    this.overflow = overflow

    if (overflow && (!overflow.style.position || overflow.style.position === 'static')) {
      overflow.style.position = 'relative' // eslint-disable-line no-param-reassign
    }
  }

  render() {
    return this.props.renderer(this.getRendererProps())
  }
}
