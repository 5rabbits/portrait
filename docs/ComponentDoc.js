/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component, PropTypes } from 'react'

export default class ComponentDoc extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  state = {
    docs: null,
  }

  componentWillMount() {
    require.ensure([], () => {
      const context = require.context('!!docs!../src', true, /^((?!test(\.js|$)|\.scss$).)*$/)

      this.setState({ docs: context(`./${this.props.path}`) })
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.path}</h2>
        {this.state.docs &&
          <pre>{JSON.stringify(this.state.docs, null, 2)}</pre>
        }
      </div>
    )
  }
}
