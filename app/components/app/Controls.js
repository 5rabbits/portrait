import React, { PureComponent } from 'react'

export default class Controls extends PureComponent {
  render() {
    return (
      <div className="controls-container">
        <div className="controls-main">
          { this.props.main }
        </div>
        <div className="controls-content">
          { this.props.content }
        </div>
        <div className="controls-actions">
          { this.props.actions }
        </div>
      </div>
    );
  }
}
