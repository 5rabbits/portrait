import { React, toJSON, mount } from 'test/helper'
import cx from 'classnames'
import Selectable from './Selectable'

describe('Selectable', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <Selectable
        options={[]}
        renderer={() => <span />}
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should allow to render options', () => {
    const component = mount(
      <Selectable
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 10', value: 10 },
          { label: 'Option 5', value: 5 },
        ]}
        renderer={
          ({
            options,
          }) =>
            <div>
              {options.map(option =>
                <div key={option.value}>{option.label}</div>,
              )}
            </div>
        }
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('should sort options', () => {
    const renderer = jest.fn().mockImplementation(() => <span />)

    mount(
      <Selectable
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 5', value: 5 },
          { label: 'Option 10', value: 10 },
        ]}
        renderer={renderer}
      />,
    )

    expect(renderer.mock.calls[0][0].options).toEqual([
      { label: 'Option 1', value: 1 },
      { label: 'Option 10', value: 10 },
      { label: 'Option 5', value: 5 },
    ])
  })

  describe('focusable elements', () => {
    it('should allow to define focusable elements', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 10', value: 10 },
            { label: 'Option 5', value: 5 },
          ]}
          renderer={
            ({
              focusableRef,
              focusedElement,
              options,
            }) =>
              <div>
                {options.map((option, index) =>
                  <div
                    className={cx({
                      focused: focusedElement === index,
                    })}
                    key={option.value}
                    ref={focusableRef(index)}
                    >
                    {option.label}
                  </div>,
                )}
              </div>
          }
        />,
      )
      const instance = component.instance()

      instance.setFocusedElement(2)

      expect(component.find('.focused').text()).toBe('Option 5')
    })

    it('should allow to give real focus to registered elements', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 10', value: 10 },
            { label: 'Option 5', value: 5 },
          ]}
          renderer={
            ({
              focusableRef,
              options,
            }) =>
              <div>
                <input ref={focusableRef('input')} />

                {options.map(option =>
                  <div key={option.value}>{option.label}</div>,
                )}
              </div>
          }
        />,
      )
      const instance = component.instance()

      instance.setFocusedElement('input', { virtual: false })

      expect(component.find('input').getDOMNode()).toBe(document.activeElement)
    })

    describe('if the element don\'t respond to focus', () => {
      it('should not fail', () => {
        class Example extends React.PureComponent {
          render() {
            return <span />
          }
        }

        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 10', value: 10 },
              { label: 'Option 5', value: 5 },
            ]}
            renderer={
              ({
                focusableRef,
                options,
              }) =>
                <div>
                  <Example ref={focusableRef('nonFocusable')} />

                  {options.map(option =>
                    <div key={option.value}>{option.label}</div>,
                  )}
                </div>
            }
          />,
        )
        const instance = component.instance()

        expect(() => {
          instance.setFocusedElement('nonFocusable', { virtual: false })
        }).not.toThrow()
      })
    })

    it('should cycle the focus when is a number', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ]}
          renderer={() => <span />}
        />,
      )
      const instance = component.instance()

      instance.setFocusedElement(-1)

      expect(instance.getFocusedElement()).toBe(2)

      instance.setFocusedElement(4)

      expect(instance.getFocusedElement()).toBe(1)
    })
  })

  describe('searching', () => {
    it('should allow to filter options', () => {
      const renderer = jest.fn().mockImplementation(() => <span />)

      mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ]}
          renderer={renderer}
          search="1"
        />,
      )

      expect(renderer.mock.calls[0][0].options).toEqual([
        { label: 'Option 1', value: 1 },
        { label: 'Option 10', value: 10 },
      ])
    })

    it('should expose a method to get search matches', () => {
      const renderer = jest.fn().mockImplementation(() => <span />)

      mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ]}
          renderer={renderer}
          search="10"
        />,
      )

      expect(renderer.mock.calls[0][0].getSearchMatches('Option 10')).toEqual([
        { fromIndex: 0, match: false, text: 'Option ', toIndex: 7 },
        { fromIndex: 7, match: true, text: '10', toIndex: 9 },
      ])
    })

    describe('if there is no search', () => {
      it('should returna default text match', () => {
        const renderer = jest.fn().mockImplementation(() => <span />)

        mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 5', value: 5 },
              { label: 'Option 10', value: 10 },
            ]}
            renderer={renderer}
          />,
        )

        expect(renderer.mock.calls[0][0].getSearchMatches('Option 10')).toEqual([
          { fromIndex: 0, match: false, text: 'Option 10', toIndex: 8 },
        ])
      })
    })
  })

  describe('when clicking outside', () => {
    it('should invoke props.onClickOutside', () => {
      const onClickOutside = jest.fn()
      const target = document.createElement('div')
      const container = document.createElement('div')

      document.body.appendChild(target)
      document.body.appendChild(container)

      mount(
        <Selectable
          onClickOutside={onClickOutside}
          options={[]}
          renderer={() => <span />}
        />,
        { attachTo: container },
      )

      target.dispatchEvent(new CustomEvent('click', { bubbles: true }))

      expect(onClickOutside).toHaveBeenCalled()
    })

    it('should remove focus if props.blurOnClickOutside', () => {
      const target = document.createElement('div')
      const container = document.createElement('div')

      document.body.appendChild(target)
      document.body.appendChild(container)

      const component = mount(
        <Selectable
          blurOnClickOutside
          options={[]}
          renderer={() => <span />}
        />,
        { attachTo: container },
      )
      const instance = component.instance()

      instance.setFocused(true)

      expect(instance.isFocused()).toBe(true)

      target.dispatchEvent(new CustomEvent('click', { bubbles: true }))

      expect(instance.isFocused()).toBe(false)
    })

    it('should stop listening when unmounting', () => {
      const onClickOutside = jest.fn()
      const target = document.createElement('div')
      const container = document.createElement('div')

      document.body.appendChild(target)
      document.body.appendChild(container)

      const component = mount(
        <Selectable
          onClickOutside={onClickOutside}
          options={[]}
          renderer={() => <span />}
        />,
        { attachTo: container },
      )

      component.unmount()
      target.dispatchEvent(new CustomEvent('click', { bubbles: true }))

      expect(onClickOutside).not.toHaveBeenCalled()
    })
  })

  describe('overflow area', () => {
    it('should set a relative position on the overflow container if not specified', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ overflowRef }) => <div ref={overflowRef()} />}
        />,
      )

      expect(component.find('div').getDOMNode().style.position).toBe('relative')
    })

    it('should set a relative position on the overflow container if is static', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ overflowRef }) => <div ref={overflowRef()} style={{ position: 'static' }} />}
        />,
      )

      expect(component.find('div').getDOMNode().style.position).toBe('relative')
    })

    it('should not fail when unmounting', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ overflowRef }) => <div ref={overflowRef()} />}
        />,
      )

      expect(() => {
        component.unmount()
      }).not.toThrow()
    })
  })

  describe('when receiving new props', () => {
    describe('if props.options changes', () => {
      it('should sort the new options', () => {
        const component = mount(
          <Selectable
            options={[]}
            renderer={() => <span />}
          />,
        )
        const instance = component.instance()

        component.setProps({
          options: [
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ],
        })

        expect(instance.getVisibleOptions()).toEqual([
          { label: 'Option 1', value: 1 },
          { label: 'Option 10', value: 10 },
          { label: 'Option 5', value: 5 },
        ])
      })
    })

    describe('if props.value changes', () => {
      it('should set the newly selected option', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 5', value: 5 },
            ]}
            renderer={() => <span />}
            value={1}
          />,
        )
        const instance = component.instance()

        component.setProps({ value: 5 })

        expect(instance.getSelectedOption()).toEqual({ label: 'Option 5', value: 5 })

        component.setProps({ value: null })

        expect(instance.getSelectedOption()).toBe(null)
      })
    })
  })

  it('should expose search helpers', () => {
    const component = mount(
      <Selectable
        options={[]}
        renderer={() => <span />}
      />,
    )
    const instance = component.instance()

    instance.setSearch('test')

    expect(instance.getSearch()).toBe('test')
  })

  it('should expose value helpers', () => {
    const component = mount(
      <Selectable
        options={[]}
        renderer={() => <span />}
      />,
    )
    const instance = component.instance()

    instance.setValue(2)

    expect(instance.getValue()).toBe(2)
  })

  it('should expose focus helpers', () => {
    const component = mount(
      <Selectable
        options={[]}
        renderer={() => <span />}
      />,
    )
    const instance = component.instance()

    instance.focus()

    expect(instance.isFocused()).toBe(true)

    instance.blur()

    expect(instance.isFocused()).toBe(false)
  })

  describe('if trying to move the scroll of a node outside the overflow container', () => {
    it('should indicate that is visible', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ overflowRef }) => <div ref={overflowRef()} />}
        />,
      )
      const instance = component.instance().getWrappedInstance()
      const node = document.createElement('div')

      expect(instance.isNodeInViewport(node).inViewport).toBe(true)
    })
  })

  describe('if trying to move the scroll on a node inside the overflow container', () => {
    it('should calculate if it is in the viewport', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ focusableRef, overflowRef }) =>
            <div ref={overflowRef()}>
              <div ref={focusableRef(0)} />
            </div>
          }
        />,
      )
      const instance = component.instance().getWrappedInstance()
      const info = instance.isNodeInViewport(instance.getFocusableNode(0))

      expect(Object.keys(info)).toEqual([
        'inViewport', 'visibleFromBottom', 'visibleFromTop',
      ])
    })
  })

  describe('scrolling to focused', () => {
    describe('if the element is hidden on the bottom the overflow', () => {
      it('should scroll to node to the bottom', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
            ]}
            renderer={({ focusableRef, overflowRef }) =>
              <div ref={overflowRef()}>
                <div ref={focusableRef(0)} />
              </div>
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        instance.focusableRefs[0] = {}
        instance.isNodeInViewport = () => ({ visibleFromBottom: false })
        instance.setFocusedElement(0)

        expect(() => {
          instance.scrollToFocusedElement()
        }).not.toThrow()
      })
    })

    describe('if the element is hidden on the top the overflow', () => {
      it('should scroll to node to the bottom', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
            ]}
            renderer={({ focusableRef, overflowRef }) =>
              <div ref={overflowRef()}>
                <div ref={focusableRef(0)} />
              </div>
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        instance.focusableRefs[0] = {}
        instance.isNodeInViewport = () => ({ visibleFromBottom: true, visibleFromTop: false })
        instance.setFocusedElement(0)

        expect(() => {
          instance.scrollToFocusedElement()
        }).not.toThrow()
      })
    })

    describe('if is entirely visible', () => {
      it('should not try to scrollNodeToViewport', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
            ]}
            renderer={({ focusableRef, overflowRef }) =>
              <div ref={overflowRef()}>
                <div ref={focusableRef(0)} />
              </div>
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        instance.scrollNodeToViewport = jest.fn()
        instance.isNodeInViewport = () => ({ visibleFromBottom: true, visibleFromTop: true })
        instance.setFocusedElement(0)
        instance.scrollToFocusedElement()

        expect(instance.scrollNodeToViewport).not.toHaveBeenCalled()
      })
    })

    describe('if there is no overflow defined', () => {
      it('should not try to scrollNodeToViewport', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
            ]}
            renderer={({ focusableRef }) =>
              <div>
                <div ref={focusableRef(0)} />
              </div>
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        instance.scrollNodeToViewport = jest.fn()
        instance.setFocusedElement(0)
        instance.scrollToFocusedElement()

        expect(instance.scrollNodeToViewport).not.toHaveBeenCalled()
      })
    })
  })
})
