/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component, PropTypes } from 'react'
import Example from './Example'

export default class ComponentDoc extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  state = {
    loaded: false,
    component: null,
    docs: null,
    examples: null,
  }

  componentWillMount() {
    this.requireInfo(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.requireInfo(nextProps)
  }

  requireInfo = props => {
    this.setState({
      loaded: false,
    })

    require.ensure([], () => {
      const path = props.path
      const file = props.path.split('/').pop()
      const docsContext = require.context('!!docs!../../src', true, /^((?!test(\.js|$)).)*$/)
      const context = require.context('../../src', true, /^((?!test(\.js|$)).)*\.(js|yml)$/)
      let examples = []

      try {
        examples = context(`./${path}/examples.yml`)

        if (!(examples instanceof Array)) {
          examples = [examples]
        }
      } catch (error) {} // eslint-disable-line no-empty

      this.setState({
        loaded: true,
        component: context(`./${path}/${file}.js`),
        docs: docsContext(`./${path}/${file}.js`),
        examples,
      })
    })
  }

  render() {
    const { component, docs, examples, loaded } = this.state

    if (!loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>{component.displayName}</h1>
        <pre>{JSON.stringify(docs, null, 2)}</pre>

        {examples.map((example, index) =>
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
