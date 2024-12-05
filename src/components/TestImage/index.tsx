import { CldImage } from 'next-cloudinary'

interface TestImageProps {
  alt: string
}

const TestImage: React.FC<TestImageProps> = ({ alt }) => {
  return (
    <CldImage
      alt="test"
      className="w-4 h-10"
      width={200}
      height={200}
      src="v1669089781"
      namedTransformations={[
        'e_sharpen:50',
        'e_upscale',
        'tarun-new-portfolio/boq96vd0zuunr5scmx31.jpg',
      ]}
      quality={100}
    />
  )
}

export default TestImage
