import React, { Component, PropTypes, Children } from 'react'

export default class FixedWidth extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    width: null,
  }

  componentDidMount() {
    this.refreshWidth()
  }

  componentWillUpdate() {
    if (this.updatingWidth) {
      return
    }

    if (this.state.width !== null) {
      this.setState({ width: null })
    }
  }

  componentDidUpdate() {
    if (this.updatingWidth) {
      this.updatingWidth = false
      return
    }

    this.refreshTimeout = setTimeout(this.refreshWidth)
  }

  componentWillUnmount() {
    clearTimeout(this.refreshTimeout)
  }

  updatingWidth = false

  refreshWidth = () => {
    this.updatingWidth = true
    this.setState({ width: this.child.getBoundingClientRect().width })
  }

  childRef = child => {
    this.child = child
  }

  render() {
    const child = Children.only(this.props.children)

    return React.cloneElement(child, {
      ref: this.childRef,
      style: Object.assign((child.props.style || {}), {
        width: this.state.width,
      }),
    })
  }
}
