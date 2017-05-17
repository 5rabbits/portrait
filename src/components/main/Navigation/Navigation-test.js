import { React, expect, mount } from 'test/helper'
import Navigation from 'main/Navigation'

describe('Navigation', () => {
  it('should render with minimum props', () => {
    const component = mount(<Navigation />)

    expect(component).to.be.ok
  })
})
