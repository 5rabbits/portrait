import React, { PureComponent } from 'react';
import { ReviewNavigation, TimingStats } from 'timeflow';
import { Button } from 'controls';

export default class ControlsTimeEntry extends PureComponent {
  render() {
    return (
      <Controls main={<ReviewNavigation/>}
                content={<TimingStats/>}
                actions={<Button label="Exportar resultados"/>} />
    );
  }
}
