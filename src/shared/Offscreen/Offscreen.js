import React from 'react'

const Offscreen = props =>
  <div className="offscreen-wrapper offscreen--show">
    <div className="offscreen-aside">
      {props.panel}
    </div>
    <div className="offscreen-content">
      {props.content}
    </div>
  </div>

export default Offscreen
