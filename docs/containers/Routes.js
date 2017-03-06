import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'

const Routes = () =>
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute
        getComponent={(_nextState, callback) => {
          require.ensure([], require => {
            callback(null, require('./GettingStarted'))
          }, 'getting-started')
        }}
      />

      <Route path="components">
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./Components'))
            }, 'components')
          }}
          path="**"
        />
      </Route>

      <Route
        getComponent={(_nextState, callback) => {
          require.ensure([], require => {
            callback(null, require('./Customize'))
          }, 'customize')
        }}
        path="customize"
      />
    </Route>
  </Router>

export default Routes
