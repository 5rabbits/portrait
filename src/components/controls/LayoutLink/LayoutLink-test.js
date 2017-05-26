import { React, toJSON, mount } from 'test/helper'
import LayoutLink from 'controls/LayoutLink'

describe('LayoutLink', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <LayoutLink>test</LayoutLink>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('handleClick(event)', () => {
    it('should prevent default', () => {
      const component = mount(
        <LayoutLink>test</LayoutLink>,
      )
      const instance = component.instance()
      const event = { preventDefault: jest.fn() }

      instance.handleClick(event)

      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    describe('if props.onClick is defined', () => {
      it('should invoke props.onClick passing the event', () => {
        const handleClick = jest.fn()
        const component = mount(
          <LayoutLink onClick={handleClick}>test</LayoutLink>,
        )
        const instance = component.instance()
        const event = { preventDefault: jest.fn() }

        instance.handleClick(event)

        expect(handleClick).toHaveBeenCalledTimes(1)
        expect(handleClick).toHaveBeenCalledWith(event)
      })
    })
  })

  describe('if props.href is "#"', () => {
    it('should assign this.handleClick to the underlying anchor', () => {
      const component = mount(
        <LayoutLink href="#">test</LayoutLink>,
      )
      const instance = component.instance()

      expect(component.find('a').prop('onClick')).toBe(instance.handleClick)
    })
  })

  describe('if props.href is not "#"', () => {
    it('should assign props.onClick to the underlying anchor', () => {
      const handleClick = jest.fn()
      const component = mount(
        <LayoutLink
          href="/something"
          onClick={handleClick}
          >
          test
        </LayoutLink>,
      )

      expect(component.find('a').prop('onClick')).toBe(handleClick)
    })
  })
})
