import React from 'react'

const Offscreen = () =>
  <div className="offscreen-wrapper offscreen--show">
    <div className="offscreen-aside">
      {this.props.panel}
    </div>
    <div className="offscreen-content">
      {this.props.content}
    </div>
  </div>

export default Offscreen
