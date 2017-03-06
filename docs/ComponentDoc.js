/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component, PropTypes } from 'react'
import Playground from 'component-playground'

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
    require.ensure([], () => {
      const path = this.props.path
      const file = this.props.path.split('/').pop()
      const docsContext = require.context('!!docs!../src', true, /^((?!test(\.js|$)).)*$/)
      const context = require.context('../src', true, /^((?!test(\.js|$)).)*\.(js|yml)$/)
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
          <Playground
            codeText={example.code}
            key={index}
            scope={{ React }}
          />,
        )}
      </div>
    )
  }
}
