import React from 'react'
import { Loader, EmptyView } from '../shared'

const Section = props =>
  <section className="section-wrapper" id="block-section">
    <header className="section-controls" id="block-controls">
      <div className="container-max">
        {props.controls}
      </div>
    </header>
    <section className="section-content" id="block-content">
      <div className="container-max">
        <article className="hidden section-state" id="block-content-loading">
          <Loader />
        </article>

        <article className="hidden section-state" id="block-content-empty">
          <EmptyView />
        </article>

        <article className="hidden- section-state" id="block-content-data">
          { props.content }
        </article>
      </div>
    </section>
  </section>

export default Section
