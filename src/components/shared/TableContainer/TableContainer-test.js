import { React, toJSON, mount } from 'test/helper'
import TableContainer from 'shared/TableContainer'

describe('TableContainer', () => {
  it('should render with minimum props', () => {
    const component = mount(
      <TableContainer>
        Test
      </TableContainer>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  describe('if props.filters is defined', () => {
    describe('if props.showFilters', () => {
      it('should render the right link', () => {
        const component = mount(
          <TableContainer
            filters={<div>Some filters</div>}
            showFilters
            >
            Test
          </TableContainer>,
        )

        expect(toJSON(component)).toMatchSnapshot()
      })
    })

    describe('if not props.showFilters', () => {
      it('should render the right link', () => {
        const component = mount(
          <TableContainer
            filters={<div>Some filters</div>}
            showFilters={false}
            >
            Test
          </TableContainer>,
        )

        expect(toJSON(component)).toMatchSnapshot()
      })
    })
  })

  describe('componentWillReceiveProps(nextProps)', () => {
    describe('if props.showFilters changes', () => {
      it('should assign the new value to state.showFilters', () => {
        const component = mount(
          <TableContainer showFilters={false}>
            Test
          </TableContainer>,
        )

        component.setProps({ showFilters: true })

        expect(component.state('showFilters')).toBe(true)
      })
    })

    describe('if props.showFilters do not changes', () => {
      it('should not change the state', () => {
        const component = mount(
          <TableContainer showFilters={false}>
            Test
          </TableContainer>,
        )
        const instance = component.instance()

        instance.setState = jest.fn()
        component.setProps({ showFilters: false })

        expect(instance.setState).not.toHaveBeenCalled()
      })
    })
  })

  describe('getDownloadIcon()', () => {
    describe('if props.downloadFormat is csv', () => {
      it('should return a fa-file-excel-o icon', () => {
        const component = mount(
          <TableContainer downloadFormat="csv">
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const icon = instance.getDownloadIcon()

        expect(icon).toMatchSnapshot()
      })
    })

    describe('if props.downloadFormat is excel', () => {
      it('should return a fa-file-excel-o icon', () => {
        const component = mount(
          <TableContainer downloadFormat="excel">
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const icon = instance.getDownloadIcon()

        expect(icon).toMatchSnapshot()
      })
    })

    describe('if props.downloadFormat is pdf', () => {
      it('should return a fa-file-pdf-o icon', () => {
        const component = mount(
          <TableContainer downloadFormat="pdf">
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const icon = instance.getDownloadIcon()

        expect(icon).toMatchSnapshot()
      })
    })

    describe('if props.downloadFormat is word', () => {
      it('should return a fa-file-word-o icon', () => {
        const component = mount(
          <TableContainer downloadFormat="word">
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const icon = instance.getDownloadIcon()

        expect(icon).toMatchSnapshot()
      })
    })

    describe('if props.downloadFormat is other format', () => {
      it('should return null', () => {
        const component = mount(
          <TableContainer downloadFormat={null}>
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const icon = instance.getDownloadIcon()

        expect(icon).toBeNull()
      })
    })
  })

  describe('filtersRef(filters)', () => {
    describe('if filters is mounting and state.filtersPosition is undefined', () => {
      it('should set the top and bottom position of the filters', () => {
        const component = mount(
          <TableContainer>
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const filters = {
          getBoundingClientRect: () => ({ top: 20 }),
        }

        component.setState({ filtersPosition: null })
        instance.filtersRef(filters)

        expect(component.state('filtersPosition')).toEqual({
          top: 20,
          bottom: 0,
        })
      })
    })

    describe('if filters is unmounting', () => {
      it('should not change the state', () => {
        const component = mount(
          <TableContainer>
            Test
          </TableContainer>,
        )
        const instance = component.instance()
        const spy = jest.fn()

        component.setState = spy
        instance.filtersRef(null)

        expect(spy).not.toHaveBeenCalled()
      })
    })
  })

  describe('handleDownload(event)', () => {
    it('should prevent the event default action', () => {
      const event = { preventDefault: jest.fn() }
      const component = mount(
        <TableContainer>
          Test
        </TableContainer>,
      )
      const instance = component.instance()

      instance.handleDownload(event)

      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    describe('if props.onDownload is defined', () => {
      it('should call props.onDownload passing the download format', () => {
        const event = { preventDefault: jest.fn() }
        const handleDownload = jest.fn()
        const component = mount(
          <TableContainer
            onDownload={handleDownload}
            downloadFormat="excel"
            >
            Test
          </TableContainer>,
        )
        const instance = component.instance()

        instance.handleDownload(event)

        expect(handleDownload).toHaveBeenCalledTimes(1)
        expect(handleDownload).toHaveBeenCalledWith('excel')
      })
    })

    describe('if props.onDownload is undefined', () => {
      it('should not fail', () => {
        const event = { preventDefault: jest.fn() }
        const component = mount(
          <TableContainer>
            Test
          </TableContainer>,
        )
        const instance = component.instance()

        expect(() => {
          instance.handleDownload(event)
        }).not.toThrow()
      })
    })
  })

  describe('handleFiltersToggle(event)', () => {
    it('should prevent the event default action', () => {
      const event = { preventDefault: jest.fn() }
      const component = mount(
        <TableContainer>
          Test
        </TableContainer>,
      )
      const instance = component.instance()

      instance.handleFiltersToggle(event)

      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    describe('if props.showFilters is defined', () => {
      it('should not try to change the state', () => {
        const event = { preventDefault: jest.fn() }
        const component = mount(
          <TableContainer showFilters={false}>
            Test
          </TableContainer>,
        )
        const instance = component.instance()

        instance.setState = jest.fn()
        instance.handleFiltersToggle(event)

        expect(instance.setState).not.toHaveBeenCalled()
      })
    })

    it('should call props.onFiltersToggle passing the opposite of state.showFilters', () => {
      const event = { preventDefault: jest.fn() }
      const handleFiltersToggle = jest.fn()
      const component = mount(
        <TableContainer
          onFiltersToggle={handleFiltersToggle}
          showFilters={false}
          >
          Test
        </TableContainer>,
      )
      const instance = component.instance()

      instance.handleFiltersToggle(event)

      expect(handleFiltersToggle).toHaveBeenCalledTimes(1)
      expect(handleFiltersToggle).toHaveBeenCalledWith(true)
    })
  })
})
