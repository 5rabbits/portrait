import React from 'react'
import PropTypes from 'prop-types'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

beforeEach(() => {
  let sandbox = document.getElementById('sandbox')

  if (sandbox && sandbox.parentNode) {
    sandbox.parentNode.removeChild(sandbox)
  }

  sandbox = document.createElement('div')
  sandbox.id = 'sandbox'

  document.body.appendChild(sandbox)
})

export {
  PropTypes,
  React,
  shallow,
  mount,
  toJSON,
}
