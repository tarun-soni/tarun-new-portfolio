import useAppStore from '@/store'
import { DiagonalArrow } from '../Icons'
import { fonts } from '@/utils/fonts'

const CardAction = () => {
  const borderClasses = 'border-2 border-red-300 rounded px-3 py-2  w-fit -my-2'

  const { selectedRoute } = useAppStore()

  const getActionTitle = () => {
    switch (selectedRoute) {
      case '/about':
        return null
      case '/projects':
        return 'View'
      case '/blogs':
        return 'Read'
      case '/talks':
        return 'Watch'
      default:
        return null
    }
  }

  return (
    <div className="align-bottom flex flex-row -my-2 mt-4">
      <div
        className={`underline text-sm font-medium text-white-100 tracking-tight ${fonts.inter}`}>
        {getActionTitle()}
      </div>
      <div className="items-center">
        <div style={{ marginTop: '2px' }}>
          <DiagonalArrow size={18} />
        </div>
      </div>
    </div>
  )
}

export default CardAction