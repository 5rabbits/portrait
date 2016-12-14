import React from 'react'
import { SectionHeading } from './timeflow'
import { Button, SearchForm } from './controls'
import { Controls } from './main'

const ControlsSection = () =>
  <Controls
    main={<SectionHeading />}
    content={<SearchForm />}
    actions={<Button label="Nuevo Proyecto" />}
  />

export default ControlsSection
