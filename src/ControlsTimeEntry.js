import React from 'react'
import { ReviewNavigation, TimingStats } from './timeflow'
import { Button } from './controls'
import { Controls } from './main'

const ControlsTimeEntry = () =>
  <Controls
    main={<ReviewNavigation />}
    content={<TimingStats />}
    actions={<Button label="Exportar resultados" />}
  />

export default ControlsTimeEntry
