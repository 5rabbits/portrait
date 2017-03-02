import React, { PureComponent } from 'react'
import { Layout, Navigation, NavigationItem, SectionOffscreen } from 'main'
import Controls from './ControlsSection'
import Content from './Content'
import PanelFilters from './PanelFilters'
import CalendarIcon from './svg-icons/calendar.svg'
import ClientsIcon from './svg-icons/clients.svg'
import DraftsIcon from './svg-icons/drafts.svg'

export default class App extends PureComponent {

  buildNavigationItems = () =>
    <NavigationItem
      label="Styleguide"
    />

  buildNavigation = () =>
    <Navigation brand="Styleguide" theme="inverse">
      <NavigationItem
        label="Calendar"
        icon={<CalendarIcon height={20} width={20} />}
      />
      <NavigationItem
        label="Clients"
        icon={<ClientsIcon height={20} width={20} />}
      />
      <NavigationItem
        label="Drafts"
        icon={<DraftsIcon height={20} width={20} />}
      />
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
