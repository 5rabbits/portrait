import { React, expect, mount } from 'test/helper'
import NavigationItem from 'main/NavigationItem'

describe('NavigationItem', () => {
  it('should render with minimum props', () => {
    const component = mount(<NavigationItem />)

    expect(component).to.be.ok
  })
})
