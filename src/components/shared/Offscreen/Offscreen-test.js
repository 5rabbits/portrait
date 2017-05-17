import { React, expect, mount } from 'test/helper'
import Offscreen from 'shared/Offscreen'

describe('Offscreen', () => {
  it('should render with minimum props', () => {
    const component = mount(<Offscreen />)

    expect(component).to.be.ok
  })
})
