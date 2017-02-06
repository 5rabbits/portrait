import React from 'react'
import childrenPropType from 'propTypes/children'

const Offscreen = props =>
  <div className="offscreen-wrapper offscreen--show">
    <div className="offscreen-aside">
      {props.panel}
    </div>
    <div className="offscreen-content">
      {props.content}
    </div>
  </div>

Offscreen.propTypes = {
  content: childrenPropType,
  panel: childrenPropType,
}

export default Offscreen
