import React, { PureComponent } from 'react'
import { Layout, Navigation, NavigationItem, SectionOffscreen } from 'main'
import Controls from './ControlsSection'
import Content from './Content'
import PanelFilters from './PanelFilters'

export default class App extends PureComponent {

  buildNavigationItems = () =>
    <NavigationItem
      label="Styleguide"
    />

  buildNavigation = () =>
    <Navigation brand="Styleguide" theme="inverse">
      <NavigationItem label="Base" />
      <NavigationItem label="Layout" />
      <NavigationItem label="Components" />
    </Navigation>

  buildMain = () =>
    <SectionOffscreen
      controls={<Controls />}
      panel={<PanelFilters />}
      content={<Content />}
      empty={<hr />}
    />

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
