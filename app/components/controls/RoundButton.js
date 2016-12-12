import React, { PureComponent } from 'react';

export default class RoundButton extends PureComponent {
  render() {
    return (
      <a href="#" className="btn btn-outline-primary btn-sm block-rounded">
        <i className=`fa fa-fw fa-btn fa-${this.props.icon}`></i>
        { this.props.label }
      </a>
    );
  }
}
