import React from 'react'
import childrenPropType from 'propTypes/children'

const Section = props =>
  <section className="section-wrapper" id="block-section">
    <header className="section-controls" id="block-controls">
      <div className="container-max">
        {props.controls}
      </div>
    </header>
    <section className="section-content" id="block-content">
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
