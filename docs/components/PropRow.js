/* eslint-disable react/no-danger */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import markdown from '../helpers/markdown'

export default class PropRow extends Component {
  static propTypes = {
    definition: PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string,
        raw: PropTypes.string,
        value: PropTypes.oneOfType([
          // For shapes
          PropTypes.objectOf(PropTypes.shape({
            name: PropTypes.string,
            required: PropTypes.bool,
            value: PropTypes.object,
          })),

          // For anything else
          PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.any,
            name: PropTypes.string,
            computed: PropTypes.bool,
          })),
        ]),
      }),
      required: PropTypes.bool,
      description: PropTypes.description,
      defaultValue: PropTypes.shape({
        value: PropTypes.string,
        computed: PropTypes.bool,
      }),
    }).isRequired,
    name: PropTypes.string.isRequired,
  }

  getType = (type) => {
    switch (type.name) {
      case 'custom':
        return `<i>${type.raw}</i>`

      case 'enum':
        return type.value.map(value => `<code>${value.value}</code>`).join(' or ')

      case 'union':
        return type.value.map(value => this.getType(value)).join(' or ')

      case 'arrayOf':
        return `array(${this.getType(type.value)})`

      default:
        return type.name
    }
  }

  getDefaultValue = () => {
    const { definition } = this.props

    if (!definition.defaultValue) {
      return null
    }

    return definition.defaultValue.value
  }

  render() {
    const { name, definition } = this.props
    const defaultValue = this.getDefaultValue()

    return (
      <tr>
        <td>{name}</td>
        <td dangerouslySetInnerHTML={{ __html: this.getType(definition.type) }} />
        <td>
          {defaultValue &&
            <code>{defaultValue}</code>
          }
        </td>
        <td>{definition.required ? '✓' : null}</td>
        <td
          dangerouslySetInnerHTML={{
            __html: markdown.render(definition.description || ''),
          }}
        />
      </tr>
    )
  }
}
