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

  describe('when moving the cursor out of the component', () => {
    it('should clear the element highlight', () => {
      const onFocusedElementChange = jest.fn()
      const component = mount(
        <Selectable
          onFocusedElementChange={onFocusedElementChange}
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ]}
          renderer={() => <div />}
        />,
      )

      component.simulate('mouseleave')

      expect(onFocusedElementChange).toHaveBeenCalledTimes(1)
      expect(onFocusedElementChange).toHaveBeenCalledWith(null)
    })

    it('should call the onMouseLeave prop on the container node', () => {
      const onMouseLeave = jest.fn()
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ]}
          renderer={() => <div onMouseLeave={onMouseLeave} />}
        />,
      )

      component.simulate('mouseleave')

      expect(onMouseLeave).toHaveBeenCalledTimes(1)
    })
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

  describe('search input', () => {
    describe('when it changes', () => {
      it('should filter options', () => {
        const renderer = jest.fn().mockImplementation(({ getInputProps, options }) =>
          <input {...getInputProps()} options={options} />,
        )
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 10', value: 10 },
              { label: 'Option 5', value: 5 },
            ]}
            renderer={renderer}
          />,
        )

        component.find('input').simulate('change', { target: { value: '1' } })

        expect(renderer.mock.calls[renderer.mock.calls.length - 1][0].options).toEqual([
          { label: 'Option 1', value: 1 },
          { label: 'Option 10', value: 10 },
        ])
      })

      it('should invoke the input onChange prop', () => {
        const onChange = jest.fn()
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 10', value: 10 },
              { label: 'Option 5', value: 5 },
            ]}
            renderer={({ getInputProps, options }) =>
              <input
                {...getInputProps({
                  onChange,
                })}
                options={options}
              />
            }
          />,
        )

        component.find('input').simulate('change')

        expect(onChange).toHaveBeenCalled()
      })
    })

    describe('when pressing the arrow down key', () => {
      describe('if there is no option focused', () => {
        it('should focus the first option', () => {
          const component = mount(
            <Selectable
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 10', value: 10 },
                { label: 'Option 5', value: 5 },
              ]}
              renderer={({ getInputProps }) =>
                <input {...getInputProps()} />
              }
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.setFocusedElement(null)
          component.find('input').simulate('keydown', { key: 'ArrowDown' })

          expect(instance.getFocusedElement()).toBe(0)
        })
      })

      describe('if there is an option focused', () => {
        it('should focus the next option', () => {
          const component = mount(
            <Selectable
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 10', value: 10 },
                { label: 'Option 5', value: 5 },
              ]}
              renderer={({ getInputProps }) =>
                <input {...getInputProps()} />
              }
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.setFocusedElement(0)
          component.find('input').simulate('keydown', { key: 'ArrowDown' })

          expect(instance.getFocusedElement()).toBe(1)
        })
      })
    })

    describe('when pressing the arrow up key', () => {
      describe('if there is no option focused', () => {
        it('should focus the last option', () => {
          const component = mount(
            <Selectable
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 10', value: 10 },
                { label: 'Option 5', value: 5 },
              ]}
              renderer={({ getInputProps }) =>
                <input {...getInputProps()} />
              }
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.setFocusedElement(null)
          component.find('input').simulate('keydown', { key: 'ArrowUp' })

          expect(instance.getFocusedElement()).toBe(2)
        })
      })

      describe('if there is an option focused', () => {
        it('should focus the previous option', () => {
          const component = mount(
            <Selectable
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 10', value: 10 },
                { label: 'Option 5', value: 5 },
              ]}
              renderer={({ getInputProps }) =>
                <input {...getInputProps()} />
              }
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.setFocusedElement(1)
          component.find('input').simulate('keydown', { key: 'ArrowUp' })

          expect(instance.getFocusedElement()).toBe(0)
        })
      })
    })

    describe('when pressing the enter key', () => {
      it('should selected the focused option', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 10', value: 10 },
              { label: 'Option 5', value: 5 },
            ]}
            renderer={({ getInputProps }) =>
              <input {...getInputProps()} />
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        instance.setFocusedElement(1)
        component.find('input').simulate('keydown', { key: 'Enter' })

        expect(instance.getValue()).toBe(10)
      })
    })

    describe('when pressing a key', () => {
      it('should invoke the input onKeyDown prop', () => {
        const onKeyDown = jest.fn()
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 10', value: 10 },
              { label: 'Option 5', value: 5 },
            ]}
            renderer={({ getInputProps }) =>
              <input {...getInputProps({ onKeyDown })} />
            }
          />,
        )

        component.find('input').simulate('keydown')

        expect(onKeyDown).toHaveBeenCalled()
      })
    })
  })

  describe('clear search button', () => {
    describe('when clicked', () => {
      it('should clear the current search', () => {
        const component = mount(
          <Selectable
            defaultSearch="test"
            options={[]}
            renderer={({ getClearInputProps }) =>
              <button {...getClearInputProps()} />
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        expect(instance.getSearch()).toBe('test')

        component.find('button').simulate('click')

        expect(instance.getSearch()).toBe('')
      })

      it('should invoke the button onClick prop', () => {
        const onClick = jest.fn()
        const component = mount(
          <Selectable
            options={[]}
            renderer={({ getClearInputProps }) =>
              <button {...getClearInputProps({ onClick })} />
            }
          />,
        )

        component.find('button').simulate('click')

        expect(onClick).toHaveBeenCalled()
      })
    })
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
    it('should return a default text match', () => {
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
          renderer={({ getContainerProps }) => <div {...getContainerProps()} />}
        />,
      )

      expect(component.find('div').getDOMNode().style.position).toBe('relative')
    })

    it('should set a relative position on the overflow container if is static', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ getContainerProps }) => <div {...getContainerProps()} style={{ position: 'static' }} />}
        />,
      )

      expect(component.find('div').getDOMNode().style.position).toBe('relative')
    })

    describe('if the container has a position different from static', () => {
      it('should keep it', () => {
        const component = mount(
          <Selectable
            options={[]}
            renderer={({ getContainerProps }) => <div {...getContainerProps()} style={{ position: 'absolute' }} />}
          />,
        )

        expect(component.find('div').getDOMNode().style.position).toBe('absolute')
      })
    })

    it('should not fail when unmounting', () => {
      const component = mount(
        <Selectable
          options={[]}
          renderer={({ getContainerProps }) => <div {...getContainerProps()} />}
        />,
      )

      expect(() => {
        component.unmount()
      }).not.toThrow()
    })

    describe('if props.optionHeight', () => {
      it('should cache the viewport max height', () => {
        const component = mount(
          <Selectable
            options={[]}
            optionHeight={20}
            renderer={({ getContainerProps }) =>
              <div
                {...getContainerProps()}
                style={{
                  maxHeight: 120,
                }}
              />
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        expect(instance.containerHeight).toBe(120)
      })

      it('should cache the viewport fixed height', () => {
        const component = mount(
          <Selectable
            options={[]}
            optionHeight={20}
            renderer={({ getContainerProps }) =>
              <div
                {...getContainerProps()}
                style={{
                  height: 60,
                  maxHeight: 120,
                }}
              />
            }
          />,
        )
        const instance = component.instance().getWrappedInstance()

        expect(instance.containerHeight).toBe(60)
      })

      describe('if the container does not have a defined height', () => {
        beforeEach(() => {
          jest.spyOn(console, 'warn').mockImplementation(() => {})
        })

        afterEach(() => {
          console.warn.mockRestore() // eslint-disable-line no-console
        })

        it('should warn and assign zero', () => {
          const component = mount(
            <Selectable
              options={[]}
              optionHeight={20}
              renderer={({ getContainerProps }) => <div {...getContainerProps()} />}
            />,
          )
          const instance = component.instance().getWrappedInstance()

          expect(instance.containerHeight).toBe(0)
          expect(console.warn).toHaveBeenCalledTimes(1) // eslint-disable-line no-console
        })
      })
    })

    describe('if handleContainerScroll is set', () => {
      describe('if is virtualized', () => {
        it('should render when the overflow container scrolls', () => {
          const component = mount(
            <Selectable
              options={[]}
              optionHeight={20}
              renderer={({ getContainerProps }) =>
                <div
                  {...getContainerProps()}
                  style={{ height: 40 }}
                />
              }
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.forceUpdate = jest.fn()
          component.find('div').simulate('scroll')
          component.find('div').simulate('scroll')
          component.find('div').simulate('scroll')

          expect(instance.forceUpdate).toHaveBeenCalledTimes(3)
        })
      })

      describe('if is not virtualized', () => {
        it('should not render when the overflow container scrolls', () => {
          const component = mount(
            <Selectable
              options={[]}
              renderer={({ getContainerProps }) => <div {...getContainerProps()} />}
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.forceUpdate = jest.fn()
          component.find('div').simulate('scroll')
          component.find('div').simulate('scroll')
          component.find('div').simulate('scroll')

          expect(instance.forceUpdate).not.toHaveBeenCalled()
        })
      })
    })
  })

  describe('when gaining focus', () => {
    it('should highlight and scroll to the selected option', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
          ]}
          renderer={() => <div />}
          value={2}
        />,
      )
      const instance = component.instance().getWrappedInstance()

      instance.setFocusedElement = jest.fn()
      instance.scrollToFocusedElement = jest.fn()
      instance.setFocused(true)

      expect(instance.setFocusedElement).toHaveBeenCalledWith(1)
      expect(instance.scrollToFocusedElement).toHaveBeenCalled()
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

      it('should reset the container scroll', () => {
        const component = mount(
          <Selectable
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 },
              { label: 'Option 4', value: 4 },
              { label: 'Option 5', value: 5 },
            ]}
            optionHeight={10}
            renderer={({ getContainerProps }) =>
              <div
                {...getContainerProps({
                  style: { maxHeight: 20 },
                })}
              />
            }
          />,
        )
        const container = component.find('div').getDOMNode()

        container.scrollTop = 30
        component.instance().getWrappedInstance().forceUpdate()
        component.update()

        expect(container.scrollTop).toBe(30)

        component.setProps({
          options: [
            { label: 'Option 1', value: 1 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 10', value: 10 },
          ],
        })

        expect(container.scrollTop).toBe(0)
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

      describe('if props.blurOnSelect', () => {
        it('should blur', () => {
          const component = mount(
            <Selectable
              blurOnSelect
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 5', value: 5 },
              ]}
              renderer={() => <span />}
            />,
          )
          const instance = component.instance().getWrappedInstance()

          instance.setFocused = jest.fn()
          instance.setValue(5)

          expect(instance.setFocused).toHaveBeenCalledWith(false)
        })
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
          renderer={({ getContainerProps }) => <div {...getContainerProps()} />}
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
          renderer={({ focusableRef, getContainerProps }) =>
            <div {...getContainerProps()}>
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
            renderer={({ focusableRef, getContainerProps }) =>
              <div {...getContainerProps()}>
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
            renderer={({ focusableRef, getContainerProps }) =>
              <div {...getContainerProps()}>
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
            renderer={({ focusableRef, getContainerProps }) =>
              <div {...getContainerProps()}>
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

  describe('if virtualized', () => {
    it('should pass the viewport options to the renderer', () => {
      const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
        { label: 'Option 4', value: 4 },
        { label: 'Option 5', value: 5 },
        { label: 'Option 6', value: 6 },
        { label: 'Option 7', value: 7 },
        { label: 'Option 8', value: 8 },
        { label: 'Option 9', value: 9 },
      ]
      const component = mount(
        <Selectable
          options={options}
          optionHeight={10}
          renderer={({ viewportOptions, getContainerProps }) => (
            <div
              {...getContainerProps()}
              options={viewportOptions}
              style={{
                maxHeight: 15,
              }}
            />
          )}
        />,
      )

      component.find('div').getDOMNode().scrollTop = 30
      component.instance().getWrappedInstance().forceUpdate()
      component.update()

      const expectedIndices = [
        2, // Extra from the bottom
        3, // In viewport
        4, // In viewport
        5, // Extra from the top
        0, // First option is always included
        8, // Last option is always included
      ]

      expect(component.find('div').prop('options')).toEqual(expectedIndices.map(index => ({
        index,
        option: options[index],
      })))
    })

    describe('if there is a selected option', () => {
      it('should include the selected option', () => {
        const options = [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
          { label: 'Option 5', value: 5 },
          { label: 'Option 6', value: 6 },
          { label: 'Option 7', value: 7 },
          { label: 'Option 8', value: 8 },
          { label: 'Option 9', value: 9 },
        ]
        const component = mount(
          <Selectable
            options={options}
            optionHeight={10}
            renderer={({ viewportOptions, getContainerProps }) => (
              <div
                {...getContainerProps()}
                options={viewportOptions}
                style={{
                  maxHeight: 15,
                }}
              />
            )}
            value={7}
          />,
        )

        component.find('div').getDOMNode().scrollTop = 30
        component.instance().getWrappedInstance().forceUpdate()
        component.update()

        const expectedIndices = [
          2, // Extra from the bottom
          3, // In viewport
          4, // In viewport
          5, // Extra from the top
          0, // First option is always included
          8, // Last option is always included
          6, // The selected option
        ]

        expect(component.find('div').prop('options')).toEqual(expectedIndices.map(index => ({
          index,
          option: options[index],
        })))
      })
    })

    it('should return position and dimensions styles for options', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
            { label: 'Option 4', value: 4 },
            { label: 'Option 5', value: 5 },
          ]}
          optionHeight={10}
          renderer={({ getOptionProps, getContainerProps, options }) =>
            <div
              {...getContainerProps()}
              style={{
                maxHeight: 25,
              }}
              >
              {options.map((option) =>
                <button {...getOptionProps(option)} />,
              )}
            </div>
          }
        />,
      )

      expect(component.find('button').at(0).prop('style')).toEqual({
        height: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
      })

      expect(component.find('button').at(1).prop('style')).toEqual({
        height: 10,
        position: 'absolute',
        top: 10,
        right: 0,
        left: 0,
      })

      expect(component.find('button').at(2).prop('style')).toEqual({
        height: 10,
        position: 'absolute',
        top: 20,
        right: 0,
        left: 0,
      })
    })
  })

  describe('when selecting an option', () => {
    it('should set the option value', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
          ]}
          renderer={({ getOptionProps, options }) =>
            <div>
              {options.map((option) =>
                <button {...getOptionProps(option)} />,
              )}
            </div>
          }
        />,
      )
      const instance = component.instance().getWrappedInstance()

      component.find('button').at(1).simulate('click')

      expect(instance.getValue()).toBe(2)
    })
  })

  describe('if the current value is an array', () => {
    it('should toggle the option value', () => {
      const component = mount(
        <Selectable
          defaultValue={[1]}
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
          ]}
          renderer={({ getOptionProps, options }) =>
            <div>
              {options.map((option) =>
                <button {...getOptionProps(option)} />,
              )}
            </div>
          }
        />,
      )
      const instance = component.instance().getWrappedInstance()

      component.find('button').at(1).simulate('click')

      expect(instance.getValue()).toEqual([1, 2])

      component.find('button').at(0).simulate('click')

      expect(instance.getValue()).toEqual([2])
    })
  })

  describe('when the cursor enters an option', () => {
    it('should give the focus to the option', () => {
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
          ]}
          renderer={({ getOptionProps, options }) =>
            <div>
              {options.map((option) =>
                <button {...getOptionProps(option)} />,
              )}
            </div>
          }
        />,
      )
      const instance = component.instance().getWrappedInstance()

      component.find('button').at(1).simulate('mouseenter')

      expect(instance.getFocusedElement()).toBe(1)
    })
  })

  it('should respect the option ref', () => {
    const optionRef = jest.fn()
    const component = mount(
      <Selectable
        options={[
          { label: 'Option 1', value: 1 },
        ]}
        renderer={({ getOptionProps, options }) =>
          <div>
            {options.map((option) =>
              <button {...getOptionProps(option, { ref: optionRef })} />,
            )}
          </div>
        }
      />,
    )

    expect(optionRef).toHaveBeenCalledWith(component.find('button').at(0).getDOMNode())
  })

  describe('when the container scrolls', () => {
    it('should invoke the container onScroll prop', () => {
      const onScroll = jest.fn()
      const component = mount(
        <Selectable
          options={[
            { label: 'Option 1', value: 1 },
          ]}
          renderer={({ getContainerProps }) =>
            <div {...getContainerProps({ onScroll })} />
          }
        />,
      )

      component.find('div').simulate('scroll')

      expect(onScroll).toHaveBeenCalled()
    })
  })
})
