import Image from 'next/image'

import Container from '../../components/Container'
import profilePic from '/public/images/profilePic-cropped.png'
import Link from 'next/link'

import leftSideBarData from '@/utils/leftSidebarData'
import { fonts } from '@/utils/fonts'

const Home = () => {
  return (
    <div className="w-screen ">
      <Container extendedClasses="w-10/12  mx-auto my-16">
        <div className="flex flex-col w-1/3 h-screen">
          <div className="flex flex-col justify-center ">
            <Image
              src={profilePic}
              alt="profile-photo"
              width={120}
              height={120}
              className="rounded-full ml-2 my-4"
            />

            <h2 className={`text-2xl font-bold ${fonts.lexend} `}>
              Tarun Soni
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center w-10/12 h-1/2">
            <ul className="flex flex-col w-full h-full mt-10">
              {leftSideBarData.map(link => (
                <div className="space-y-2 my-8" key={link.title}>
                  <Link
                    className={`${fonts.sourceCodePro}
                        text-xl font-bold text-red-400 hover:text-gray-400 active:text-red-500`}
                    href={link.path}>
                    {link.title}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/*   left sidebar with links */}

        {/* main component with switch */}
      </Container>
    </div>
  )
}

export default Home
