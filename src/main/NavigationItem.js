import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class NavigationItem extends PureComponent {
  render() {
    return (
      <li className={classNames({ 'active': this.props.isActive })}>
        <Link to={this.props.href}>
          <i className={`fa mr-xs ${this.props.icon}`}></i>
          <span className='hidden-sm'>{this.props.label}</span>
        </Link>
      </li>
    );
  }
}
