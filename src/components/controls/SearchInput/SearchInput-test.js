import { React, expect, mount } from 'test/helper'
import SearchInput from 'controls/SearchInput'

describe('SearchInput', () => {
  it('should render with minimum props', () => {
    const component = mount(<SearchInput />)

    expect(component).to.be.ok
  })
})
