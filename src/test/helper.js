import React from 'react'
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
  React,
  shallow,
  mount,
  toJSON,
}
