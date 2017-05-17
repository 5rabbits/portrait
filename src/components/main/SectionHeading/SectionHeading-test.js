import { React, expect, mount } from 'test/helper'
import SectionHeading from 'main/SectionHeading'

describe('SectionHeading', () => {
  it('should render with minimum props', () => {
    const component = mount(<SectionHeading />)

    expect(component).to.be.ok
  })
})
