import React, { PropTypes } from 'react'
import PropRow from './PropRow'

const PropsTable = ({ props }) =>
  <table className="props-table table table-condensed">
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
  props: PropTypes.object.isRequired,
}

export default PropsTable
