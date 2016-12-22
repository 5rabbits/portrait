import React, { PureComponent } from 'react'
import { Section } from '../main'
import { Offscreen, States } from '../shared'

export default class CommonSection extends PureComponent {
  buildContent() {
    if (!this.props.panel) {
      return this.buildStates()
    }

    return (
      <Offscreen
        panel={this.props.panel}
        content={this.buildStates()}
      />
    )
  }

  buildStates() {
    return (
      <States
        content={this.props.content}
        empty={this.props.empty}
      />
    )
  }

  render() {
    return (
      <Section
        controls={this.props.controls}
        content={this.buildContent()}
      />
    )
  }
}
