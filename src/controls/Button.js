import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    return (
      <a href="#" className="btn btn-primary">
        { this.props.label }
      </a>
    );
  }
}
