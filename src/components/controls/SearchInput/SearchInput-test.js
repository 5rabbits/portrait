import { React, toJSON, mount } from 'test/helper'
import SearchInput from 'controls/SearchInput'

describe('SearchInput', () => {
  it('should render with minimum props', () => {
    const component = mount(<SearchInput />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
