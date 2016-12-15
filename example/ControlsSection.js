import React from 'react'
import { Button, SearchForm } from 'controls'
import { Controls, SectionHeading } from 'main'

const ControlsSection = () =>
  <Controls
    main={<SectionHeading />}
    content={<SearchForm />}
    actions={<Button label="Nuevo Proyecto" />}
  />

export default ControlsSection
