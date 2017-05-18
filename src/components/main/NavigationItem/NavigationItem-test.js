import { React, toJSON, mount } from 'test/helper'
import NavigationItem from 'main/NavigationItem'

describe('NavigationItem', () => {
  it('should render with minimum props', () => {
    const component = mount(<NavigationItem />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
