import React, { PureComponent } from 'react';

export default class SearchForm extends PureComponent {
  render() {
    return (
      <div className="form-group has-feedback mb-nn">
        <input type="text"
               className="form-control block-rounded input-max-medium"
               placeholder={this.props.placeholder}/>

        <span className="fa fa-search form-control-feedback" aria-hidden="true"></span>
        <span className="sr-only">(success)</span>
      </div>
    );
  }
}
