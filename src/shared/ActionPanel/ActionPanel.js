import React, { PureComponent } from 'react'
import childrenPropType from 'propTypes/children'
import $ from 'jquery'

export default class ActionPanel extends PureComponent {
  static propTypes = {
    content: childrenPropType,
    action: childrenPropType,
  }

  handleCloseClick = () => {
    this.closeOffscreen()
  }

  closeOffscreen = () => {
    $('.offscreen-wrapper').removeClass('offscreen--show')
  }

  render() {
    return (
      <div className="flex-container flex-vertical">
        <div className="flex-content scrollable">
          <div className="flex-close">
            <a href="#" onClick={this.handleCloseClick} className="link link-badge type-footnote"><i className="fa fa-close" /><span className="ml-xs hidden-xs">Cerrar filtros</span></a>
          </div>
          {this.props.content}
        </div>
        <div className="pt-xs pr-sm pb-md pl-sm fade-bottom-base">
          {this.props.action}
        </div>
      </div>
    )
  }
}
