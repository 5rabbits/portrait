import React, { PureComponent } from 'react';
import { SectionHeading } from './timeflow';
import { Button, SearchForm } from './controls';
import { Controls } from './main';

export default class ControlsSection extends PureComponent {
  render() {
    return (
      <Controls
        main={<SectionHeading/>}
        content={<SearchForm/>}
        actions={<Button label="Nuevo Proyecto"/>} />
    );
  }
}
