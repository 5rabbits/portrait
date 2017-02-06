import React from 'react'
import childrenPropType from 'propTypes/children'

const EmptyView = props =>
  <div className="empty-view">
    <div className="empty-container">
      <div className="empty-dialog">
        {props.children}
      </div>
    </div>
  </div>

EmptyView.propTypes = {
  children: childrenPropType,
}

export default EmptyView
