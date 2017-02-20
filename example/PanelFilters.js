import React from 'react'
import { Container } from 'shared'

const PanelFilters = () =>
  <Container>
    <div className="filters">
      <h4 className="type-subhead mb-sm">Filtrar resultados</h4>
      <form>
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
        <button type="submit" className="success">Buscar</button>
      </form>
    </div>
  </Container>

export default PanelFilters
