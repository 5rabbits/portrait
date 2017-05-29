import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SearchIcon from 'icons/Search'
import cx from 'classnames'
import i18n from 'helpers/i18n'
import './EmptyView.scss'

/**
 * Used to display an empty results page on a filtered list.
 */
export default class EmptyView extends PureComponent {
  static propTypes = {
    /**
     * CSS class assigned to the container.
     */
    className: PropTypes.string,

    /**
     * Icon to be displayed.
     */
    icon: PropTypes.node,

    /**
     * Title to be displayed.
     */
    title: PropTypes.string,

    /**
     * Text to be displayed.
     */
    text: PropTypes.string,

    /**
     * Action to be displayed.
     */
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
