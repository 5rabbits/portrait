import React, { PureComponent } from 'react'

export default class SectionHeading extends PureComponent {
  buildLink() {
    if (!this.props.label) {
      return null
    }

    return (
      <a
        href={this.props.url || '#'}
        className="link type-footnote color-secondary ml-sm"
        >
        {this.props.label}
      </a>
    )
  }

  render() {
    return (
      <div>
        <h1 className="type-title inline">{this.props.title}</h1>
        {this.buildLink()}
      </div>
    )
  }
}
