import React, { PureComponent } from 'react'
import { Link } from 'react-router'

export default class SectionHeading extends PureComponent {
  buildFootnote() {
    if (!this.props.footnote) {
      return null
    }

    return (
      <Link
        href={this.props.footnoteUrl || '#'}
        className="link type-footnote color-secondary ml-sm"
        >
        {this.props.footnote}
      </Link>
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
