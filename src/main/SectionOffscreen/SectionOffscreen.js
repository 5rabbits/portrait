import React, { PureComponent } from 'react'
import { Loader, Offscreen, EmptyView } from 'shared'

export default class SectionOffscreen extends PureComponent {
  buildPanel = () =>
    <div className="container-page">
      {this.props.panelContent}
    </div>

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
          <div className="container-max">
            <Offscreen
              panel={this.buildPanel()}
              content={this.buildContent()}
            />
          </div>
        </section>
      </section>
    )
  }
}
