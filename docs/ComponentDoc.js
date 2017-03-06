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
    require(`!!bundle!docs!../src/${this.props.path}.js`)(docs => {
      this.setState({ docs })
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
