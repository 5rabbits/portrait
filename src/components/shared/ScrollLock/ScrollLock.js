/* eslint-disable react/no-find-dom-node */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

/**
 * This component allows to stop the scroll propagation while using the mouse wheel on an
 * element with overflow.
 */
export default class ScrollLock extends PureComponent {
  static propTypes = {
    /**
     * The element that needs scroll locking. You can use the `selector` prop to change the
     * target to a nested element.
     */
    children: PropTypes.node.isRequired,

    /**
     * A [query](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector) for the
     * element that needs scroll locking.
     *
     * If `null`, the direct children of ScrollLock will be used as the target element.
     */
    selector: PropTypes.string,
  }

  static defaultProps = {
    selector: null,
  }

  componentDidMount() {
    this.toggleLock(true)
  }

  componentWillUpdate() {
    this.toggleLock(false)
  }

  componentDidUpdate() {
    this.toggleLock(true)
  }

  componentWillUnmount() {
    this.toggleLock(false)
  }

  onScrollHandler = (event) => {
    let domNode = ReactDOM.findDOMNode(this)

    if (this.props.selector) {
      domNode = domNode.querySelector(this.props.selector)
    }

    if (!domNode) {
      return true
    }

    const { scrollTop, scrollHeight, clientHeight } = this.getNodeMeasures(domNode)
    const wheelDelta = event.deltaY
    const isDeltaPositive = wheelDelta > 0

    if (scrollHeight === clientHeight) {
      return true
    }

    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
      domNode.scrollTop = scrollHeight
      return this.cancelScrollEvent(event)
    }
    else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      domNode.scrollTop = 0
      return this.cancelScrollEvent(event)
    }

    return true
  }

  getNodeMeasures = node => ({
    scrollTop: node.scrollTop,
    scrollHeight: node.scrollHeight,
    clientHeight: node.clientHeight,
  })

  cancelScrollEvent = (event) => {
    event.stopImmediatePropagation()
    event.preventDefault()
    event.returnValue = false // eslint-disable-line no-param-reassign

    return false
  }

  toggleLock = lock => {
    const listenerMethod = lock ? 'addEventListener' : 'removeEventListener'
    const domNode = ReactDOM.findDOMNode(this)

    domNode[listenerMethod]('wheel', this.onScrollHandler, false)
  }

  render() {
    return this.props.children
  }
}
