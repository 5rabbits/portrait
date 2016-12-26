import React from 'react'

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

export default Controls
