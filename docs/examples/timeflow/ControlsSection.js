import React from 'react'
import { Button, SearchForm } from 'controls'
import { Controls, SectionHeading } from 'main'

const ControlsSection = () =>
  <Controls
    main={<SectionHeading title="Proyectos" url="#" label="Ver Clientes" />}
    content={<SearchForm />}
    actions={<Button label="Nuevo Proyecto" />}
  />

export default ControlsSection
