import React, { Component } from 'react'
import {
  SectionToolbar, Layout, Navigation, NavigationItem, Section,
} from 'main'
import { Button, SearchInput } from 'controls'
import { TableContainer, FiltersForm } from 'shared'
import TimeEntry from './TimeEntry'

export default class App extends Component {
  state = {
    loading: false,
    data: null,
    showResults: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({
      loading: true,
    })

    let data = []

    if (this.state.showResults) {
      data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
      ]
    }

    setTimeout(() => {
      this.setState({
        loading: false,
        data,
      })
    }, 3000)
  }

  handleShowResultsChange = event => {
    this.setState({
      showResults: event.target.value === 'true',
    })
  }

  handleFiltersSubmit = event => {
    event.preventDefault()
    this.fetchData()
  }

  buildNavigation = () =>
    <Navigation brand="Timeflow example" theme="inverse">
      <NavigationItem label="Base" />
      <NavigationItem label="Layout" />
      <NavigationItem label="Components" />
    </Navigation>

  buildFilters = () =>
    <FiltersForm onSubmit={this.handleFiltersSubmit}>
      <div className="form-group form-input">
        <label className="form-label">Show results</label>
        <select
          className="form-control"
          defaultValue={this.state.showResults.toString()}
          onChange={this.handleShowResultsChange}
          >
          <option value="true">Show results</option>
          <option value="false">Simulate no results</option>
        </select>
      </div>
      <div className="form-group form-input">
        <label className="form-label">Other filter 1</label>
        <input type="text" className="form-control" placeholder="Other filter 1" />
      </div>
      <div className="form-group form-input">
        <label className="form-label">Other filter 2</label>
        <input type="text" className="form-control" placeholder="Other filter 2" />
      </div>
      <div className="form-group form-input">
        <label className="form-label">Other filter 3</label>
        <input type="text" className="form-control" placeholder="Other filter 3" />
      </div>
    </FiltersForm>

  buildMain = () => {
    const { loading, data } = this.state

    return (
      <Section
        toolbar={
          <SectionToolbar
            title={<h4>Gastos</h4>}
            search={<SearchInput placeholder="Escribe algo para buscar un proyecto" />}
            actions={<Button label="Nuevo Proyecto" />}
          />
        }
        >
        <TableContainer
          downloadFormat="excel"
          filters={this.buildFilters()}
          loading={loading}
          noResults={data && data.length === 0}
          totals={data && `${data.length} Registros`}
          >
          {data && data.map(item =>
            <TimeEntry key={item.id} />,
          )}
        </TableContainer>
      </Section>
    )
  }

  render() {
    return (
      <Layout
        header="header"
        navigation={this.buildNavigation()}
        main={this.buildMain()}
      />
    )
  }
}
