import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Section.scss'

export default class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    toolbar: PropTypes.node,
  }

  static defaultProps = {
    className: null,
    toolbar: null,
  }

  render() {
    const { children, className, toolbar, ...others } = this.props

    return (
      <section
        {...others}
        className={cx('Section', className, {
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
