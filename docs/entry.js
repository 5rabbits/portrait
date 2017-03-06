import React from 'react'
import ReactDOM from 'react-dom'
import Docs from './Docs'

ReactDOM.render(<Docs />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
