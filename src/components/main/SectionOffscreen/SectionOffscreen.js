import React, { PureComponent } from 'react'
import { Loader, Offscreen, EmptyView } from 'shared'
import Controls from 'main/Controls'
import childrenPropType from 'propTypes/children'
import $ from 'jquery'

export default class SectionOffscreen extends PureComponent {
  static propTypes = {
    content: childrenPropType,
    controls: childrenPropType,
    panel: childrenPropType,
  }

  handleFilterClick = () => {
    this.showFilters()
  }

  showFilters = () => {
    $('.offscreen-wrapper').addClass('offscreen--show')
  }

  buildContent = () =>
    <div className="section-states">
      <article className="hidden section-state" id="block-content-loading">
        <Loader />
      </article>
      <article className="hidden section-state" id="block-content-empty">
        <EmptyView />
      </article>
      <article className="hidden- section-state" id="block-content-data">
        {this.props.content}
      </article>
    </div>

  render() {
    return (
      <section className="section-wrapper" id="block-section">
        <header className="section-controls" id="block-controls">
          <div className="container-max">
            {this.props.controls}
          </div>
        </header>
        <section className="section-content" id="block-content">
          <div className="section-subhead">
            <div className="container-max">
              <Controls
                main={<a href="#" onClick={this.handleFilterClick} className="link link-badge type-footnote"><i className="fa fa-filter" /><span className="ml-xs hidden-xs">Ver filtros</span></a>}
                content={<span className="type-subhead">Hay <strong>356</strong> resultados</span>}
                actions={<a href="#" className="link link-badge type-footnote"><span className="mr-xs hidden-xs">Descargar listado</span><i className="fa fa-download" /></a>}
              />
            </div>
          </div>
          <div className="container-max">
            <Offscreen
              panel={this.props.panel}
              content={this.buildContent()}
            />
          </div>
        </section>
      </section>
    )
  }
}
