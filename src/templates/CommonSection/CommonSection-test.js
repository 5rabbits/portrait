import { React, expect, mount } from 'test/helper'
import CommonSection from 'templates/CommonSection'

describe('CommonSection', () => {
  it('should render with minimum props', () => {
    const component = mount(<CommonSection />)

    expect(component).to.be.ok
  })
})
