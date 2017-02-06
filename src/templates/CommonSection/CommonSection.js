import React, { PureComponent } from 'react'
import childrenPropType from 'propTypes/children'
import { Section } from 'main'
import { Offscreen, States } from 'shared'

export default class CommonSection extends PureComponent {
  static propTypes = {
    controls: childrenPropType,
    content: childrenPropType,
    empty: childrenPropType,
    panel: childrenPropType,
  }

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
