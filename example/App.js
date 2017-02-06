import React, { PureComponent } from 'react'
import { Layout, Navigation, SectionOffscreen } from 'main'
import ControlsSection from './ControlsSection'
import Content from './Content'

export default class App extends PureComponent {
  buildNavigation = () =>
    <Navigation />

  buildMain = () =>
    <SectionOffscreen
      controls={<ControlsSection />}
      panelContent={<h1>Hello world</h1>}
      content={<div><Content /></div>}
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
