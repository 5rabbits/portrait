import React, { PureComponent } from 'react';
import { SectionHeading } from 'timeflow';
import { Button, SearchForm } from 'controls';

export default class ControlsTimeEntry extends PureComponent {
  render() {
    return (
      <Controls
        main={<SectionHeading/>}
        content={<SearchForm/>}
        actions={<Button label="Nuevo Proyecto"/>} />
    )
  }
}
