import React, { Component } from 'react'
import {
  SectionToolbar, Layout, Navigation, NavigationItem, Section,
} from 'main'
import { Button, SearchInput } from 'controls'
import { TableContainer } from 'shared'
import TimeEntry from './TimeEntry'
import PanelFilters from './PanelFilters'

export default class App extends Component {
  buildNavigation = () =>
    <Navigation brand="Timeflow example" theme="inverse">
      <NavigationItem label="Base" />
      <NavigationItem label="Layout" />
      <NavigationItem label="Components" />
    </Navigation>

  buildMain = () =>
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
        filters={<PanelFilters />}
        totals="16 Proyectos"
        >
        <div className="block-group">
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
          <TimeEntry />
        </div>
      </TableContainer>
    </Section>

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
