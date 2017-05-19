import { React, toJSON, mount } from 'test/helper'
import NavigationItem from 'main/NavigationItem'

describe('NavigationItem', () => {
  it('should render with minimum props', () => {
    const component = mount(<NavigationItem />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should render nested NavigationItem as a dropdown', () => {
    const component = mount(
      <NavigationItem>
        <NavigationItem />
        <NavigationItem />
      </NavigationItem>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should allow to define an icon', () => {
    const component = mount(<NavigationItem icon="test" />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
