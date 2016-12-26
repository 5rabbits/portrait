import React from 'react'

const EmptyView = props =>
  <div className="empty-view">
    <div className="empty-container">
      <div className="empty-dialog">
        {props.children}
      </div>
    </div>
  </div>

export default EmptyView
