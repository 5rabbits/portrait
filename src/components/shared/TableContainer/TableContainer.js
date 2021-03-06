import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, LoadingScreen, EmptyView } from 'shared'
import { LayoutLink } from 'controls'
import cx from 'classnames'
import i18n from 'helpers/i18n'
import './TableContainer.scss'

/**
 * Section layout for a table list module.
 */
export default class TableContainer extends PureComponent {
  static propTypes = {
    /**
     * The table to be displayed.
     */
    children: PropTypes.node,

    /**
     * CSS class assigned to the container.
     */
    className: PropTypes.string,

    /**
     * Indicates if the filters should start visible or not.
     */
    defaultShowFilters: PropTypes.bool,

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
     * Indicates if the loading screen should be visible or not.
     */
    loading: PropTypes.bool,

    /**
     * Indicates if the "no result" screen should be visible or not.
     */
    noResults: PropTypes.bool,

    /**
     * `action` prop passed to EmptyView.
     */
    noResultsAction: PropTypes.node,

    /**
     * `icon` prop passed to EmptyView.
     */
    noResultsIcon: PropTypes.node,

    /**
     * `text` prop passed to EmptyView.
     */
    noResultsText: PropTypes.string,

    /**
     * `title` prop passed to EmptyView.
     */
    noResultsTitle: PropTypes.string,

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
    onFiltersToggle: PropTypes.func,

    /**
     * Indicates if the filters should be visible or not. Note that this prop is controllable,
     * meaning that you should use `defaultShowFilters` to allow an uncontrolled behaviour.
     */
    showFilters: PropTypes.bool,

    /**
     * Summary information to be displayed on top of the table.
     */
    totals: PropTypes.node,
  }

  static defaultProps = {
    children: null,
    className: null,
    defaultShowFilters: false,
    downloadFormat: null,
    filters: null,
    loading: false,
    noResults: false,
    noResultsAction: undefined,
    noResultsIcon: undefined,
    noResultsText: undefined,
    noResultsTitle: undefined,
    onFiltersToggle: null,
    onDownload: null,
    showFilters: null,
    totals: null,
  }

  static childContextTypes = {
    toggleFilters: PropTypes.func,
  }

  state = {
    filtersPosition: null,
    showFilters: this.props.showFilters == null
      ? this.props.defaultShowFilters
      : this.props.showFilters,
  }

  getChildContext() {
    return {
      toggleFilters: this.toggleFilters,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.showFilters !== nextProps.showFilters) {
      this.setState({
        showFilters: nextProps.showFilters,
      })
    }
  }

  getContents = () => {
    const {
      children, loading, noResults, noResultsAction, noResultsIcon, noResultsText, noResultsTitle,
    } = this.props

    if (loading) {
      return (
        <LoadingScreen
          text={i18n.t('TableContainer.searching')}
        />
      )
    }

    if (noResults) {
      return (
        <EmptyView
          action={noResultsAction}
          icon={noResultsIcon}
          text={noResultsText}
          title={noResultsTitle}
        />
      )
    }

    return children
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

  toggleFilters = () => {
    const showFilters = !this.state.showFilters

    if (this.props.showFilters == null) {
      this.setState({ showFilters })

      if (!showFilters) {
        document.body.scrollTop = 0
      }
    }

    if (this.props.onFiltersToggle) {
      this.props.onFiltersToggle(showFilters)
    }
  }

  containerRef = container => {
    if (container) {
      this.setState({
        filtersPosition: {
          top: container.getBoundingClientRect().top,
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

  handleFiltersToggle = () => {
    this.toggleFilters()
  }

  render() {
    const { className, downloadFormat, filters, loading, noResults, totals, ...other } = this.props
    const { filtersPosition, showFilters } = this.state

    delete other.children
    delete other.defaultShowFilters
    delete other.noResultsAction
    delete other.noResultsIcon
    delete other.noResultsText
    delete other.noResultsTitle
    delete other.onFiltersToggle
    delete other.onDownload
    delete other.showFilters

    return (
      <div
        {...other}
        className={cx('TableContainer', className, {
          'TableContainer--filters-visible': showFilters,
          'TableContainer--loading': loading,
          'TableContainer--no-results': noResults,
        })}
        ref={this.containerRef}
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
                <LayoutLink
                  className="TableContainer__filters-toggle"
                  onClick={this.handleFiltersToggle}
                  >
                  <span>
                    {i18n.t('TableContainer.showFilters')}
                    {' '}
                    <i className="fa fa-filter" />
                  </span>
                </LayoutLink>
              }
            </div>
            <div className="TableContainer__toolbar__totals">
              {totals}
            </div>
            <div className="TableContainer__toolbar__downloads">
              {downloadFormat &&
                <LayoutLink
                  className="TableContainer__download"
                  onClick={this.handleDownload}
                  >
                  {i18n.t('TableContainer.download')} {this.getDownloadIcon()}
                </LayoutLink>
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
          <Container className="TableContainer__Container">
            {this.getContents()}
          </Container>
        </div>
      </div>
    )
  }
}
