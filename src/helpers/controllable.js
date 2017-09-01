import React from 'react'

export const getDefaultProps = prop =>
  `default${prop[0].toUpperCase()}${prop.substring(1)}`

export default (propsMapping = {}, instanceMethods = []) => Component =>
  class ControllableComponent extends React.PureComponent {
    controllableHandlers = {}

    constructor(props) {
      super(props)

      const state = {}

      Object.keys(propsMapping).forEach(prop => {
        const defaultProp = getDefaultProps(prop)

        state[prop] = props[prop] === undefined
          ? props[defaultProp]
          : props[prop]

        this.controllableHandlers[prop] = value => {
          this.setState({ [prop]: value })

          if (props[propsMapping[prop]]) {
            props[propsMapping[prop]](value)
          }
        }
      })

      this.state = state

      instanceMethods.forEach(method => {
        this[method] = Component.prototype[method]
      })
    }

    render() {
      const props = {}

      Object.keys(propsMapping).forEach(prop => {
        props[prop] = this.state[prop]
        props[propsMapping[prop]] = this.controllableHandlers[prop]
      })

      return (
        <Component
          {...this.props}
          {...props}
        />
      )
    }
  }
