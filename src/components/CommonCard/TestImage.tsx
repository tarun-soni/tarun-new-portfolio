import { CldImage } from 'next-cloudinary'

interface TestImageProps {
  alt: string
}

const TestImage: React.FC<TestImageProps> = ({ alt }) => {
  return (
    <CldImage
      alt="test"
      src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
      fill={'responsive'}
      className="w-4 h-10"
      // crop={{
      //   type: 'fill',
      //   source: true,
      // }}
    />
  )
}

export default TestImage
