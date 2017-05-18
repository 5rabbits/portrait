import React, { PureComponent, PropTypes } from 'react'
import './Section.scss'

export default class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    toolbar: PropTypes.node,
  }

  static defaultProps = {
    toolbar: null,
  }

  render() {
    const { children, toolbar } = this.props

    return (
      <section className="Section">
        {toolbar &&
          <header className="Section__toolbar">
            {toolbar}
          </header>
        }
        <section className="Section__contents">
          {children}
        </section>
      </section>
    )
  }
}
