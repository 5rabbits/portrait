import React from 'react'
import Controls from 'main/Controls'
import childrenPropType from 'propTypes/children'

const Section = props =>
  <section className="section-wrapper" id="block-section">
    <header className="section-controls" id="block-controls">
      <div className="container-max">
        {props.controls}
      </div>
    </header>
    <section className="section-content" id="block-content">
      <div className="section-subhead">
        <div className="container-max">
          <Controls
            main={<a href="#" className="link link-badge type-footnote"><i className="fa fa-filter" /><span className="ml-xs hidden-xs">Ver filtros</span></a>}
            content={<span className="type-subhead">Hay <strong>356</strong> resultados</span>}
            actions={<a href="#" className="link link-badge type-footnote"><span className="mr-xs hidden-xs">Descargar listado</span><i className="fa fa-download" /></a>}
          />
        </div>
      </div>

      <div className="container-max">
        {props.content}
      </div>
    </section>
  </section>

Section.propTypes = {
  content: childrenPropType,
  controls: childrenPropType,
}

export default Section
