import React, { Component } from 'react'
import {
  SectionToolbar, Layout, Navigation, NavigationItem, Section,
} from 'main'
import { Button, SearchInput } from 'controls'
import { Container } from 'shared'
import TimeEntry from './TimeEntry'

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
      <Container>
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
          <TimeEntry />
        </div>
      </Container>
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
