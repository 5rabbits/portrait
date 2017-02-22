import React from 'react'
import childrenPropType from 'propTypes/children'

const ActionPanel = props =>
  <div className="flex-container flex-vertical">
    <div className="flex-content scrollable">
      {props.content}
    </div>
    <div className="py-sm">
      {props.action}
    </div>
  </div>

ActionPanel.propTypes = {
  content: childrenPropType,
  action: childrenPropType,
}

export default ActionPanel
