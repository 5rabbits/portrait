import { React, expect, mount } from 'test/helper'
import TypeCaption from 'elements/TypeCaption'

describe('TypeCaption', () => {
  it('should render with minimum props', () => {
    const component = mount(<TypeCaption />)

    expect(component).to.be.ok
  })
})
