import { React, toJSON, mount } from 'test/helper'
import Spinner from 'shared/Spinner'

describe('Spinner', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <Spinner />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('if props.backgroundColor is defined but props.color is not', () => {
    it('should add the class "Spinner--force-color"', () => {
      const component = mount(
        <Spinner
          backgroundColor="#f00"
        />,
      )

      expect(toJSON(component)).toMatchSnapshot()
    })
  })
})
