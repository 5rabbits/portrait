/* eslint-disable react/no-multi-comp */

import { React, PropTypes, mount } from 'test/helper'
import controllable from './controllable'

describe('@controllable(propsMapping, instanceMethods = [])', () => {
  class Counter extends React.PureComponent {
    static propTypes = {
      onChange: PropTypes.func,
      value: PropTypes.number,
    }

    static defaultProps = {
      defaultValue: 2,
    }

    getValue = () => (
      this.props.value
    )

    handleClick = () => {
      this.props.onChange(this.props.value + 1)
    }

    render() {
      return (
        <button
          onClick={this.handleClick}
          type="button"
          >
          {this.props.value}
        </button>
      )
    }
  }

  const ControlledCounter = controllable({ value: 'onChange' }, ['getValue'])(Counter)

  describe('the wrapped component', () => {
    it('should respect the `defaultValue` defined in the component', () => {
      const component = mount(<ControlledCounter />)

      expect(component.text()).toBe('2')
    })

    describe('when uncontrolled', () => {
      it('should respect the defaultValue', () => {
        const component = mount(<ControlledCounter defaultValue={4} />)

        expect(component.text()).toBe('4')
      })

      it('should be able to work uncontrolled', () => {
        const component = mount(<ControlledCounter defaultValue={4} />)

        component.simulate('click')

        expect(component.text()).toBe('5')
      })

      it('should propagate the change func', () => {
        const onChange = jest.fn()
        const component = mount(<ControlledCounter defaultValue={4} onChange={onChange} />)

        component.simulate('click')

        expect(onChange).toHaveBeenCalledWith(5)
        expect(component.text()).toBe('5')
      })

      describe('if the new value is the same as the current', () => {
        it('should not mutate the inner state', () => {
          const component = mount(<ControlledCounter defaultValue={4} />)
          const instance = component.instance()

          instance.setState = jest.fn()
          instance.controllableHandlers.value(4)

          expect(instance.setState).not.toHaveBeenCalled()
        })

        it('should not propagate the change func', () => {
          const onChange = jest.fn()
          const component = mount(<ControlledCounter defaultValue={4} onChange={onChange} />)
          const instance = component.instance()

          instance.controllableHandlers.value(4)

          expect(onChange).not.toHaveBeenCalled()
        })
      })
    })

    describe('when controlled', () => {
      it('should not change the inner state directly', () => {
        const component = mount(<ControlledCounter value={4} />)

        component.simulate('click')

        expect(component.text()).toBe('4')
      })

      it('should propagate the change func', () => {
        const onChange = jest.fn()
        const component = mount(<ControlledCounter value={4} onChange={onChange} />)

        component.simulate('click')

        expect(onChange).toHaveBeenCalledWith(5)
        expect(component.text()).toBe('4')
      })

      it('should be able to work controlled', () => {
        const component = mount(<ControlledCounter value={4} />)

        component.setProps({ value: 6 })

        expect(component.text()).toBe('6')
      })

      describe('if the new value is the same as the current', () => {
        it('should not mutate the inner state', () => {
          const component = mount(<ControlledCounter value={4} />)
          const instance = component.instance()

          instance.setState = jest.fn()
          component.setProps({ value: 4 })

          expect(instance.setState).not.toHaveBeenCalled()
        })
      })
    })
  })

  it('should expose the specified `instanceMethods`', () => {
    const component = mount(<ControlledCounter />)
    const instance = component.instance()

    expect(instance.getValue).toBeDefined()
    expect(instance.getValue()).toBe(2)
    expect(instance.handleClick).not.toBeDefined()
  })

  it('should expose the wrapped component class', () => {
    expect(ControlledCounter.WrappedComponent).toBe(Counter)
  })

  it('should expose the instance of wrapped component', () => {
    const component = mount(<ControlledCounter />)
    const instance = component.instance()

    expect(instance.getWrappedInstance()).toBeInstanceOf(Counter)
  })

  it('should not fail if no instanceMethods are specified', () => {
    expect(() => {
      @controllable({ value: 'onChange' })
      class Example extends React.PureComponent {
        render() {
          return <span />
        }
      }

      mount(<Example />)
    }).not.toThrow()
  })
})
