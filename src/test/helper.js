import React from 'react'
import PropTypes from 'prop-types'
import { shallow, mount, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

global.requestAnimationFrame = callback => callback()

beforeEach(() => {
  let sandbox = document.getElementById('sandbox')

  if (sandbox && sandbox.parentNode) {
    sandbox.parentNode.removeChild(sandbox)
  }

  sandbox = document.createElement('div')
  sandbox.id = 'sandbox'

  document.body.appendChild(sandbox)
})

configure({ adapter: new Adapter() })

export {
  PropTypes,
  React,
  shallow,
  mount,
  toJSON,
}
