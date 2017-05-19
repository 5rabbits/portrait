import { React, mount, toJSON } from 'test/helper'
import Button from 'controls/Button'

describe('Button', () => {
  it('should render with minimum props', () => {
    const component = mount(<Button />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
