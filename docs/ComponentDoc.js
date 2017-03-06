/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component, PropTypes } from 'react'

export default class ComponentDoc extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  state = {
    component: null,
    docs: null,
  }

  componentWillMount() {
    require.ensure([], () => {
      const docsContext = require.context('!!docs!../src', true, /^((?!test(\.js|$)).)*\.js$/)
      const componentContext = require.context('../src', true, /^((?!test(\.js|$)).)*\.js$/)

      this.setState({
        component: componentContext(`./${this.props.path}.js`),
        docs: docsContext(`./${this.props.path}.js`),
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
