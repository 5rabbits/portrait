import React from 'react'
import { Button } from 'controls'
import { Controls } from 'main'
import { ReviewNavigation, TimingStats } from './timeflow'

const ControlsTimeEntry = () =>
  <Controls
    main={<ReviewNavigation />}
    content={<TimingStats />}
    actions={<Button label="Exportar resultados" />}
  />

export default ControlsTimeEntry
