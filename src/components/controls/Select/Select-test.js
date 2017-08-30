import { React, toJSON, mount, shallow } from 'test/helper'
import deburr from 'lodash/deburr'
import keyboard from 'utils/keyboard'
import tinycolor from 'tinycolor2'
import Select from './Select'
import Option from './Option'
import defaultArrowRenderer from './defaults/arrowRenderer'
import defaultClearOptionRenderer from './defaults/clearOptionRenderer'
import defaultCreateOptionRenderer from './defaults/createOptionRenderer'
import defaultEmptyRenderer from './defaults/emptyRenderer'
import defaultInputPlaceholder from './defaults/inputPlaceholder'
import defaultInputRenderer from './defaults/inputRenderer'
import DefaultMenuRenderer from './defaults/menuRenderer'
import defaultNewOptionBuilder from './defaults/newOptionBuilder'
import defaultOptionRenderer from './defaults/optionRenderer'
import defaultOptionSearchTerms from './defaults/optionSearchTerms'
import defaultOptionsFilter from './defaults/optionsFilter'
import defaultPlaceholder from './defaults/placeholder'
import defaultPlaceholderRenderer from './defaults/placeholderRenderer'
import defaultSort from './defaults/sort'
import defaultValueRenderer from './defaults/valueRenderer'
import NEW_VALUE from './newValue'

describe('Select', () => {
  it('should render with minimum props', () => {
    const component = mount(<Select options={[]} />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('if the initial value represents a new option', () => {
    it('should add a new transient option to the state', () => {
      const component = mount(
        <Select
          defaultNewOptionLabel="Some new option"
          options={[]}
          value={NEW_VALUE}
        />,
      )

      expect(component.state('options')).toEqual([
        { label: 'Some new option', value: NEW_VALUE },
      ])
    })
  })

  describe('when receiving props', () => {
    it('should allow to control it\'s value', () => {
      const component = mount(
        <Select
          options={[]}
          value={1}
        />,
      )

      component.setProps({ value: 2 })

      expect(component.state('value')).toBe(2)
    })

    it('should focus when setting the autoFocus prop', () => {
      const component = mount(
        <Select
          autoFocus={false}
          options={[]}
        />,
      )
      const instance = component.instance()

      instance.focus = jest.fn()
      component.setProps({ autoFocus: true })

      expect(instance.focus).toHaveBeenCalled()
    })

    it('should change the state options', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.setState = jest.fn()
      component.setProps({ options: [] })

      expect(Object.keys(instance.setState.mock.calls[0][0])).toEqual([
        'filtered', 'options',
      ])
    })
  })

  describe('when unmounts', () => {
    afterEach(() => {
      document.removeEventListener.mockRestore()
    })

    it('should remove the document click listener', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      jest.spyOn(document, 'removeEventListener')
      component.unmount()

      expect(document.removeEventListener).toHaveBeenCalledWith(
        'click', instance.handleOutsideClick,
      )
    })
  })

  it('should not render the option corresponding to the clearValue', () => {
    const component = mount(
      <Select
        clearValue={2}
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
        ]}
      />,
    )

    expect(component.state('filtered')).toEqual([
      { label: 'Option 1', value: 1 },
      { label: 'Option 3', value: 3 },
    ])
  })

  it('should not fail if clearValue option don\'t exists', () => {
    expect(() => {
      mount(
        <Select
          clearValue={4}
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
          ]}
        />,
      )
    }).not.toThrow()
  })

  it('should sort the options', () => {
    const component = mount(
      <Select
        options={[
          { label: 'Option 3', value: 3 },
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ]}
      />,
    )

    expect(component.state('filtered')).toEqual([
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
    ])
  })

  describe('if props.sort is false', () => {
    it('should not sort the options', () => {
      const component = mount(
        <Select
          options={[
            { label: 'Option 3', value: 3 },
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
          ]}
          sort={false}
        />,
      )

      expect(component.state('filtered')).toEqual([
        { label: 'Option 3', value: 3 },
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
      ])
    })
  })

  describe('if props.sort is true', () => {
    it('should sort the options', () => {
      const component = mount(
        <Select
          options={[
            { label: 'Option 3', value: 3 },
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
          ]}
          sort
        />,
      )

      expect(component.state('filtered')).toEqual([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ])
    })
  })

  describe('when an element gets focused', () => {
    it('should save the focused element on the state', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.setFocused('bottom-control')

      expect(component.state('focusedElement')).toBe('bottom-control')
    })

    describe('if an option gets focused', () => {
      describe('if the option index exists', () => {
        it('should scroll the option into the viewport', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Some Option', value: 1 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.scrollOptionIntoView = jest.fn()
          instance.setFocused(0)

          expect(instance.scrollOptionIntoView).toHaveBeenCalledWith(1)
        })
      })

      describe('if the option index dont\'t exists', () => {
        it('should not try to scroll', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.scrollOptionIntoView = jest.fn()
          instance.setFocused(0)

          expect(instance.scrollOptionIntoView).not.toHaveBeenCalled()
        })
      })
    })
  })

  describe('when the search changes', () => {
    it('should filter the options', () => {
      const component = mount(
        <Select
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 11', value: 2 },
          ]}
        />,
      )
      const instance = component.instance()

      instance.setSearch('op 1')

      expect(component.state('filtered')).toEqual([
        { label: 'Option 1', value: 1 },
        { label: 'Option 11', value: 2 },
      ])
    })

    describe('if there is a search and no results', () => {
      it('should focus on the bottom control', () => {
        const component = mount(
          <Select
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
            ]}
          />,
        )
        const instance = component.instance()

        instance.setSearch('3')

        expect(component.state('focusedElement')).toBe('bottom-control')
      })
    })

    describe('if the menu is opened', () => {
      it('should scroll to top', () => {
        const menu = { scrollTop: 20 }
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.menu = menu
        instance.setSearch('')

        expect(menu.scrollTop).toBe(0)
      })
    })
  })

  describe('when the value changes', () => {
    it('should close the menu', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.closeMenu = jest.fn()
      instance.setValue()

      expect(instance.closeMenu).toHaveBeenCalled()
    })

    it('should focus', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.focus = jest.fn()
      instance.setValue()

      expect(instance.focus).toHaveBeenCalled()
    })

    describe('if props.onChange is defined', () => {
      it('should report the new value', () => {
        const onChange = jest.fn()
        const component = mount(<Select onChange={onChange} options={[]} />)
        const instance = component.instance()
        const option = { label: 'Option 1', value: 1 }

        instance.setValue(option)

        expect(onChange).toHaveBeenCalledWith(1, option)
      })
    })

    describe('if uncontrolled', () => {
      it('should save the new value on the state', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()
        const option = { label: 'Option 1', value: 1 }

        instance.setValue(option)

        expect(component.state('value')).toBe(1)
      })
    })

    describe('if controlled', () => {
      it('should not save the new value on the state', () => {
        const component = mount(<Select options={[]} value={2} />)
        const instance = component.instance()
        const option = { label: 'Option 1', value: 1 }

        instance.setValue(option)

        expect(component.state('value')).toBe(2)
      })
    })

    describe('if the current option is transient', () => {
      it('should clear it from the options', () => {
        const component = mount(
          <Select
            defaultNewOptionLabel="Option"
            options={[]}
            value={NEW_VALUE}
          />,
        )
        const instance = component.instance()

        expect(component.state('options').length).toBe(1)

        instance.setValue()

        expect(component.state('options').length).toBe(0)
      })
    })

    describe('if the value don\'t exists', () => {
      it('should not throw', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        expect(() => {
          instance.setValue()
        }).not.toThrow()
      })
    })
  })

  describe('when the menu gets opened', () => {
    it('should save the opened state', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.openMenu()

      expect(component.state('isOpen')).toBe(true)
    })

    it('should focus the selected option index', () => {
      const component = mount(
        <Select
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
          ]}
          value={2}
        />,
      )
      const instance = component.instance()

      instance.openMenu()

      expect(component.state('focusedElement')).toBe(1)
    })
  })

  describe('toggleMenu', () => {
    describe('if the menu is opened', () => {
      it('should close it', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        component.setState({ isOpen: true })
        instance.toggleMenu()

        expect(component.state('isOpen')).toBe(false)
      })
    })

    describe('if the menu is closed', () => {
      it('should open it', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        component.setState({ isOpen: false })
        instance.toggleMenu()

        expect(component.state('isOpen')).toBe(true)
      })
    })
  })

  describe('when typing on the input field', () => {
    describe('if the value changes', () => {
      it('should change the state', () => {
        const component = mount(
          <Select
            options={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
            ]}
          />,
        )
        const instance = component.instance()

        instance.openMenu()

        const input = component.find({ onChange: instance.handleInputChange })

        input.simulate('change', { target: { value: 'op 1' } })

        expect(component.state('input')).toBe('op 1')
        expect(component.state('filtered')).toEqual([
          { label: 'Option 1', value: 1 },
        ])
      })
    })

    describe('if the user pressed the arrow down key', () => {
      describe('if there is no current focused element', () => {
        it('should focus the first option, if any', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })
          input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

          expect(component.state('focusedElement')).toBe(0)
        })

        it('should focus the bottom control if there are no options', () => {
          const component = mount(<Select clearable options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })
          input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

          expect(component.state('focusedElement')).toBe('bottom-control')
        })

        it('should focus nothing otherwise', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })
          input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

          expect(component.state('focusedElement')).toBe(null)
        })
      })

      describe('if the bottom control is focused', () => {
        it('should focus the first option, if any', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 'bottom-control' })
          input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

          expect(component.state('focusedElement')).toBe(0)
        })

        it('should focus nothing otherwise', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 'bottom-control' })
          input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

          expect(component.state('focusedElement')).toBe('bottom-control')
        })
      })

      describe('if an option is focused', () => {
        it('should focus the next option, if any', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 0 })
          input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

          expect(component.state('focusedElement')).toBe(1)
        })

        describe('if is the last option', () => {
          it('should focus the bottom control, if visible', () => {
            const component = mount(
              <Select
                clearable
                options={[
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ]}
              />,
            )
            const instance = component.instance()

            instance.openMenu()

            const input = component.find({ onKeyDown: instance.handleInputKeyDown })

            component.setState({ focusedElement: 1 })
            input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

            expect(component.state('focusedElement')).toBe('bottom-control')
          })

          it('should focus the first option otherwise', () => {
            const component = mount(
              <Select
                options={[
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ]}
              />,
            )
            const instance = component.instance()

            instance.openMenu()

            const input = component.find({ onKeyDown: instance.handleInputKeyDown })

            component.setState({ focusedElement: 1 })
            input.simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

            expect(component.state('focusedElement')).toBe(0)
          })
        })
      })
    })

    describe('if the user pressed the arrow up key', () => {
      describe('if there is no current focused element', () => {
        it('should focus the bottom control, if visible', () => {
          const component = mount(<Select clearable options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })
          input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

          expect(component.state('focusedElement')).toBe('bottom-control')
        })

        it('should focus the last option, if any', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })
          input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

          expect(component.state('focusedElement')).toBe(1)
        })

        it('should focus nothing otherwise', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })
          input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

          expect(component.state('focusedElement')).toBe(null)
        })
      })

      describe('if the bottom control is focused', () => {
        it('should focus the last option, if any', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 'bottom-control' })
          input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

          expect(component.state('focusedElement')).toBe(1)
        })

        it('should focus nothing otherwise', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 'bottom-control' })
          input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

          expect(component.state('focusedElement')).toBe('bottom-control')
        })
      })

      describe('if an option is focused', () => {
        it('should focus the previous option, if any', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 1 })
          input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

          expect(component.state('focusedElement')).toBe(0)
        })

        describe('if is the first option', () => {
          it('should focus the bottom control, if visible', () => {
            const component = mount(
              <Select
                clearable
                options={[
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ]}
              />,
            )
            const instance = component.instance()

            instance.openMenu()

            const input = component.find({ onKeyDown: instance.handleInputKeyDown })

            component.setState({ focusedElement: 0 })
            input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

            expect(component.state('focusedElement')).toBe('bottom-control')
          })

          it('should focus the last option otherwise', () => {
            const component = mount(
              <Select
                options={[
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ]}
              />,
            )
            const instance = component.instance()

            instance.openMenu()

            const input = component.find({ onKeyDown: instance.handleInputKeyDown })

            component.setState({ focusedElement: 0 })
            input.simulate('keydown', { keyCode: keyboard.ARROW_UP })

            expect(component.state('focusedElement')).toBe(1)
          })
        })
      })
    })

    describe('if the user pressed the escape key', () => {
      it('should close the menu', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu()

        const input = component.find({ onKeyDown: instance.handleInputKeyDown })

        component.setState({ isOpen: true })
        input.simulate('keydown', { keyCode: keyboard.ESCAPE })

        expect(component.state('isOpen')).toBe(false)
      })
    })

    describe('if the user pressed the tab key', () => {
      it('should close the menu', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu()

        const input = component.find({ onKeyDown: instance.handleInputKeyDown })

        component.setState({ isOpen: true })
        input.simulate('keydown', { keyCode: keyboard.TAB })

        expect(component.state('isOpen')).toBe(false)
      })

      it('should blur', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu()

        const input = component.find({ onKeyDown: instance.handleInputKeyDown })

        component.setState({ isFocused: true })
        input.simulate('keydown', { keyCode: keyboard.TAB })

        expect(component.state('isFocused')).toBe(false)
      })
    })

    describe('if the user pressed the enter key', () => {
      describe('if there is no current focused element', () => {
        it('should do nothing', () => {
          const component = mount(<Select clearable options={[]} />)
          const instance = component.instance()

          instance.openMenu()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: null })

          const stateBefore = { ...component.state() }

          input.simulate('keydown', { keyCode: keyboard.ENTER })

          const stateAfter = { ...component.state() }

          expect(stateBefore).toEqual(stateAfter)
        })
      })

      describe('if the bottom control is focused', () => {
        describe('if is the create option control', () => {
          it('should call its handler', () => {
            const component = mount(<Select canCreate options={[]} />)
            const instance = component.instance()

            instance.openMenu()
            instance.handleCreateOptionClick = jest.fn()

            const input = component.find({ onKeyDown: instance.handleInputKeyDown })

            component.setState({
              focusedElement: 'bottom-control',
              input: 'Some search',
            })
            input.simulate('keydown', { keyCode: keyboard.ENTER })

            expect(instance.handleCreateOptionClick).toHaveBeenCalled()
          })
        })

        describe('if is the clear control', () => {
          it('should call its handler', () => {
            const component = mount(<Select clearable options={[]} />)
            const instance = component.instance()

            instance.openMenu()
            instance.handleClearOptionClick = jest.fn()

            const input = component.find({ onKeyDown: instance.handleInputKeyDown })

            component.setState({ focusedElement: 'bottom-control' })
            input.simulate('keydown', { keyCode: keyboard.ENTER })

            expect(instance.handleClearOptionClick).toHaveBeenCalled()
          })
        })
      })

      describe('if an option is focused', () => {
        it('should set the option value', () => {
          const component = mount(
            <Select
              options={[
                { label: 'Option 1', value: 1 },
              ]}
            />,
          )
          const instance = component.instance()

          instance.openMenu()
          instance.handleClearOptionClick = jest.fn()

          const input = component.find({ onKeyDown: instance.handleInputKeyDown })

          component.setState({ focusedElement: 0 })
          input.simulate('keydown', { keyCode: keyboard.ENTER })

          expect(component.state('value')).toBe(1)
        })
      })
    })
  })

  describe('when clicking on the control', () => {
    it('should toggle the menu', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.toggleMenu = jest.fn()

      component.find({ onClick: instance.handleControlClick }).simulate('click')

      expect(instance.toggleMenu).toHaveBeenCalled()
    })
  })

  describe('when typing on the control', () => {
    describe('if the pressed key is TAB', () => {
      it('should not open the menu', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu = jest.fn()

        component.find({ onKeyDown: instance.handleControlKeyDown })
          .simulate('keydown', { keyCode: keyboard.TAB })

        expect(instance.openMenu).not.toHaveBeenCalled()
      })
    })

    describe('if the pressed key is ESCAPE', () => {
      it('should not open the menu', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu = jest.fn()

        component.find({ onKeyDown: instance.handleControlKeyDown })
          .simulate('keydown', { keyCode: keyboard.ESCAPE })

        expect(instance.openMenu).not.toHaveBeenCalled()
      })
    })

    describe('if the pressed key is a modifier', () => {
      it('should not open the menu', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu = jest.fn()

        const control = component.find({ onKeyDown: instance.handleControlKeyDown })

        control.simulate('keydown', { keyCode: keyboard.SHIFT })
        control.simulate('keydown', { keyCode: keyboard.CONTROL })
        control.simulate('keydown', { keyCode: keyboard.ALT })
        control.simulate('keydown', { keyCode: keyboard.LEFT_CMD })
        control.simulate('keydown', { keyCode: keyboard.RIGHT_CMD })

        expect(instance.openMenu).not.toHaveBeenCalled()
      })
    })

    describe('if the pressed key is anything else', () => {
      it('should open the menu', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.openMenu = jest.fn()

        component.find({ onKeyDown: instance.handleControlKeyDown })
          .simulate('keydown', { keyCode: keyboard.ARROW_DOWN })

        expect(instance.openMenu).toHaveBeenCalled()
      })
    })
  })

  describe('when the control is focused', () => {
    it('should change the state', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      component.setState({ isFocused: false })
      component.find({ onFocus: instance.handleControlFocus }).simulate('focus')

      expect(component.state('isFocused')).toBe(true)
    })

    it('should invoke props.onFocus', () => {
      const onFocus = jest.fn()
      const component = mount(<Select onFocus={onFocus} options={[]} />)
      const instance = component.instance()

      component.find({ onFocus: instance.handleControlFocus }).simulate('focus')

      expect(onFocus).toHaveBeenCalled()
    })

    describe('if already focused', () => {
      it('should do nothing', () => {
        const onFocus = jest.fn()
        const component = mount(<Select onFocus={onFocus} options={[]} />)
        const instance = component.instance()

        component.setState({ isFocused: true })
        component.find({ onFocus: instance.handleControlFocus }).simulate('focus')

        expect(onFocus).not.toHaveBeenCalled()
        expect(component.state('isFocused')).toBe(true)
      })
    })
  })

  describe('when the control is blurred', () => {
    it('should remove the focused state', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      component.setState({ isFocused: true })
      component.find({ onBlur: instance.handleControlBlur }).simulate('blur')

      expect(component.state('isFocused')).toBe(false)
    })

    it('should invoke props.onBlur if defined', () => {
      const onBlur = jest.fn()
      const component = mount(<Select onBlur={onBlur} options={[]} />)
      const instance = component.instance()

      component.find({ onBlur: instance.handleControlBlur }).simulate('blur')

      expect(onBlur).toHaveBeenCalled()
    })

    describe('if the menu is opened', () => {
      it('should do nothing', () => {
        const onBlur = jest.fn()
        const component = mount(<Select onBlur={onBlur} options={[]} />)
        const instance = component.instance()

        component.setState({ isFocused: true, isOpen: true })
        component.find({ onBlur: instance.handleControlBlur }).simulate('blur')

        expect(onBlur).not.toHaveBeenCalled()
        expect(component.state('isFocused')).toBe(true)
      })
    })
  })

  describe('when clicking an option', () => {
    it('should set its value', () => {
      const component = mount(
        <Select
          options={[
            { label: 'Option 1', value: 1 },
          ]}
        />,
      )
      const instance = component.instance()

      instance.openMenu()
      component.find(Option).at(0).simulate('click')

      expect(component.state('value')).toBe(1)
    })
  })

  describe('when the mouse enters an option', () => {
    it('should focus it', () => {
      const component = mount(
        <Select
          options={[
            { label: 'Option 1', value: 1 },
          ]}
        />,
      )
      const instance = component.instance()

      instance.openMenu()
      component.find(Option).at(0).simulate('mouseenter')

      expect(component.state('focusedElement')).toBe(0)
    })
  })

  describe('when clicking outside', () => {
    it('should close the menu', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.openMenu()

      const event = new CustomEvent('click')

      document.dispatchEvent(event)

      expect(component.state('isOpen')).toBe(false)
    })

    it('should blur', () => {
      const component = mount(<Select options={[]} />)
      const instance = component.instance()

      instance.openMenu()
      component.setState({ isFocused: true })

      const event = new CustomEvent('click')

      document.dispatchEvent(event)

      expect(component.state('isFocused')).toBe(false)
    })
  })

  describe('when clicking the create option control', () => {
    it('should add the new option', () => {
      const component = mount(<Select canCreate options={[]} />)
      const instance = component.instance()

      instance.openMenu()
      component.setState({ input: 'Some new option' })
      component.find({ onClick: instance.handleCreateOptionClick }).at(0).simulate('click')

      expect(component.state('options')).toEqual([
        { label: 'Some new option', value: NEW_VALUE },
      ])
    })

    describe('if controlled', () => {
      it('should not set the new value', () => {
        const component = mount(<Select canCreate options={[]} value={1} />)
        const instance = component.instance()

        instance.openMenu()
        component.setState({ input: 'Some new option' })
        component.find({ onClick: instance.handleCreateOptionClick }).at(0).simulate('click')

        expect(component.state('value')).toBe(1)
      })
    })

    describe('if uncontrolled', () => {
      it('should set the new value', () => {
        const component = mount(<Select canCreate options={[]} />)
        const instance = component.instance()

        instance.openMenu()
        component.setState({ input: 'Some new option' })
        component.find({ onClick: instance.handleCreateOptionClick }).at(0).simulate('click')

        expect(component.state('value')).toBe(NEW_VALUE)
      })
    })

    it('should invoke props.onChange', () => {
      const onChange = jest.fn()
      const component = mount(<Select canCreate onChange={onChange} options={[]} />)
      const instance = component.instance()

      instance.openMenu()
      component.setState({ input: 'Some new option' })
      component.find({ onClick: instance.handleCreateOptionClick }).at(0).simulate('click')

      expect(onChange).toHaveBeenCalledWith(NEW_VALUE, {
        label: 'Some new option',
        value: NEW_VALUE,
      })
    })
  })

  describe('when entering the mouse on the create option control', () => {
    it('should focus the bottom control', () => {
      const component = mount(<Select canCreate options={[]} />)
      const instance = component.instance()

      instance.openMenu()
      component.setState({ input: 'Some new option' })
      component.find({ onMouseEnter: instance.handleBottomControlMouseEnter }).simulate('mouseenter')

      expect(component.state('focusedElement')).toBe('bottom-control')
    })
  })

  describe('when clicking the clear control', () => {
    it('should clear the value', () => {
      const component = mount(<Select clearable options={[]} />)
      const instance = component.instance()

      instance.openMenu()
      component.setState({ value: 1 })
      component.find({ onClick: instance.handleClearOptionClick }).simulate('click')

      expect(component.state('value')).toBe(null)
    })

    describe('if props.clearValue is defined', () => {
      it('should set the specified value', () => {
        const component = mount(
          <Select
            clearable
            clearValue={1}
            options={[
              { label: 'Clear option', value: 1 },
            ]}
          />,
        )
        const instance = component.instance()

        instance.openMenu()
        component.setState({ value: 2 })
        component.find({ onClick: instance.handleClearOptionClick }).simulate('click')

        expect(component.state('value')).toBe(1)
      })
    })
  })

  describe('when entering the mouse on the clear control', () => {
    it('should focus the bottom control', () => {
      const component = mount(<Select clearable options={[]} />)
      const instance = component.instance()

      instance.openMenu()
      component.setState({ input: 'Some new option' })
      component.find({ onMouseEnter: instance.handleBottomControlMouseEnter }).simulate('mouseenter')

      expect(component.state('focusedElement')).toBe('bottom-control')
    })
  })

  describe('when scrolling an option into viewport', () => {
    describe('if auto-positioning', () => {
      describe('if the node is down of the scroll', () => {
        it('should scroll from bottom', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.menu = { offsetHeight: 80, scrollTop: 0 }
          instance.optionRefs = { 1: { offsetTop: 120, offsetHeight: 40 } }
          instance.isOptionInViewport = () => ({
            visibleFromBottom: false,
            visibleFromTop: true,
          })

          instance.scrollOptionIntoView(1, 'auto')

          expect(instance.menu.scrollTop).toBe(80)
        })
      })

      describe('if the node is up of the scroll', () => {
        it('should scroll from top', () => {
          const component = mount(<Select options={[]} />)
          const instance = component.instance()

          instance.menu = { offsetHeight: 80, scrollTop: 0 }
          instance.optionRefs = { 1: { offsetTop: 120, offsetHeight: 40 } }
          instance.isOptionInViewport = () => ({
            visibleFromBottom: true,
            visibleFromTop: false,
          })

          instance.scrollOptionIntoView(1, 'auto')

          expect(instance.menu.scrollTop).toBe(120)
        })
      })
    })

    describe('if position is "bottom"', () => {
      it('should scroll from bottom', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.menu = { offsetHeight: 80, scrollTop: 0 }
        instance.optionRefs = { 1: { offsetTop: 120, offsetHeight: 40 } }

        instance.scrollOptionIntoView(1, 'bottom')

        expect(instance.menu.scrollTop).toBe(80)
      })
    })

    describe('if the node is "top"', () => {
      it('should scroll from top', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.menu = { offsetHeight: 80, scrollTop: 0 }
        instance.optionRefs = { 1: { offsetTop: 120, offsetHeight: 40 } }

        instance.scrollOptionIntoView(1, 'top')

        expect(instance.menu.scrollTop).toBe(120)
      })
    })

    describe('if the option node is not found', () => {
      it('should not throw', () => {
        const component = mount(<Select options={[]} />)
        const instance = component.instance()

        instance.optionRefs = {}

        expect(() => {
          instance.scrollOptionIntoView(1)
        }).not.toThrow()
      })
    })
  })

  describe('if placeholder is a string', () => {
    it('should display it', () => {
      const component = mount(<Select options={[]} placeholder="Some placeholder" />)

      expect(component.find('.Select__control').text()).toBe('Some placeholder')
    })
  })

  describe('if inputPlaceholder is a string', () => {
    it('should display it', () => {
      const component = mount(<Select options={[]} inputPlaceholder="Some placeholder" />)
      const instance = component.instance()

      instance.openMenu()

      expect(component.find('input').prop('placeholder')).toBe('Some placeholder')
    })
  })

  describe('if the select has a color', () => {
    it('should give the selected option the specified color', () => {
      const component = mount(
        <Select
          color="rgb(255, 0, 0)"
          options={[
            { label: 'Option 1', value: 1 },
          ]}
          value={1}
        />,
      )
      const instance = component.instance()

      instance.openMenu()

      expect(component.find(Option).getDOMNode().style['background-color']).toBe('rgb(255, 0, 0)')
    })

    it('should give the focused option a lighter version of specified color', () => {
      const component = mount(
        <Select
          color="rgb(255, 0, 0)"
          options={[
            { label: 'Option 1 ASD', value: 1 },
          ]}
        />,
      )
      const instance = component.instance()

      instance.openMenu()
      component.setState({ focusedElement: 0 })

      expect(component.find(Option).getDOMNode().style['background-color']).toBe(
        tinycolor('rgb(255, 0, 0)').lighten(35).toRgbString(),
      )
    })
  })

  describe('bottom control visibility', () => {
    describe('if can create and there is a search', () => {
      it('should report a visible control', () => {
        const component = mount(<Select canCreate options={[]} />)
        const instance = component.instance()

        component.setState({ input: 'Some search' })

        expect(instance.isBottomControlVisible()).toBe(true)
      })
    })

    describe('if can create and there is no search', () => {
      it('should report a hidden control', () => {
        const component = mount(<Select canCreate options={[]} />)
        const instance = component.instance()

        component.setState({ input: '' })

        expect(instance.isBottomControlVisible()).toBe(false)
      })
    })

    describe('if is clearable', () => {
      it('should report a visible control', () => {
        const component = mount(<Select clearable options={[]} />)
        const instance = component.instance()

        expect(instance.isBottomControlVisible()).toBe(true)
      })
    })
  })

  describe('defaultArrowRenderer', () => {
    describe('if the select is open', () => {
      it('should return a caret up svg icon', () => {
        const arrow = shallow(defaultArrowRenderer({ isOpen: true }))

        expect(arrow.find('svg[data-icon-name="caret-up"]').exists()).toBe(true)
      })
    })

    describe('if the select is closed', () => {
      it('should return a caret down svg icon', () => {
        const arrow = shallow(defaultArrowRenderer({ isOpen: false }))

        expect(arrow.find('svg[data-icon-name="caret-down"]').exists()).toBe(true)
      })
    })
  })

  describe('defaultClearOptionRenderer', () => {
    describe('if focused', () => {
      it('should have class "Select__clearOption--focused"', () => {
        const clearOption = shallow(defaultClearOptionRenderer({
          focused: true,
        }))

        expect(clearOption.hasClass('Select__clearOption--focused')).toBe(true)
      })
    })

    describe('if not focused', () => {
      it('should not have class "Select__clearOption--focused"', () => {
        const clearOption = shallow(defaultClearOptionRenderer({
          focused: false,
        }))

        expect(clearOption.hasClass('Select__clearOption--focused')).toBe(false)
      })
    })

    it('should assign the specified onClick handler', () => {
      const onClick = jest.fn()
      const clearOption = shallow(defaultClearOptionRenderer({
        onClick,
      }))

      clearOption.simulate('click')

      expect(onClick).toHaveBeenCalled()
    })

    it('should assign the specified onMouseEnter handler', () => {
      const onMouseEnter = jest.fn()
      const clearOption = shallow(defaultClearOptionRenderer({
        onMouseEnter,
      }))

      clearOption.simulate('mouseenter')

      expect(onMouseEnter).toHaveBeenCalled()
    })
  })

  describe('defaultCreateOptionRenderer', () => {
    describe('if focused', () => {
      it('should have class "Select__createOption--focused"', () => {
        const clearOption = shallow(defaultCreateOptionRenderer({
          focused: true,
        }))

        expect(clearOption.hasClass('Select__createOption--focused')).toBe(true)
      })
    })

    describe('if not focused', () => {
      it('should not have class "Select__createOption--focused"', () => {
        const clearOption = shallow(defaultCreateOptionRenderer({
          focused: false,
        }))

        expect(clearOption.hasClass('Select__createOption--focused')).toBe(false)
      })
    })

    it('should assign the specified onClick handler', () => {
      const onClick = jest.fn()
      const clearOption = shallow(defaultCreateOptionRenderer({
        onClick,
      }))

      clearOption.simulate('click')

      expect(onClick).toHaveBeenCalled()
    })

    it('should assign the specified onMouseEnter handler', () => {
      const onMouseEnter = jest.fn()
      const clearOption = shallow(defaultCreateOptionRenderer({
        onMouseEnter,
      }))

      clearOption.simulate('mouseenter')

      expect(onMouseEnter).toHaveBeenCalled()
    })

    it('should render the specified label', () => {
      const clearOption = shallow(defaultCreateOptionRenderer({
        createOptionLabel: 'New test option',
      }))

      expect(clearOption.find('.Select__createOption__label').text()).toBe('New test option')
    })

    it('should render the specified value', () => {
      const clearOption = shallow(defaultCreateOptionRenderer({
        value: 'New option value',
      }))

      expect(clearOption.find('.Select__createOption__value').text()).toBe('New option value')
    })
  })

  describe('defaultEmptyRenderer', () => {
    describe('if there is a search', () => {
      it('should display "No results"', () => {
        const emptyView = shallow(defaultEmptyRenderer({
          search: 'Some search',
        }))

        expect(emptyView.text()).toBe('No results')
      })
    })

    describe('if there isn\'t a search', () => {
      it('should display "No options available"', () => {
        const emptyView = shallow(defaultEmptyRenderer({
          search: '',
        }))

        expect(emptyView.text()).toBe('No options available')
      })
    })
  })

  describe('defaultInputPlaceholder', () => {
    describe('if can create options', () => {
      it('should return "Write to search or create"', () => {
        const inputPlaceholder = defaultInputPlaceholder({
          canCreate: true,
        })

        expect(inputPlaceholder).toBe('Write to search or create')
      })
    })

    describe('if can\'t create options', () => {
      it('should return "Write to search"', () => {
        const inputPlaceholder = defaultInputPlaceholder({
          canCreate: false,
        })

        expect(inputPlaceholder).toBe('Write to search')
      })
    })
  })

  describe('defaultInputRenderer', () => {
    it('should bound an input to the specified onChange', () => {
      const onChange = jest.fn()
      const input = shallow(defaultInputRenderer({
        onChange,
      }))

      input.find('input[type="text"]').simulate('change')

      expect(onChange).toHaveBeenCalled()
    })

    it('should bound an input to the specified onKeyDown', () => {
      const onKeyDown = jest.fn()
      const input = shallow(defaultInputRenderer({
        onKeyDown,
      }))

      input.find('input[type="text"]').simulate('keydown')

      expect(onKeyDown).toHaveBeenCalled()
    })

    it('should set inputPlaceholder as the input placeholder', () => {
      const input = shallow(defaultInputRenderer({
        inputPlaceholder: 'Test placeholder',
      }))

      expect(input.find('input[type="text"]').prop('placeholder')).toBe('Test placeholder')
    })

    it('should set value as the input value', () => {
      const input = shallow(defaultInputRenderer({
        value: 'Some search',
      }))

      expect(input.find('input[type="text"]').prop('value')).toBe('Some search')
    })

    describe('it has a search with no results and can create options', () => {
      it('should display a button bound to onNewOptionClick', () => {
        const onNewOptionClick = jest.fn()
        const input = shallow(defaultInputRenderer({
          canCreate: true,
          hasResults: false,
          onNewOptionClick,
          value: 'Some search',
        }))
        const button = input.find({ onClick: onNewOptionClick })

        expect(button.exists()).toBe(true)
      })

      it('should display a plus svg icon', () => {
        const onNewOptionClick = jest.fn()
        const input = shallow(defaultInputRenderer({
          canCreate: true,
          hasResults: false,
          onNewOptionClick,
          value: 'Some search',
        }))

        const button = input.find({ onClick: onNewOptionClick })

        expect(button.find('svg[data-icon-name="plus"]').exists()).toBe(true)
      })
    })

    describe('it has no search', () => {
      it('should display a search svg icon', () => {
        const input = shallow(defaultInputRenderer({
          value: '',
        }))

        expect(input.find('svg[data-icon-name="search"]').exists()).toBe(true)
      })
    })

    describe('it has a search with results', () => {
      it('should display a search svg icon', () => {
        const input = shallow(defaultInputRenderer({
          hasResults: true,
          value: 'Some search',
        }))

        expect(input.find('svg[data-icon-name="search"]').exists()).toBe(true)
      })
    })

    describe('it has a search with no results but it can\'t create options', () => {
      it('should display a search svg icon', () => {
        const input = shallow(defaultInputRenderer({
          hasResults: false,
          value: 'Some search',
          canCreate: false,
        }))

        expect(input.find('svg[data-icon-name="search"]').exists()).toBe(true)
      })
    })
  })

  describe('defaultMenuRenderer', () => {
    const renderMenu = (props = {}) =>
      mount(
        <DefaultMenuRenderer
          focusedElement={null}
          menuRef={jest.fn()}
          onOptionClick={jest.fn()}
          onOptionMouseEnter={jest.fn()}
          optionRef={jest.fn()}
          optionRenderer={defaultOptionRenderer}
          optionSearchTerms={defaultOptionSearchTerms}
          options={[
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
            { label: 'Option 4', value: 4 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 6', value: 6 },
            { label: 'Option 7', value: 7 },
            { label: 'Option 8', value: 8 },
            { label: 'Option 9', value: 9 },
          ]}
          search=""
          value={null}
          {...props}
        />,
      )

    it('should render()', () => {
      const menu = renderMenu()

      expect(toJSON(menu)).toMatchSnapshot()
    })

    describe('when it receives new options', () => {
      it('should render the new options', () => {
        const menu = renderMenu()
        const options = [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
        ]

        const snapshotBefore = toJSON(menu)

        menu.setProps({ options })

        const snapshotAfter = toJSON(menu)

        expect(snapshotBefore).not.toEqual(snapshotAfter)
      })
    })

    describe('when it receives the same options', () => {
      it('should render the same', () => {
        const menu = renderMenu()
        const snapshotBefore = toJSON(menu)

        menu.setProps({ options: menu.prop('options') })

        const snapshotAfter = toJSON(menu)

        expect(snapshotBefore).toEqual(snapshotAfter)
      })
    })

    it('should update the viewport when scrolling on the menu', () => {
      const menu = renderMenu()
      const instance = menu.instance()

      instance.updateViewport = jest.fn()

      menu.simulate('scroll')

      expect(instance.updateViewport).toHaveBeenCalled()
    })

    describe('if it has a value', () => {
      it('should always render the selected option', () => {
        const menu = renderMenu({
          value: 2,
        })
        const option = menu.findWhere(child =>
          child.is(Option) && child.key() === '2',
        )

        expect(option.exists()).toBe(true)
      })

      describe('if the selected option is not defined', () => {
        it('should not throw', () => {
          expect(() => {
            renderMenu({ value: 123123 })
          }).not.toThrow()
        })
      })
    })
  })

  describe('defaultNewOptionBuilder', () => {
    it('should return a valid option with the specified label and value', () => {
      const newOption = defaultNewOptionBuilder({
        label: 'Some text',
        value: 'Some value',
      })

      expect(newOption).toEqual({
        label: 'Some text',
        value: 'Some value',
      })
    })
  })

  describe('defaultOptionRenderer', () => {
    describe('if it has a search', () => {
      it('should build a highlighted label', () => {
        const renderedOption = shallow(defaultOptionRenderer({
          cleanDiacritics: deburr,
          option: { label: 'Test label' },
          optionSearchTerms: defaultOptionSearchTerms,
          search: 'te abe',
        }))

        expect(toJSON(renderedOption)).toMatchSnapshot()
      })
    })

    describe('if it hasn\'t a search', () => {
      it('should return the option label', () => {
        const renderedOption = defaultOptionRenderer({
          option: { label: 'Test label' },
          search: '',
        })

        expect(renderedOption).toBe('Test label')
      })
    })
  })

  describe('defaultOptionSearchTerms', () => {
    it('should return matching info for the given option', () => {
      const terms = defaultOptionSearchTerms({
        cleanDiacritics: deburr,
        option: { label: 'Test label' },
        search: 'te abe',
      })

      expect(terms).toEqual([
        {
          text: 'Te',
          matches: true,
          fromIndex: 0,
          toIndex: 2,
        },
        {
          text: 'st l',
          matches: false,
          fromIndex: 2,
          toIndex: 6,
        },
        {
          text: 'abe',
          matches: true,
          fromIndex: 6,
          toIndex: 9,
        },
        {
          text: 'l',
          matches: false,
          fromIndex: 9,
          toIndex: 10,
        },
      ])
    })
  })

  describe('defaultOptionsFilter', () => {
    describe('if it has a search', () => {
      it('should return the options that match the search without casing and diacritics', () => {
        const filtered = defaultOptionsFilter({
          cleanDiacritics: deburr,
          search: 'ó i 1',
          options: [
            { label: 'Optïòn 11' },
            { label: 'óption 27' },
            { label: 'Ôption 10' },
            { label: 'Option 23' },
          ],
        })

        expect(filtered).toEqual([
          { label: 'Optïòn 11' },
          { label: 'Ôption 10' },
        ])
      })
    })

    describe('if it hasn\'t a search', () => {
      it('should return the options without processing them', () => {
        const options = []
        const filtered = defaultOptionsFilter({
          search: '',
          options,
        })

        expect(filtered).toBe(options)
      })
    })
  })

  describe('defaultPlaceholder', () => {
    describe('if can create options', () => {
      it('should return "Select or create an option"', () => {
        const inputPlaceholder = defaultPlaceholder({
          canCreate: true,
        })

        expect(inputPlaceholder).toBe('Select or create an option')
      })
    })

    describe('if can\'t create options', () => {
      it('should return "Select an option"', () => {
        const inputPlaceholder = defaultPlaceholder({
          canCreate: false,
        })

        expect(inputPlaceholder).toBe('Select an option')
      })
    })
  })

  describe('defaultPlaceholderRenderer', () => {
    it('should render the specified placeholder', () => {
      const renderedPlaceholder = shallow(defaultPlaceholderRenderer({
        placeholder: 'Some placeholder',
      }))

      expect(renderedPlaceholder.text()).toBe('Some placeholder')
    })
  })

  describe('defaultSort', () => {
    it('should sort all options without casing and diacritics', () => {
      const sorted = defaultSort({
        cleanDiacritics: deburr,
        options: [
          { label: 'a3' },
          { label: 'b2' },
          { label: 'Á1' },
        ],
      })

      expect(sorted).toEqual([
        { label: 'Á1' },
        { label: 'a3' },
        { label: 'b2' },
      ])
    })
  })

  describe('defaultValueRenderer', () => {
    it('should render the option label', () => {
      const renderedValue = shallow(defaultValueRenderer({
        option: { label: 'Test option' },
      }))

      expect(renderedValue.text()).toBe('Test option')
    })
  })
})
