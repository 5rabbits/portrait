import React, { PureComponent, PropTypes } from 'react'
import { Container, Grid } from 'shared'
import uncontrollable from 'uncontrollable/batching'
import cx from 'classnames'
import './TableContainer.scss'

export class TableContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // downloadFormats: PropTypes.arrayOf(PropTypes.string),
    filters: PropTypes.node,
    onFiltersToggle: PropTypes.func.isRequired,
    showFilters: PropTypes.bool.isRequired,
    totals: PropTypes.node,
  }

  static defaultProps = {
    downloadFormats: [],
    filters: null,
    showFilters: false,
    totals: null,
  }

  state = {
    filtersPosition: null,
  }

  handleFiltersToggle = event => {
    event.preventDefault()
    this.props.onFiltersToggle(!this.props.showFilters)
  }

  filtersRef = filters => {
    if (filters && !this.state.filtersPosition) {
      this.setState({
        filtersPosition: {
          top: filters.getBoundingClientRect().top,
          bottom: 0,
        },
      })
    }
  }

  render() {
    const { children, filters, showFilters, totals } = this.props
    const { filtersPosition } = this.state

    return (
      <div
        className={cx('TableContainer', {
          'TableContainer--filters-visible': showFilters,
        })}
        >
        <Container
          className="TableContainer__toolbar"
          size="fluid"
          >
          <Grid
            align="center"
            className="TableContainer__toolbar__grid"
            size={['0 0 100px', 'fill', '0 0 100px']}
            gutter={false}
            >
            <div className="TableContainer__toolbar__filters">
              <a
                className={cx('TableContainer__link', {
                  'TableContainer__link--active': showFilters,
                })}
                href="#"
                onClick={this.handleFiltersToggle}
                >
                {showFilters &&
                  <span>Cerrar filtros <i className="fa fa-times" /></span>
                }
                {!showFilters &&
                  <span>Filtros avanzados <i className="fa fa-filter" /></span>
                }
              </a>
            </div>
            <div className="TableContainer__toolbar__totals">
              {totals}
            </div>
            <div className="TableContainer__toolbar__downloads">
              <a
                className="TableContainer__link"
                href="#"
                >
                Descargar
              </a>
            </div>
          </Grid>
        </Container>
        <div
          className="TableContainer__filters"
          ref={this.filtersRef}
          style={filtersPosition}
          >
          {filters}
        </div>
        <div className="TableContainer__contents">
          <Container>
            {children}
          </Container>
        </div>
      </div>
    )
  }
}

export default uncontrollable(TableContainer, {
  showFilters: 'onFiltersToggle',
})
