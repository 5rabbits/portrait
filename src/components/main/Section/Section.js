import React, { PureComponent, PropTypes } from 'react'
import cx from 'classnames'
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
      <section
        className={cx('Section', {
          'Section--with-toolbar': toolbar,
        })}
        >
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
