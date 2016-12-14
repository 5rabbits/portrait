import React from 'react'

const ReviewNavigation = () =>
  <div className="btn-toolbar" role="toolbar" aria-label="...">
    <div className="btn-group" role="group" aria-label="...">
      <button type="button" className="btn btn-default">Dia</button>
      <button type="button" className="btn btn-default">Semana</button>
      <button type="button" className="btn btn-default">Mes</button>
    </div>
    <div className="btn-group" role="group" aria-label="...">
      <button type="button" className="btn btn-default">
        <i className="fa fa-chevron-left" />
      </button>
      <button type="button" className="btn btn-default">
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  </div>

export default ReviewNavigation
