/* eslint-disable react/no-find-dom-node */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

/**
 * This component allows to stop the scroll propagation while using the mouse wheel on an
 * element with overflow.
 *
 * **Note:** This behaviour affects the entire child tree.
 */
export default class ScrollLock extends PureComponent {
  static propTypes = {
    /**
     * The element that needs scroll locking.
     */
    children: PropTypes.node.isRequired,
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
    const domNode = event.target.parentNode
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
