import React, { PureComponent } from 'react';

export default class CalendarNavigation extends PureComponent {
  render() {
    return (
      <div className="btn-toolbar" role="toolbar" aria-label="...">
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">Hoy</button>
        </div>
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button type="button" className="btn btn-default">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <div className="inline-block text-left ml-xs">
          <div className="type-small font-strong color-hint mb-xxs">SEMANA DEL</div>
          <div className="type-footnote font-strong">05 al 11 de diciembre de 2016</div>
        </div>
      </div>
    );
  }
}
