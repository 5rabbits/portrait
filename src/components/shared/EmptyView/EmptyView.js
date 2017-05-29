import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SearchIcon from 'icons/Search'
import cx from 'classnames'
import i18n from 'helpers/i18n'
import './EmptyView.scss'

export default class EmptyView extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.node,
  }

  static defaultProps = {
    className: null,
    icon: <SearchIcon />,
    title: null,
    text: null,
    action: null,
  }

  render() {
    const { className, icon, action, ...other } = this.props
    const title = this.props.title || i18n.t('EmptyView.title')
    const text = this.props.text || i18n.t('EmptyView.text')

    delete other.title
    delete other.text

    return (
      <div
        {...other}
        className={cx('EmptyView', className)}
        >
        {icon &&
          <div className="EmptyView__icon">
            {icon}
          </div>
        }

        {title &&
          <div className="EmptyView__title">
            {title}
          </div>
        }

        {text &&
          <div className="EmptyView__text">
            {text}
          </div>
        }

        {action &&
          <div className="EmptyView__action">
            {action}
          </div>
        }
      </div>
    )
  }
}
