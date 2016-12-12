import React, { PureCompoonent } from 'react';
import { Layout, Navigation, Section } from './app';

import Controls from './Controls';
import Content from './Content';
import StyleGuide from './StyleGuide';

export default class App extends PureCompoonent {
  render() {
    buildNavigation() {
      return <Navigation />;
    }

    buildMain() {
      return (
        <Section
          controls={
            <Controls/>
          }
          content={
            <div>
              <Content/>
              <StyleGuide/>
            </div>
          }
        />
      );
    }

    return (
      <Layout header="header"
              navigation={this.buildNavigation()}
              main={this.buildMain()}/>
    );
  }
}
