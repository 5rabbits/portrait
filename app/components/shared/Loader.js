import React, { PureComponent } from 'react';

export default class Loader extends PureComponent {
  render() {
    return (
      <div className="empty-view">
        <div className="empty-container">
          <div className="empty-dialog">
            <i className="fa fa-circle-o-notch fa-5x color-soft fa-spin "></i>
          </div>
        </div>
      </div>
    );
  }
}
