import React, { PropTypes } from 'react'
import PropRow from './PropRow'

const PropsTable = ({ props }) =>
  <table className="table table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(props).map(prop =>
        <PropRow
          definition={props[prop]}
          key={prop}
          name={prop}
        />,
      )}
    </tbody>
  </table>

PropsTable.propTypes = {
  props: PropTypes.objectOf(PropTypes.shape({
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
  })).isRequired,
}

export default PropsTable
