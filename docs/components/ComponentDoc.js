/* eslint-disable react/no-danger */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Example from './Example'
import PropsTable from './PropsTable'
import markdown from '../helpers/markdown'

export default class ComponentDoc extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
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

    const { name } = this.props
    const { source } = module
    let { examples } = module

    if (!examples) {
      examples = []
    }
    else if (!(examples instanceof Array)) {
      examples = [examples]
    }

    return (
      <div>
        <h1>{name}</h1>

        {source.description &&
          <div
            dangerouslySetInnerHTML={{
              __html: markdown.render(source.description),
            }}
          />
        }

        {source.props &&
          <PropsTable props={source.props} />
        }

        {examples.length > 0 &&
          <h2>Examples</h2>
        }

        {examples.map((example, index) =>
          <Example
            key={index} // eslint-disable-line react/no-array-index-key
            componentName={name}
            {...example}
          />,
        )}
      </div>
    )
  }
}
