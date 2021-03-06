import React from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import App from './App'

const history = process.env.NODE_ENV === 'production' ?
  hashHistory : browserHistory

const Routes = () =>
  <Router history={history}>
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

      <Route
        getComponent={(_nextState, callback) => {
          require.ensure([], require => {
            callback(null, require('./CSS'))
          }, 'css')
        }}
        path="css"
        >
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./css/Tools'))
            }, 'tools')
          }}
          path="tools"
        />
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./css/Core'))
            }, 'core')
          }}
          path="core"
        />
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./css/Common'))
            }, 'common')
          }}
          path="common"
        />
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./css/Layouts'))
            }, 'layouts')
          }}
          path="layouts"
        />
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./css/Utils'))
            }, 'utils')
          }}
          path="utils"
        />
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('./css/Components'))
            }, 'components')
          }}
          path="components"
        />
      </Route>

      <Route
        getComponent={(_nextState, callback) => {
          require.ensure([], require => {
            callback(null, require('./Examples'))
          }, 'examples')
        }}
        path="examples"
        >
        <Route
          getComponent={(_nextState, callback) => {
            require.ensure([], require => {
              callback(null, require('../examples/timebillingx'))
            }, 'example-timebillingx')
          }}
          path="timebillingx"
        />
      </Route>
    </Route>
  </Router>

export default Routes
