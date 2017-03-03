import React, { PureComponent } from 'react'
import { Layout, Navigation, NavigationItem, SectionOffscreen } from 'main'
import Controls from './ControlsSection'
import Content from './Content'
import PanelFilters from './PanelFilters'
import CalendarIcon from './svg-icons/calendar.svg'
import SettingsIcon from './svg-icons/settings.svg'
import ClientsIcon from './svg-icons/clients.svg'
import ProjectsIcon from './svg-icons/projects.svg'
import ProfileImage from './images/profile.png'

export default class App extends PureComponent {

  buildNavigationItems = () =>
    <NavigationItem
      label="Styleguide"
    />

  buildNavigation = () =>
    <Navigation
      align="center"
      brand="Styleguide"
      theme="inverse"
      currentUser={{
        name: 'Etropos',
        image: ProfileImage,
      }}
      userLinks={[
        <NavigationItem key={0} label="Profile" />,
        <NavigationItem key={1} label="Log out" />,
      ]}
      >
      <NavigationItem
        label="Calendar"
        icon={<CalendarIcon height={20} width={20} />}
        isActive
      />
      <NavigationItem
        label="Settings"
        icon={<SettingsIcon height={20} width={20} />}
        >
        <NavigationItem
          label="Clients"
          icon={<ClientsIcon height={20} width={20} />}
        />
        <NavigationItem
          label="Projects"
          icon={<ProjectsIcon height={20} width={20} />}
        />
      </NavigationItem>
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
