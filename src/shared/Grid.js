import React, { PureComponent } from 'react';

export default class Grid extends PureComponent {
  render() {
    return (
      <div className="container-page">
        { this.props.children }
      </div>
    );
  }
}
