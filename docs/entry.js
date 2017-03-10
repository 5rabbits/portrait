import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './containers/Routes'

ReactDOM.render(<Routes />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
