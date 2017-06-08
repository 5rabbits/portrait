import { React, toJSON, mount } from 'test/helper'
import ScrollLock from 'shared/ScrollLock'

describe('ScrollLock', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <ScrollLock>
        <div />
      </ScrollLock>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('componentDidMount()', () => {
    it('should invoke toggleLock passing true', () => {
      const component = mount(
        <ScrollLock>
          <div />
        </ScrollLock>,
      )
      const instance = component.instance()

      instance.toggleLock = jest.fn()
      instance.componentDidMount()

      expect(instance.toggleLock).toHaveBeenCalledTimes(1)
      expect(instance.toggleLock).toHaveBeenCalledWith(true)
    })
  })

  describe('componentWillUpdate()', () => {
    it('should invoke toggleLock passing false', () => {
      const component = mount(
        <ScrollLock>
          <div />
        </ScrollLock>,
      )
      const instance = component.instance()

      instance.toggleLock = jest.fn()
      instance.componentWillUpdate()

      expect(instance.toggleLock).toHaveBeenCalledTimes(1)
      expect(instance.toggleLock).toHaveBeenCalledWith(false)
    })
  })

  describe('componentDidUpdate()', () => {
    it('should invoke toggleLock passing true', () => {
      const component = mount(
        <ScrollLock>
          <div />
        </ScrollLock>,
      )
      const instance = component.instance()

      instance.toggleLock = jest.fn()
      instance.componentDidUpdate()

      expect(instance.toggleLock).toHaveBeenCalledTimes(1)
      expect(instance.toggleLock).toHaveBeenCalledWith(true)
    })
  })

  describe('componentWillUnmount()', () => {
    it('should invoke toggleLock passing false', () => {
      const component = mount(
        <ScrollLock>
          <div />
        </ScrollLock>,
      )
      const instance = component.instance()

      instance.toggleLock = jest.fn()
      instance.componentWillUnmount()

      expect(instance.toggleLock).toHaveBeenCalledTimes(1)
      expect(instance.toggleLock).toHaveBeenCalledWith(false)
    })
  })

  describe('onScrollHandler(event)', () => {
    describe('if the element does not has scroll', () => {
      it('should return true', () => {
        const component = mount(
          <ScrollLock>
            <div>
              <div id="scrollable-contents" />
            </div>
          </ScrollLock>,
        )
        const instance = component.instance()

        instance.getNodeMeasures = jest.fn(() => ({
          scrollTop: 0,
          scrollHeight: 10,
          clientHeight: 10,
        }))

        const event = {
          target: component.find('#scrollable-contents').getDOMNode(),
        }
        const returnValue = instance.onScrollHandler(event)

        expect(returnValue).toBe(true)
      })
    })

    describe('if the element has scroll', () => {
      describe('if the user is scrolling down and the scroll is already at the bottom', () => {
        it('should keep the scroll at the bottom', () => {
          const component = mount(
            <ScrollLock>
              <div>
                <div id="scrollable-contents" />
              </div>
            </ScrollLock>,
          )
          const instance = component.instance()
          const node = component.getDOMNode()
          const event = {
            deltaY: 1,
            target: component.find('#scrollable-contents').getDOMNode(),
          }

          instance.getNodeMeasures = jest.fn(() => ({
            scrollTop: 12,
            scrollHeight: 12,
            clientHeight: 10,
          }))

          instance.cancelScrollEvent = jest.fn()
          instance.onScrollHandler(event)

          expect(node.scrollTop).toBe(12)
        })

        it('should invoke cancelScrollEvent passing the event', () => {
          const component = mount(
            <ScrollLock>
              <div>
                <div id="scrollable-contents" />
              </div>
            </ScrollLock>,
          )
          const instance = component.instance()
          const event = {
            deltaY: 1,
            target: component.find('#scrollable-contents').getDOMNode(),
          }

          instance.getNodeMeasures = jest.fn(() => ({
            scrollTop: 12,
            scrollHeight: 12,
            clientHeight: 10,
          }))

          instance.cancelScrollEvent = jest.fn()
          instance.onScrollHandler(event)

          expect(instance.cancelScrollEvent).toHaveBeenCalledTimes(1)
          expect(instance.cancelScrollEvent).toHaveBeenCalledWith(event)
        })
      })

      describe('if the user is scrolling up and the scroll is already at the top', () => {
        it('should keep the scroll at the top', () => {
          const component = mount(
            <ScrollLock>
              <div>
                <div id="scrollable-contents" />
              </div>
            </ScrollLock>,
          )
          const instance = component.instance()
          const node = component.getDOMNode()
          const event = {
            deltaY: -1,
            target: component.find('#scrollable-contents').getDOMNode(),
          }

          instance.getNodeMeasures = jest.fn(() => ({
            scrollTop: 0,
            scrollHeight: 12,
            clientHeight: 10,
          }))

          instance.cancelScrollEvent = jest.fn()
          instance.onScrollHandler(event)

          expect(node.scrollTop).toBe(0)
        })

        it('should invoke cancelScrollEvent passing the event', () => {
          const component = mount(
            <ScrollLock>
              <div>
                <div id="scrollable-contents" />
              </div>
            </ScrollLock>,
          )
          const instance = component.instance()
          const event = {
            deltaY: -1,
            target: component.find('#scrollable-contents').getDOMNode(),
          }

          instance.getNodeMeasures = jest.fn(() => ({
            scrollTop: 0,
            scrollHeight: 12,
            clientHeight: 10,
          }))

          instance.cancelScrollEvent = jest.fn()
          instance.onScrollHandler(event)

          expect(instance.cancelScrollEvent).toHaveBeenCalledTimes(1)
          expect(instance.cancelScrollEvent).toHaveBeenCalledWith(event)
        })
      })

      describe('if the user is scrolling between the scroll bounds', () => {
        it('should return true', () => {
          const component = mount(
            <ScrollLock>
              <div>
                <div id="scrollable-contents" />
              </div>
            </ScrollLock>,
          )
          const instance = component.instance()
          const event = {
            deltaY: 1,
            target: component.find('#scrollable-contents').getDOMNode(),
          }

          instance.getNodeMeasures = jest.fn(() => ({
            scrollTop: 0,
            scrollHeight: 12,
            clientHeight: 10,
          }))

          expect(instance.onScrollHandler(event)).toBe(true)
        })
      })
    })
  })

  describe('cancelScrollEvent(event)', () => {
    it('should call prevent the event propagation in a cross-browser way', () => {
      const event = {
        stopImmediatePropagation: jest.fn(),
        preventDefault: jest.fn(),
        returnValue: null,
      }
      const component = mount(
        <ScrollLock>
          <div />
        </ScrollLock>,
      )
      const instance = component.instance()
      const returnValue = instance.cancelScrollEvent(event)

      expect(event.stopImmediatePropagation).toHaveBeenCalledTimes(1)
      expect(event.preventDefault).toHaveBeenCalledTimes(1)
      expect(event.returnValue).toBe(false)
      expect(returnValue).toBe(false)
    })
  })

  describe('toggleLock(lock)', () => {
    describe('if lock is true', () => {
      it('should bind the "wheel" event to onScrollHandler', () => {
        const component = mount(
          <ScrollLock>
            <div />
          </ScrollLock>,
        )
        const instance = component.instance()
        const node = component.getDOMNode()

        node.addEventListener = jest.fn()
        instance.toggleLock(true)

        expect(node.addEventListener).toHaveBeenCalledTimes(1)
        expect(node.addEventListener).toHaveBeenCalledWith('wheel', instance.onScrollHandler, false)
      })
    })

    describe('if lock is false', () => {
      it('should remove the "wheel" bind', () => {
        const component = mount(
          <ScrollLock>
            <div />
          </ScrollLock>,
        )
        const instance = component.instance()
        const node = component.getDOMNode()

        node.removeEventListener = jest.fn()
        instance.toggleLock(false)

        expect(node.removeEventListener).toHaveBeenCalledTimes(1)
        expect(node.removeEventListener).toHaveBeenCalledWith('wheel', instance.onScrollHandler, false)
      })
    })
  })

  describe('getNodeMeasures(node)', () => {
    it('should return the scroll related node measures', () => {
      const component = mount(
        <ScrollLock>
          <div />
        </ScrollLock>,
      )
      const instance = component.instance()
      const node = {
        scrollTop: 1,
        scrollHeight: 12,
        clientHeight: 10,
      }

      expect(instance.getNodeMeasures(node)).toEqual({
        scrollTop: 1,
        scrollHeight: 12,
        clientHeight: 10,
      })
    })
  })
})
