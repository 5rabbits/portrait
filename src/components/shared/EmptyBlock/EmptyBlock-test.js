import { React, toJSON, mount } from 'test/helper'
import EmptyBlock from 'shared/EmptyBlock'

describe('EmptyBlock', () => {
  it('should render with minimum props', () => {
    const component = mount(<EmptyBlock />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
