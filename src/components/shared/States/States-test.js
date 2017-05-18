import { React, toJSON, mount } from 'test/helper'
import States from 'shared/States'

describe('States', () => {
  it('should render with minimum props', () => {
    const component = mount(<States />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
