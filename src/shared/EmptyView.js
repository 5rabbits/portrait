import React, { PureComponent } from 'react';

export default class EmptyView extends PureComponent {
  render() {
    return (
      <div className="empty-view">
        <div className="empty-container">
          <div className="empty-dialog">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
