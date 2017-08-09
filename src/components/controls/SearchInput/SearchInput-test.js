import { React, toJSON, mount } from 'test/helper'
import SearchInput from 'controls/SearchInput'

describe('SearchInput', () => {
  it('should render with minimum props', () => {
    const component = mount(<SearchInput />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('setValue(value)', () => {
    describe('if props.onChange is defined', () => {
      it('should call props.onChange passing the new value', () => {
        const handleChange = jest.fn()
        const component = mount(<SearchInput onChange={handleChange} />)
        const instance = component.instance()

        instance.setValue('test')

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenCalledWith('test')
      })
    })

    describe('if props.onChange is undefined', () => {
      it('should not fail', () => {
        const component = mount(<SearchInput />)
        const instance = component.instance()

        expect(() => {
          instance.setValue('test')
        }).not.toThrow()
      })
    })

    describe('if props.value is != ""', () => {
      it('should not call to onChange', () => {
        const onClick = jest.fn()
        const component = mount(
          <SearchInput
            value="test"
            onChange={onClick}
          />,
        )
        const instance = component.instance()

        instance.setValue('aa')

        expect(onClick).not.toHaveBeenCalled()
      })
    })
  })

  describe('focus()', () => {
    it('should call focus on the underlying input', () => {
      const component = mount(<SearchInput />)
      const instance = component.instance()
      const spy = jest.fn()

      instance.input.focus = spy
      instance.focus()

      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('handleClearClick(event)', () => {
    it('should prevent the event default action', () => {
      const event = { preventDefault: jest.fn() }
      const component = mount(<SearchInput />)
      const instance = component.instance()

      instance.handleClearClick(event)

      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    it('should call setValue with an empty string', () => {
      const event = { preventDefault: jest.fn() }
      const component = mount(<SearchInput />)
      const instance = component.instance()
      const spy = jest.fn()

      instance.setValue = spy
      instance.handleClearClick(event)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('')
    })

    it('should call focus', () => {
      const event = { preventDefault: jest.fn() }
      const component = mount(<SearchInput />)
      const instance = component.instance()
      const spy = jest.fn()

      instance.focus = spy
      instance.handleClearClick(event)

      expect(spy).toHaveBeenCalledTimes(1)
    })

    describe('if props.onClear is defined', () => {
      it('should call props.onClear', () => {
        const event = { preventDefault: jest.fn() }
        const handleClear = jest.fn()
        const component = mount(<SearchInput onClear={handleClear} />)
        const instance = component.instance()

        instance.handleClearClick(event)

        expect(handleClear).toHaveBeenCalledTimes(1)
      })
    })

    describe('if props.onClear is undefined', () => {
      it('should call props.onClear', () => {
        const event = { preventDefault: jest.fn() }
        const component = mount(<SearchInput />)
        const instance = component.instance()

        expect(() => {
          instance.handleClearClick(event)
        }).not.toThrow()
      })
    })
  })

  describe('handleChange(event)', () => {
    it('should call setValue passing the event target value', () => {
      const event = { target: { value: 'test' } }
      const component = mount(<SearchInput />)
      const instance = component.instance()
      const spy = jest.fn()

      instance.setValue = spy
      instance.handleChange(event)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('test')
    })
  })

  describe('handleKeyDown(event)', () => {
    describe('if props.onSubmit is defined', () => {
      describe('if the pressed key is ENTER', () => {
        it('should call props.onSubmit passing the current value', () => {
          const event = { key: 'Enter' }
          const handleSubmit = jest.fn()
          const component = mount(<SearchInput onSubmit={handleSubmit} />)
          const instance = component.instance()

          component.setState({ value: 'test' })
          instance.handleKeyDown(event)

          expect(handleSubmit).toHaveBeenCalledTimes(1)
          expect(handleSubmit).toHaveBeenCalledWith('test')
        })
      })

      describe('if the pressed key is not ENTER', () => {
        it('should not call props.onSubmit', () => {
          const event = { key: 'A' }
          const handleSubmit = jest.fn()
          const component = mount(<SearchInput onSubmit={handleSubmit} />)
          const instance = component.instance()

          instance.handleKeyDown(event)

          expect(handleSubmit).not.toHaveBeenCalled()
        })
      })
    })

    describe('if props.onSubmit is undefined', () => {
      it('should not fail', () => {
        const event = { key: 'Enter' }
        const component = mount(<SearchInput />)
        const instance = component.instance()

        expect(() => {
          instance.handleKeyDown(event)
        }).not.toThrow()
      })
    })
  })
})
