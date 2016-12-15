import React, { PureComponent } from 'react'

export default class SectionHeading extends PureComponent {
  buildFootnote() {
    if (!this.props.footnote) {
      return null
    }

    return (
      <a
        href={this.props.footnoteUrl || '#'}
        className="link type-footnote color-secondary ml-sm"
        >
        {this.props.footnote}
      </a>
    )
  }

  render() {
    return (
      <div>
        <h1 className="type-title inline">{this.props.title}</h1>
        {this.buildFootnote()}
      </div>
    )
  }
}
