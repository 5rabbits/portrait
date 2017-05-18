import { React, expect, mount } from 'test/helper'
import SectionToolbar from 'main/SectionToolbar'

describe('SectionToolbar', () => {
  it('should render with minimum props', () => {
    const component = mount(<SectionToolbar title="Test" />)

    expect(component).to.be.ok
  })
})
