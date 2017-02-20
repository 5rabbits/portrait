import React, { PureComponent } from 'react'
import childrenPropType from 'propTypes/children'
import $ from 'jquery'

export default class Offscreen extends PureComponent {
  static propTypes = {
    content: childrenPropType,
    panel: childrenPropType,
  }

  componentDidMount() {
    this.resizeAsideHeight()
    $(window).on('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    $(window).off('resize', this.handleWindowResize)
  }

  handleWindowResize = () => {
    this.resizeAsideHeight()
  }

  resizeAsideHeight = () => {
    $('.offscreen-aside').outerHeight($('.offscreen-wrapper').outerHeight())
  }

  render() {
    return (
      <div className="offscreen-wrapper offscreen--show">
        <div className="offscreen-aside">
          {this.props.panel}
        </div>
        <div className="offscreen-content">
          {this.props.content}
        </div>
      </div>
    )
  }
}
