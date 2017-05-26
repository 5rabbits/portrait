import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { LayoutLink } from 'controls'
import { Container, ScrollLock } from 'shared'
import cx from 'classnames'
import './FiltersForm.scss'

/**
 * A component to be used as the advanced filters of
 * [TableContainer](/components/TableContainer).
 *
 * The search button will be fixed at the bottom of the form
 * and the filters will be placed on a scrollable container.
 */
export default class FiltersForm extends PureComponent {
  static propTypes = {
    /**
     * CSS class assigned to the form.
     */
    className: PropTypes.string,

    /**
     * The filters fields.
     */
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    className: null,
  }

  static contextTypes = {
    toggleFilters: PropTypes.func,
  }

  render() {
    const { children, className, ...other } = this.props
    const { toggleFilters } = this.context

    return (
      <form
        {...other}
        className={cx('FiltersForm', className)}
        >
        <ScrollLock>
          <Container className="FiltersForm__contents">
            {toggleFilters &&
              <div className="FiltersForm__filters-toggle">
                <LayoutLink onClick={toggleFilters}>
                  <span>Cerrar filtros <i className="fa fa-times" /></span>
                </LayoutLink>
              </div>
            }

            <h4 className="type-subhead mb-sm">Filtrar resultados</h4>
            {children}
          </Container>
        </ScrollLock>
        <Container className="FiltersForm__submit">
          <button
            className="btn btn-block btn-primary"
            type="submit"
            >
            Buscar
          </button>
        </Container>
      </form>
    )
  }
}
