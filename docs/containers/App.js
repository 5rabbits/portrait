import React, { PropTypes } from 'react'
import { Layout, Navigation, NavigationItem } from 'main'
import { Link } from 'react-router'

const COMPONENTS = [
  'controls/RoundButton',
  'controls/SearchForm',
  'elements/BlockItem',
  'main/Controls',
  'main/Layout',
  'main/Navigation',
  'main/NavigationItem',
  'main/Section',
  'main/SectionHeading',
  'main/SectionOffscreen',
  'shared/Container',
  'shared/EmptyBlock',
  'shared/EmptyView',
  'shared/Grid',
  'shared/Loader',
  'shared/Offscreen',
  'shared/States',
  'shared/ActionPanel',
  'templates/CommonSection',
]

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
          {COMPONENTS.map((component, index) =>
            <NavigationItem
              component={Link}
              key={index}
              label={component.split('/').pop()}
              to={`/components/${component}`}
              isActive={router.isActive(`/components/${component}`, true)}
            />,
          )}
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
