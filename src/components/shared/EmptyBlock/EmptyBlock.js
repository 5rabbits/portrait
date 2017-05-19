import React from 'react'
import childrenPropType from 'propTypes/children'

const EmptyBlock = props =>
  <div className="empty-view">
    <div className="empty-container">
      <div className="empty-dialog">
        {props.children}
      </div>
    </div>
  </div>

EmptyBlock.propTypes = {
  children: childrenPropType,
}

EmptyBlock.defaultProps = {
  children: null,
}

export default EmptyBlock
