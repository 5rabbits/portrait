import { React, expect, mount } from 'test/helper'
import Controls from 'main/Controls'

describe('Controls', () => {
  it('should render with minimum props', () => {
    const component = mount(<Controls />)

    expect(component).to.be.ok
  })
})
