import React from 'react'
import { Loader, EmptyView } from 'shared'

const States = props =>
  <div className="section-states">
    <article className="hidden section-state" id="block-content-loading">
      <Loader />
    </article>
    <article className="hidden section-state" id="block-content-empty">
      <EmptyView>
        {props.empty}
      </EmptyView>
    </article>
    <article className="hidden- section-state" id="block-content-data">
      {props.content}
    </article>
  </div>

export default States
