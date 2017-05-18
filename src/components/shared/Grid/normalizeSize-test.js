import normalizeSize from 'shared/Grid/normalizeSize'

describe('normalizeSize(size)', () => {
  describe('if size is null', () => {
    it('should return undefined', () => {
      expect(normalizeSize(null)).toBeUndefined()
    })
  })

  describe('if size is undefined', () => {
    it('should return undefined', () => {
      expect(normalizeSize()).toBeUndefined()
    })
  })

  describe('if size is "fill"', () => {
    it('should return 1', () => {
      expect(normalizeSize('fill')).toBe(1)
    })
  })

  describe('if size is "min"', () => {
    it('should return "0 0 auto"', () => {
      expect(normalizeSize('min')).toBe('0 0 auto')
    })
  })

  describe('if size is other value', () => {
    it('should return size directly', () => {
      expect(normalizeSize('1 1 100%')).toBe('1 1 100%')
    })
  })
})
