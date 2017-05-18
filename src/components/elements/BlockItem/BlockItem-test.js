import { React, toJSON, mount } from 'test/helper'
import BlockItem from 'elements/BlockItem'

describe('BlockItem', () => {
  it('should render with minimum props', () => {
    const component = mount(<BlockItem />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
