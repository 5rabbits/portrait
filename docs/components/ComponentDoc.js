import React, { Component, PropTypes } from 'react'
import Example from './Example'

export default class ComponentDoc extends Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
  }

  state = {
    module: null,
  }

  componentWillMount() {
    this.requireInfo(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.getComponent !== nextProps.getComponent) {
      this.setState({ module: null })
      this.requireInfo(nextProps)
    }
  }

  requireInfo = props => {
    props.getComponent(module => {
      this.setState({ module })
    })
  }

  render() {
    const { module } = this.state

    if (!module) {
      return <div>Loading...</div>
    }

    const { component, source, examples } = module

    return (
      <div>
        <h1>{component.displayName}</h1>
        <pre>{JSON.stringify(source, null, 2)}</pre>

        {examples && examples.map((example, index) =>
          <Example
            key={index}
            componentName={component.displayName}
            {...example}
          />,
        )}
      </div>
    )
  }
}
