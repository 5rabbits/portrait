import React from 'react'
import chai, { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
chai.use(chaiEnzyme())

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
  expect,
  sinon,
  shallow,
  mount,
}
