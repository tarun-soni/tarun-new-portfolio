import { MyRoute } from '@/types'
import madeData from './madeData'
import wroteData from './wroteData'
import talkedData from './talked'

const getLengthOfTabData = (data: MyRoute) => {
  const map = {
    '/about': null,
    '/projects': madeData?.length,
    '/blogs': wroteData?.length,
    '/talks': talkedData?.length,
  }

  return map[data]
}

export default getLengthOfTabData
