import { fonts } from '@/utils/fonts'
import Balancer from 'react-wrap-balancer'

function HomeSection() {
  return (
    <h3
      className={`text-2xl  font-medium mb-6 sm:mb-10 w-full text-gray-200 tracking-tight ${fonts.lexend} px-2`}>
      {`Hi there! I'm Tarun Soni, I make stuff for the web, and mobile.`}
      <br />
      <br />
      <Balancer>
        {`I make React apps, React Native apps, and maybe some other stuff too.`}
      </Balancer>
    </h3>
  )
}
export default HomeSection
