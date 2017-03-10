export default size => {
  switch (size) {
    case null:
    case undefined:
      return undefined

    case 'fill':
      return 1

    case 'min':
      return '0 0 auto'

    default:
      return size
  }
}
