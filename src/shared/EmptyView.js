import React from 'react'

const EmptyView = () =>
  <div className="empty-view">
    <div className="empty-container">
      <div className="empty-dialog">
        {this.props.children}
      </div>
    </div>
  </div>

export default EmptyView
