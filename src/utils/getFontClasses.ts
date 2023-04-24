const getFontClasses = (viewPort: string) => {
  switch (viewPort) {
    case 'lg':
      return 'text-2xl'
    case 'md':
      return 'text-xl'
    case 'sm':
      return 'text-lg'
    case 'xs':
      return 'text-base'
    default:
      return 'text-2xl'
  }
}

export default getFontClasses
