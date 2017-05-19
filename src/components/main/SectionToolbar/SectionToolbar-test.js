import { React, toJSON, mount } from 'test/helper'
import SectionToolbar from 'main/SectionToolbar'

describe('SectionToolbar', () => {
  it('should render with minimum props', () => {
    const component = mount(<SectionToolbar title="Test" />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
