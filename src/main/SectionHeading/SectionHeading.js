import React, { PureComponent, PropTypes } from 'react'

export default class SectionHeading extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
  }

  buildLink() {
    if (!this.props.label) {
      return null
    }

    return (
      <a
        href={this.props.url || '#'}
        className="link link-border type-footnote color-secondary ml-sm"
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
