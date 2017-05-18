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
          {this.props.content}
        </div>
        <div className="pt-xs pr-sm pb-md pl-sm fade-bottom-base">
          {this.props.action}
        </div>
      </div>
    )
  }
}
