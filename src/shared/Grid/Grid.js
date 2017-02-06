import React from 'react'
import childrenPropType from 'propTypes/children'

const Grid = props =>
  <div className="container-page">
    {props.children}
  </div>

Grid.propTypes = {
  children: childrenPropType,
}

export default Grid
