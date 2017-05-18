import { React, toJSON, mount } from 'test/helper'
import SectionHeading from 'main/SectionHeading'

describe('SectionHeading', () => {
  it('should render with minimum props', () => {
    const component = mount(<SectionHeading />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
