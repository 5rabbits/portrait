import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong mb-nn">Timeflow views</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-body">Modal 1</p>
        <p className="type-footnote">https://sketch.cloud/s/5Vjw/all/pages/20-time-entries-empty-18</p>
        <div className="modal-one pa-md p-relative">
          <button className="btn btn-outline-default p-absolute to-close">X</button>
          <p className="type-title text-center pt-sm">Nulla vitae elit libero, a pharetra augue</p>
          <p className="type-footnote text-center color-secondary mt-sm">Curabitur blandit tempus porttitor. Donec id elit non mi</p>
          <div className="px-lg">
            <select className="center-block bg-base pa-xs mt-sm">
              <option>Ajuste por tipo de cambio</option>
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
            <div className="pl-md mt-sm">
              <button className="btn btn-outline-default">Cancelar</button>
              <button className="btn btn-primary">Activar función</button>
            </div>
          </div>
        </div>
      </div>

      <div className="block-item pa-md">
        <p className="type-body">Modal 2</p>
        <p className="type-footnote">https://sketch.cloud/s/5Vjw/all/pages/20-time-entries-empty-17</p>
        <div className="modal-two pa-md p-relative">
          <button className="btn btn-outline-default p-absolute to-close">X</button>
          <p className="type-title">Activar manualmente</p>
          <p className="type-footnote text-danger mt-sm">Si el usuario que invitaste tiene problemas
          para aceptar la invitación a través de su correo electrónico puedes activarlo manualmente
          llenando este formulario.</p>
          <div className="pt-sm">
            <input className="form-control input-lg mb-sm" type="text" placeholder="mailusuario@gettimeflow.com" />
            <input className="form-control input-lg mb-sm" type="text" placeholder="Nombre y apellido" />
            <input className="form-control input-lg mb-sm" type="text" placeholder="Contraseña" />
            <input className="form-control input-lg mb-sm" type="text" placeholder="Confirmar contraseña" />
          </div>
          <div className="pull-right mt-sm">
            <button className="btn btn-outline-default px-md">Cancelar</button>
            <button className="btn btn-primary px-md">Activar</button>
          </div>
        </div>
      </div>

      <div className="block-item pa-md">
        <p className="type-body">Modal 3</p>
        <p className="type-footnote">https://sketch.cloud/s/5Vjw/all/pages/20-time-entries-empty-15</p>
        <div className="modal-three">
          <div className="text-part px-md pt-md">
            <p className="type-title text-center pb-sm">Are you sure?</p>
            <p className="type-footnote text-center if-user">Si el usuario que invitaste tiene problemas
          para aceptar la invitación a través de su correo electrónico puedes activarlo manualmente
          llenando este formulario.</p>
          </div>
          <div className="buttons-part">
            <button className="display-block middle-button btn btn-outline-default total-danger">Eliminar</button>
            <button className="display-block middle-button btn btn-outline-default ml-nn">Cancelar</button>
          </div>
        </div>
      </div>

    </div>
  </Container>

export default Content
