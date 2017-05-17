import { React, expect, mount } from 'test/helper'
import SearchForm from 'controls/SearchForm'

describe('SearchForm', () => {
  it('should render with minimum props', () => {
    const component = mount(<SearchForm />)

    expect(component).to.be.ok
  })
})
