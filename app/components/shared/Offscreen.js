import React, { PureComponent } from 'react';

export default class Offscreen extends PureComponent {
  render() {
    return (
      <div className="offscreen-wrapper">
        <div className="offscreen-aside">
          { this.props.panel }
        </div>
        <div className="offscreen-content">
          { this.props.content }
        </div>
      </div>
    );
  }
}
