import React from 'react'
import { FiltersForm } from 'shared'

const PanelFilters = () =>
  <FiltersForm>
    <div className="form-group form-input">
      <label className="form-label">Denominación</label>
      <input type="text" className="form-control" name="denomination" placeholder="Denominación" />
    </div>
    <div className="form-group form-input">
      <label className="form-label">Nº Expediente</label>
      <input type="text" className="form-control" name="application_number" placeholder="Nº Expediente" />
    </div>
    <div className="form-group form-input">
      <label className="form-label">Titular</label>
      <input type="text" className="form-control" name="requester" placeholder="Titular" />
    </div>
    <div className="form-group form-input">
      <label className="form-label">Apoderado</label>
      <input type="text" className="form-control" name="representative" placeholder="Apoderado" />
    </div>
  </FiltersForm>

export default PanelFilters
