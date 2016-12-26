import { React, expect, mount } from 'test/helper'
import BlockItem from 'elements/BlockItem'

describe('BlockItem', () => {
  it('should render with minimum props', () => {
    const component = mount(<BlockItem />)

    expect(component).to.be.ok
  })
})
