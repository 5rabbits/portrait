import React, { PropTypes } from 'react'
import { Layout, Navigation, NavigationItem } from 'main'
import { Link } from 'react-router'
import manifest from '../manifest'

const App = ({ children, router }) => {
  if (router.isActive('/examples')) {
    return children
  }

  return (
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
            component={Link}
            label="CSS"
            isActive={router.isActive('/css')}
            >
            <NavigationItem
              component={Link}
              label="Base"
              isActive={router.isActive('/css/base', true)}
              to="/css/base"
            />
          </NavigationItem>

          <NavigationItem
            isActive={router.isActive('/components')}
            label="Components"
            >
            {manifest.map(component =>
              <NavigationItem
                component={Link}
                key={component.name}
                label={component.name}
                to={`/components/${component.name}`}
                isActive={router.isActive(`/components/${component.name}`, true)}
              />,
            )}
          </NavigationItem>

          <NavigationItem
            component={Link}
            label="Examples"
            isActive={router.isActive('/examples')}
            >
            <NavigationItem
              component={Link}
              label="Timeflow"
              isActive={router.isActive('/examples/timeflow', true)}
              to="/examples/timeflow"
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
  )
}

App.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object,
}

export default App
