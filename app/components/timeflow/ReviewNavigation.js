import React, { PureComponent } from 'react';

export default class ReviewNavigation extends PureComponent {
  render() {
    return (
      <div className="btn-toolbar" role="toolbar" aria-label="...">
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">Dia</button>
          <button type="button" className="btn btn-default">Semana</button>
          <button type="button" className="btn btn-default">Mes</button>
        </div>
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button type="button" className="btn btn-default">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
