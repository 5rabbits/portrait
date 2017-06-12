import { React, toJSON, mount } from 'test/helper'
import RoundButton from 'controls/RoundButton'

describe('RoundButton', () => {
  it('should render with minimum props', () => {
    const component = mount(<RoundButton />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
