import { React, expect, mount } from 'test/helper'
import Container from 'shared/Container'

describe('Container', () => {
  it('should render with minimum props', () => {
    const component = mount(<Container />)

    expect(component).to.be.ok
  })
})
