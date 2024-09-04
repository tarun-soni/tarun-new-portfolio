import { MadeData } from '@/types'
import { CARD_IMAGE_HEIGHT, CARD_IMAGE_WIDTH } from './constants'

const baseURL =
  'https://res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio'

//res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio/qgqn4imf56nunpynfxpu.jpg
const talkedData: MadeData[] = [
  {
    title:
      'Server driven App for React and React Native | thegeekconf - BERLIN | GeekyAnts',
    liveURL: 'https://www.youtube.com/watch?v=ed945wPEliM&',

    imageURL: `${baseURL}/qgqn4imf56nunpynfxpu.jpg`,
  },
  {
    title: `Boosting Your React Native Apps' Performance | React Native Rundown`,

    imageURL: `${baseURL}/nymmf83r0nbgh0qvwszq.jpg`,
  },
  {
    title: 'The state of expo ecosystem in 2022',
    liveURL: 'https://www.youtube.com/live/SpuLPE9bVG8?feature=share&t=5842',

    imageURL: `${baseURL}/iqwur0nejdf5yoq4mf8j.jpg`,
  },
  {
    title: 'Progressive Web Apps | The GeekyAnts Talk Show',
    liveURL: 'https://www.youtube.com/watch?v=4pBrgaFoWGY',
    imageURL: `${baseURL}/zqb3fhbmjwxzjnv5jkfr.jpg`,
  },
  {
    title: 'SVGs in React & React Native | Hack With Geeks | Episode 1',
    liveURL: 'https://www.youtube.com/watch?v=VHa_TNOl31U',
    imageURL: `${baseURL}/lnhc69s4yaeamvdbrzcw.jpg`,
  },
  {
    liveURL: 'https://www.youtube.com/watch?v=lgo3k61f4Mk',
    title:
      'From Passwords To Passkeys: Revolutionizing User Authentication | GeekSpeak',

    imageURL: `${baseURL}/vfmxr9ul79atjnzjfbzr.jpg`,
  },
]

export default talkedData

// vfmxr9ul79atjnzjfbzr
