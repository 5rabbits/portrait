import { React, expect, mount } from 'test/helper'
import Section from 'main/Section'

describe('Section', () => {
  it('should render with minimum props', () => {
    const component = mount(<Section />)

    expect(component).to.be.ok
  })
})
