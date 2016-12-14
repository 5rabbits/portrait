import React from 'react'

const Controls = () =>
  <div className="controls-container">
    <div className="controls-main">
      {this.props.main}
    </div>
    <div className="controls-content">
      {this.props.content}
    </div>
    <div className="controls-actions">
      {this.props.actions}
    </div>
  </div>

export default Controls
