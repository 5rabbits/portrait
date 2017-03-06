import React, { PropTypes } from 'react'
import { Layout, Navigation, NavigationItem } from 'main'
import { Link } from 'react-router'

const App = ({ children, router }) =>
  <Layout
    navigation={
      <Navigation brand="Portrait" theme="inverse">
        <NavigationItem
          component={Link}
          label="Getting Started"
          isActive={router.isActive('/', true)}
          to="/"
        />

        <NavigationItem
          isActive={router.isActive('/components')}
          label="Components"
          >
          <NavigationItem
            component={Link}
            label="Navigation"
            to="/components/main/Navigation"
            isActive={router.isActive('/components/main/Navigation', true)}
          />
        </NavigationItem>

        <NavigationItem
          component={Link}
          label="Customize"
          to="/customize"
          isActive={router.isActive('/customize', true)}
        />
      </Navigation>
    }
    main={children}
  />

App.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object,
}

export default App
