import { React, toJSON, mount } from 'test/helper'
import LoadingScreen from 'shared/LoadingScreen'

describe('LoadingScreen', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <LoadingScreen />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('if props.text is defined', () => {
    it('should display the text container', () => {
      const component = mount(
        <LoadingScreen text="test" />,
      )

      expect(toJSON(component)).toMatchSnapshot()
    })
  })
})
