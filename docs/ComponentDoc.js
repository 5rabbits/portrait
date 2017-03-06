/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component, PropTypes } from 'react'

export default class ComponentDoc extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  state = {
    component: null,
    docs: null,
    examples: [],
  }

  componentWillMount() {
    require.ensure([], () => {
      const path = this.props.path
      const file = this.props.path.split('/').pop()
      const docsContext = require.context('!!docs!../src', true, /^((?!test(\.js|$)).)*$/)
      const context = require.context('../src', true, /^((?!test(\.js|$)).)*\.(js|yml)$/)
      let examples = null

      try {
        examples = context(`./${path}/examples.yml`)
      } catch (error) {} // eslint-disable-line no-empty

      this.setState({
        component: context(`./${path}/${file}.js`),
        docs: docsContext(`./${path}/${file}.js`),
        examples,
      })
    })
  }

  render() {
    const { component, docs } = this.state
    const loaded = docs && component

    if (!loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>{component.displayName}</h1>
        <pre>{JSON.stringify(docs, null, 2)}</pre>
      </div>
    )
  }
}
