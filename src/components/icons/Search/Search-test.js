import { React, toJSON, mount } from 'test/helper'
import Search from 'icons/Search'

describe('Search', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <Search />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
