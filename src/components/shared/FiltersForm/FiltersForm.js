import React, { PureComponent, PropTypes } from 'react'
import { Container } from 'shared'
import cx from 'classnames'
import './FiltersForm.scss'

export default class FiltersForm extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    className: null,
  }

  render() {
    const { children, className, ...other } = this.props

    return (
      <form
        {...other}
        className={cx('FiltersForm', className)}
        >
        <Container className="FiltersForm__contents">
          <h4 className="type-subhead mb-sm">Filtrar resultados</h4>
          {children}
        </Container>
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
