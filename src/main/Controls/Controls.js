import React from 'react'
import childrenPropType from 'propTypes/children'

const Controls = props =>
  <div className="controls-container">
    <div className="controls-main">
      {props.main}
    </div>
    <div className="controls-content">
      {props.content}
    </div>
    <div className="controls-actions">
      {props.actions}
    </div>
  </div>

Controls.propTypes = {
  actions: childrenPropType,
  content: childrenPropType,
  main: childrenPropType,
}

export default Controls
