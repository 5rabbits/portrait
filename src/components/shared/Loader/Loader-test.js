import { React, toJSON, mount } from 'test/helper'
import Loader from 'shared/Loader'

describe('Loader', () => {
  it('should render with minimum props', () => {
    const component = mount(<Loader />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
