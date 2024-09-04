import { CldImage } from 'next-cloudinary'

interface TestImageProps {
  alt: string
}

const TestImage: React.FC<TestImageProps> = ({ alt }) => {
  // 'https://res.cloudinary.com/dro3nqmss/image/upload/e_sharpen:50/e_upscale/tarun-new-portfolio/qgqn4imf56nunpynfxpu.jpg',

  return (
    <CldImage
      alt="test"
      // Use this sample image or upload your own via the Media Explorer

      className="w-4 h-10"
      width={200}
      height={200}
      // src="https://res.cloudinary.com/dro3nqmss/image/upload/v1669089781/tarun-new-portfolio/boq96vd0zuunr5scmx31.jpg"
      src="v1669089781"
      namedTransformations={[
        'e_sharpen:50',
        'e_upscale',
        'tarun-new-portfolio/boq96vd0zuunr5scmx31.jpg',
      ]}
      // highest resolution
      quality="auto"

      // crop={{
      //   type: 'fill',
      //   source: true,
      // }}
    />
  )
}

export default TestImage
