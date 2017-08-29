import { React, toJSON, mount, shallow } from 'test/helper'
import deburr from 'lodash/deburr'
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

describe('Select', () => {
  it('should render with minimum props', () => {
    const component = mount(<Select options={[]} />)

    expect(toJSON(component)).toMatchSnapshot()
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
