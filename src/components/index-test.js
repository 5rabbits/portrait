import 'test/helper'
import i18n from 'helpers/i18n'
import * as components from '.'

describe('components', () => {
  it('should expose setLocale function', () => {
    expect(components.setLocale).toBeDefined()
  })

  describe('setLocale(locale)', () => {
    beforeEach(() => {
      jest.spyOn(i18n, 'changeLanguage')
    })

    afterEach(() => {
      i18n.changeLanguage.mockRestore()
    })

    it('should change the i18n language', () => {
      components.setLocale('es-CL')

      expect(i18n.changeLanguage).toHaveBeenCalled()
      expect(i18n.changeLanguage.mock.calls[0][0]).toBe('es-CL')
    })
  })
})
