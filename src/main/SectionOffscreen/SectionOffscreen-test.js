import { React, expect, mount } from 'test/helper'
import SectionOffscreen from 'main/SectionOffscreen'

describe('SectionOffscreen', () => {
  it('should render with minimum props', () => {
    const component = mount(<SectionOffscreen />)

    expect(component).to.be.ok
  })
})
