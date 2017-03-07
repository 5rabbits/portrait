import React, { PropTypes, Component } from 'react'

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
            value: PropTypes.string,
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

  getType = () => {
    const { definition } = this.props

    switch (definition.type.name) {
      case 'custom':
        return `<i>${definition.type.raw}</i>`

      case 'enum':
        return definition.type.value
          .map(value => `<code>${value.value}</code>`)
          .join(' or ')

      default:
        return definition.type.name
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
        <td dangerouslySetInnerHTML={{ __html: this.getType() }} />
        <td>
          {defaultValue &&
            <code>{defaultValue}</code>
          }
        </td>
        <td>{definition.required ? '✓' : null}</td>
        <td>{definition.description}</td>
      </tr>
    )
  }
}
