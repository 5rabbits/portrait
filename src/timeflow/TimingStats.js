import React, { PureComponent } from 'react';

export default class TimingStats extends PureComponent {
  render() {
    return (
      <div>
        <div className="inline-block text-right">
          <div className="type-small font-strong color-hint mb-xxs">HORAS TRABAJADAS</div>
          <div className="font-strong">14h 35m</div>
        </div>
        <span className="divider-vertical"></span>
        <div className="inline-block text-left">
          <div className="type-small font-strong color-hint mb-xxs">HORAS FACTURABLES</div>
          <div className="font-strong">14h 35m</div>
        </div>
      </div>
    );
  }
}
