import React, { PropTypes, Component } from 'react'

export default class PropRow extends Component {
  static propTypes = {
    definition: PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string,
        raw: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.shape({
          value: PropTypes.string,
          computed: PropTypes.bool,
        })),
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

    return definition.type.name
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

    return (
      <tr>
        <td>{name}</td>
        <td>{this.getType()}</td>
        <td>{this.getDefaultValue()}</td>
        <td>{definition.required ? '✓' : null}</td>
        <td>{definition.description}</td>
      </tr>
    )
  }
}
