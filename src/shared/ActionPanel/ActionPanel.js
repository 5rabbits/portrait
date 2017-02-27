import React from 'react'
import childrenPropType from 'propTypes/children'

const ActionPanel = props =>
  <div className="flex-container flex-vertical">
    <div className="flex-content scrollable">
      <div className="flex-close">
        <a href="#"><i className="fa fa-close" /><span className="ml-xs hidden-xs">Cerrar filtros</span></a>
      </div>
      {props.content}
    </div>
    <div className="pt-xs pr-sm pb-md pl-sm fade-bottom-base">
      {props.action}
    </div>
  </div>

ActionPanel.propTypes = {
  content: childrenPropType,
  action: childrenPropType,
}

export default ActionPanel
