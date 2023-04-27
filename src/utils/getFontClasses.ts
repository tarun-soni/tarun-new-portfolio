const getFontClasses = (viewPort: string) => {
  switch (viewPort) {
    case 'lg':
      return 'text-xl'
    case 'md':
      return 'text-xl'
    case 'sm':
      return 'text-sm'
    case 'xs':
      return 'text-sm'
    default:
      return 'text-base'
  }
}

export default getFontClasses
