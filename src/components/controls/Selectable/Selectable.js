import { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import sortBy from 'lodash/sortBy'
import isNumber from 'lodash/isNumber'
import defaults from 'lodash/defaults'
import controllable from 'decorators/controllable'

/**
 * A pattern class to build components that displays selectable options lists. It manages:
 *   - Search.
 *   - Focus.
 *   - Selection.
 *   - Sorting.
 *   - Inner overflow.
 *   - Click outside.
 *   - Controlled/Uncontrolled for every main property (value, search, focused, focusedElement).
 *
 * It doesn't generate any markup, so you can build any kind of UX if you need at least one
 * of the previous features,
 */
@controllable({
  focused: 'onFocusedChange',
  focusedElement: 'onFocusedElementChange',
  search: 'onSearchChange',
  value: 'onChange',
}, [
  'blur',
  'focus',
  'getFocusableNode',
  'getFocusedElement',
  'getSearch',
  'getSelectedOption',
  'getVisibleOptions',
  'getValue',
  'isFocused',
  'scrollToFocusedElement',
  'setFocused',
  'setFocusedElement',
  'setSearch',
  'setValue',
])
export default class Selectable extends PureComponent {
  static propTypes = {
    // Handled by uncontrollable
    /* eslint-disable react/no-unused-prop-types */

    /**
     * Specifies if the control is focused by default.
     */
    defaultFocused: PropTypes.bool,

    /**
     * Default highlighted element.
     */
    defaultFocusedElement: PropTypes.any,

    /**
     * Default search.
     */
    defaultSearch: PropTypes.any,

    /**
     * Default selected value.
     */
    defaultValue: PropTypes.string,

    /* eslint-enable react/no-unused-prop-types */

    /**
     * Specifies if the control should lose focus when clicking outside.
     */
    blurOnClickOutside: PropTypes.bool,

    /**
     * Specifies if the control is focused.
     */
    focused: PropTypes.bool.isRequired,

    /**
     * Specifies a controlled highlighted element.
     */
    focusedElement: PropTypes.any,

    /**
     * Invoked when the selection changes. The first argument is the current value.
     */
    onChange: PropTypes.func.isRequired,

    /**
     * Invoked when the user clicks outside of the control.
     */
    onClickOutside: PropTypes.func,

    /**
     * Invoked when the control focus changes. The first argument specifies if the control
     * is now focused or not.
     */
    onFocusedChange: PropTypes.func.isRequired,

    /**
     * Invoked when the highlighted element changes. The first argument is the focusable id.
     */
    onFocusedElementChange: PropTypes.func.isRequired,

    /**
     * Invoked when the search changes. The first argument is the new search.
     */
    onSearchChange: PropTypes.func.isRequired,

    /**
     * Enables virtual scroll with fixed option height.
     */
    optionHeight: PropTypes.number,

    /**
     * An array of available options.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })).isRequired,

    /**
     * The markup renderer. This function receives an object with this properties:
     *
     * - allOptions: Sorted options without filtering.
     * - focusableRef(id): Allows to define focusable elements.
     * - focusedElement: The current focusable id.
     * - getSearchMatches(text): Returns text matching info for the current search. Useful to
     *   highlight search results.
     * - focused: Specifies if the control is focused or not.
     * - options: The visible and sorted options array.
     * - overflowRef(): Allows to define the inner scrollable area, if needed.
     * - search: The current search.
     * - selectedOption: The current selected option, if any.
     * - setFocused(focused): Changes the control focused state.
     * - setFocusedElement(id, { virtual: true }): Allows to change the highlighted element. It
     *   will attempt a real focus if `{ virtual: false }`.
     * - setSearch(search): Changes the current search.
     * - setValue(value): Changes the current value.
     * - scrollToFocusedElement(): If the overflow container is defined, changes its scroll
     *   to keep the current focused element in the viewport.
     * - value: The current value.
     */
    renderer: PropTypes.func.isRequired,

    /**
     * Specifies a controlled search.
     */
    search: PropTypes.string,

    /**
     * Specifies a controlled value.
     */
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

  setFocusedElement = (id, options = {}) => {
    defaults(options, {
      virtual: true,
    })

    this.props.onFocusedElementChange(id)

    if (!options.virtual) {
      const node = this.getFocusableNode(id)

      if (node.focus) {
        node.focus()
      }
    }
  }

  getFocusedElement = () => (
    this.state.focusedElement
  )

  setFocused = focused => {
    this.props.onFocusedChange(focused)
  }

  setSearch = search => {
    this.props.onSearchChange(search)
  }

  getSearch = () => (
    this.props.search
  )

  setValue = value => {
    this.props.onChange(value)
  }

  getValue = () => (
    this.props.value
  )

  getSelectedOption = () => (
    this.state.selectedOption
  )

  getVisibleOptions = () => (
    this.state.options
  )

  getFocusableNode = id => (
    this.focusableRefs[id]
  )

  getSearchMatches = text => {
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

  getOptionsInViewport = options => {
    if (!this.isVirtualized()) {
      return options
    }

    const { optionHeight } = this.props
    const overflowHeight = this.overflowHeight
    const totalHeight = options.length * optionHeight
    const fromIndex = Math.floor(this.overflow.scrollTop / optionHeight)
    const toIndex = fromIndex + Math.ceil(overflowHeight / optionHeight)

    this.spacer.style.height = `${totalHeight}px`

    return options.slice(fromIndex, toIndex)
  }

  getOptionStyles = option => {
    if (!this.isVirtualized()) {
      return {}
    }

    const { optionHeight } = this.props
    const index = this.state.options.indexOf(option)

    return {
      position: 'absolute',
      top: optionHeight * index,
      right: 0,
      left: 0,
      height: optionHeight,
    }
  }

  getRendererProps = () => {
    const { focused, search, value } = this.props
    const { focusedElement, options, selectedOption, sortedOptions } = this.state

    return {
      allOptions: sortedOptions,
      focusableRef: this.focusableRef,
      focusedElement,
      focused,
      getSearchMatches: this.getSearchMatches,
      getOptionStyles: this.getOptionStyles,
      handleOverflowScroll: this.handleOverflowScroll,
      options: this.getOptionsInViewport(options),
      overflowRef: this.overflowRef,
      search,
      selectedOption,
      setFocused: this.setFocused,
      setFocusedElement: this.setFocusedElement,
      setSearch: this.setSearch,
      setValue: this.setValue,
      scrollToFocusedElement: this.scrollToFocusedElement,
      value,
    }
  }

  isVirtualized = () => (
    !!(this.props.optionHeight && this.overflowHeight && this.overflow)
  )

  isFocused = () => (
    this.props.focused
  )

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

  sortOptions = options => (
    sortBy(options, option => deburr(option.label.toLowerCase()))
  )

  focus = () => {
    this.setFocused(true)
  }

  blur = () => {
    this.setFocused(false)
  }

  handleOverflowScroll = () => {
    if (this.isVirtualized()) {
      this.forceUpdate()
    }
  }

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

  overflowRef = overflow => {
    const shouldRender = !this.overflow && overflow

    this.overflow = overflow

    if (overflow) {
      const style = getComputedStyle(overflow)

      if (!style.position || style.position === 'static') {
        overflow.style.position = 'relative' // eslint-disable-line no-param-reassign
      }

      if (this.props.optionHeight) {
        const height = parseInt(style.height, 10)
        const maxHeight = parseInt(style.maxHeight, 10)
        const overflowHeight = height || maxHeight

        if (!overflowHeight) {
          // eslint-disable-next-line no-console
          console.warn('Selectable overflow container should have an explicit height or max-height to virtualize the scroll')
        }

        this.overflowHeight = overflowHeight || 0
      }

      this.spacer = document.createElement('div')
      this.overflow.appendChild(this.spacer)
    }
    else if (this.spacer) {
      this.spacer.parentNode.removeChild(this.spacer)
    }

    if (shouldRender) {
      this.forceUpdate()
    }
  }

  render() {
    return this.props.renderer(this.getRendererProps())
  }
}
