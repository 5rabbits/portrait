import React, { PureComponent } from 'react';

import { Layout, Navigation, Section } from './main';
import ControlsSection from './ControlsSection';
import Content from './Content';

export default class App extends PureComponent {
  buildNavigation() {
    return <Navigation />;
  }

  buildMain() {
    return (
      <Section controls={<ControlsSection/>}
               content={<div><Content/></div>} />
    );
  }

  render() {
    return (
      <Layout header="header"
              navigation={this.buildNavigation()}
              main={this.buildMain()}/>
    );
  }
}
