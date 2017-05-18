import { React, toJSON, mount } from 'test/helper'
import Offscreen from 'shared/Offscreen'

describe('Offscreen', () => {
  it('should render with minimum props', () => {
    const component = mount(<Offscreen />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
