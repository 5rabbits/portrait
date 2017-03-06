import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import GettingStarted from './GettingStarted'
import Components from './Components'
import Customize from './Customize'

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GettingStarted} />
      <Route path="components">
        <Route path="**" component={Components} />
      </Route>
      <Route path="customize" component={Customize} />
    </Route>
  </Router>

export default Routes
