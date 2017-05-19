import { React, toJSON, mount } from 'test/helper'
import Navigation from 'main/Navigation'

describe('Navigation', () => {
  it('should render with minimum props', () => {
    const component = mount(<Navigation />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render the brand if specified', () => {
    const component = mount(<Navigation brand="TEST" />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
