import React, { PureComponent } from 'react';

export default class SectionHeading extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="type-title inline">Proyectos</h1>
        <a href="#" className="link type-footnote color-secondary ml-sm">Ver Clientes</a>
      </div>
    );
  }
}
