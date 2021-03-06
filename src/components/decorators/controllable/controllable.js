import React from 'react'

export const getDefaultProps = prop =>
  `default${prop[0].toUpperCase()}${prop.substring(1)}`

export default (propsMapping, instanceMethods = []) => Component =>
  class ControllableComponent extends React.PureComponent {
    static WrappedComponent = Component

    controllableHandlers = {}

    constructor(props) {
      super(props)

      const state = {}

      Object.keys(propsMapping).forEach(prop => {
        const defaultPropName = getDefaultProps(prop)
        let defaultValue = props[defaultPropName]

        if (defaultValue === undefined && Component.defaultProps) {
          defaultValue = Component.defaultProps[defaultPropName]
        }

        state[prop] = props[prop] === undefined
          ? defaultValue
          : props[prop]

        this.controllableHandlers[prop] = value => {
          if (this.state[prop] === value) {
            return
          }

          if (props[prop] === undefined) {
            this.setState({ [prop]: value })
          }

          if (props[propsMapping[prop]]) {
            props[propsMapping[prop]](value)
          }
        }
      })

      this.state = state

      instanceMethods.forEach(method => {
        this[method] = (...args) => (
          this.controlled[method](...args)
        )
      })
    }

    componentWillReceiveProps(nextProps) {
      const newState = {}

      Object.keys(propsMapping).forEach(prop => {
        if (this.props[prop] !== nextProps[prop]) {
          newState[prop] = nextProps[prop]
        }
      })

      if (Object.keys(newState).length > 0) {
        this.setState(newState)
      }
    }

    getWrappedInstance() {
      return this.controlled
    }

    controlledRef = controlled => {
      this.controlled = controlled
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
          ref={this.controlledRef}
        />
      )
    }
  }
