import React from 'react'
import { Layout, Navigation, NavigationItem } from 'main'
import { Container } from 'shared'
import ComponentDoc from './ComponentDoc'

const App = () =>
  <Layout
    navigation={
      <Navigation brand="Portrait" theme="inverse">
        <NavigationItem label="Getting Started" />
        <NavigationItem label="Components" isActive>
          <NavigationItem label="Navigation" />
        </NavigationItem>
        <NavigationItem label="Customize" />
      </Navigation>
    }
    main={
      <Container>
        <ComponentDoc path="main/Navigation" />
      </Container>
    }
  />

export default App
