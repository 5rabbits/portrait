import { React, toJSON, mount } from 'test/helper'
import Layout from 'main/Layout'

describe('Layout', () => {
  it('should render with minimum props', () => {
    const component = mount(<Layout />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
