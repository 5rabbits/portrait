import { React, expect, mount } from 'test/helper'
import EmptyBlock from 'shared/EmptyBlock'

describe('EmptyBlock', () => {
  it('should render with minimum props', () => {
    const component = mount(<EmptyBlock />)

    expect(component).to.be.ok
  })
})