import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from 'shared'
import uncontrollable from 'uncontrollable/batching'
import cx from 'classnames'
import './TableContainer.scss'

/**
 * Section layout for a table list module.
 */
export class TableContainer extends PureComponent {
  static propTypes = {
    /**
     * The table to be displayed.
     */
    children: PropTypes.node.isRequired,

    /**
     * The download format available.
     */
    downloadFormat: PropTypes.oneOf([
      'csv', 'excel', 'pdf', 'word',
    ]),

    /**
     * The form component used to filter the list. This should a be a
     * [FiltersForm](/components/FiltersForm) component.
     */
    filters: PropTypes.node,

    /**
     * Callback invoked when the user clicks the download button.
     * The first argument is the selected download format.
     */
    onDownload: PropTypes.func,

    /**
     * Callback invoked when the filters visilibity changes.
     * The first argument is a boolean that indicates if the filters are now visible (`true`) or
     * hidden (`false`).
     */
    onFiltersToggle: PropTypes.func.isRequired,

    /**
     * Indicates if the filters should be visible or not. Note that this prop is controllable,
     * meaning that you should use `defaultShowFilters` to allow an uncontrolled behaviour.
     */
    showFilters: PropTypes.bool.isRequired,

    /**
     * Summary information to be displayed on top of the table.
     */
    totals: PropTypes.node,
  }

  static defaultProps = {
    downloadFormat: null,
    filters: null,
    onDownload: null,
    showFilters: false,
    totals: null,
  }

  state = {
    filtersPosition: null,
  }

  getDownloadIcon = () => {
    switch (this.props.downloadFormat) {
      case 'csv':
      case 'excel':
        return <i className="fa fa-file-excel-o" />

      case 'pdf':
        return <i className="fa fa-file-pdf-o" />

      case 'word':
        return <i className="fa fa-file-excel-o" />

      default:
        return null
    }
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

  handleDownload = event => {
    event.preventDefault()

    if (this.props.onDownload) {
      this.props.onDownload(this.props.downloadFormat)
    }
  }

  handleFiltersToggle = event => {
    event.preventDefault()
    this.props.onFiltersToggle(!this.props.showFilters)
  }

  render() {
    const { children, downloadFormat, filters, showFilters, totals } = this.props
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
              {filters &&
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
              }
            </div>
            <div className="TableContainer__toolbar__totals">
              {totals}
            </div>
            <div className="TableContainer__toolbar__downloads">
              {downloadFormat &&
                <a
                  className="TableContainer__link"
                  href="#"
                  onClick={this.handleDownload}
                  >
                  Descargar {this.getDownloadIcon()}
                </a>
              }
            </div>
          </Grid>
        </Container>
        {filters &&
          <div
            className="TableContainer__filters"
            ref={this.filtersRef}
            style={filtersPosition}
            >
            {filters}
          </div>
        }
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
