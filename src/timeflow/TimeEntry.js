import React, { PureComponent } from 'react';

export default class TimeEntry extends PureComponent {
  render() {
    return (
      <div className="timeentry block-item">
        <div className="timeentry-activity">T</div>
        <div className="timeentry-content">
          <div className="timeentry-info">
            <div className="type-caption color-secondary">Ajustes Timeflow, 5rabbits</div>
            <div className="type-footnote">Curabitur blandit tempus porttitor</div>
          </div>

          <div className="timeentry-data">
            <div className="timeentry-block">
              <div className="type-caption color-secondary">Horas trabajadas</div>
              <div className="type-subhead">2h 45m</div>
            </div>
            <div className="timeentry-block">
              <div className="type-caption color-secondary">Horas facturables</div>
              <div className="type-subhead">2h 45m</div>
            </div>
            <div className="timeentry-block">
              <div className="type-caption color-secondary">Tarifa por hora</div>
              <div className="type-subhead">$60.000</div>
            </div>
          </div>
        </div>

        <div className="timeentry-actions">
          <div className="timeentry-block">
            <label className="checkbox mini">
              <span className="type-caption">Revisada</span>
              <input type="checkbox"/>
              <span className="control-indicator ml-xs"></span>
            </label>
          </div>
          <div className="timeentry-block">
            <a href="#" className="btn btn-outline-primary btn-sm block-rounded">
              <i className="fa fa-fw fa-btn fa-pencil"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
