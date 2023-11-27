import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import profilePic from '/public/images/profilePic-cropped.png'
import { ProfilePhotoProps } from './types'
import TypographyDemo from '../Typography'
import { fonts } from '@/utils/fonts'

const ProfilePhoto: FC<ProfilePhotoProps> = ({
  viewPort,
  setSelectedRoute,
}) => {
  const getDynamicProfilePicWidth = (): number => {
    switch (viewPort) {
      case 'xs':
      case 'sm':
        return 70
      case 'md':
        return 80
      case 'lg':
        return 100
      default:
        return 80
    }
  }

  return (
    <>
      <motion.div
        className="md:w-24 lg:w-48"
        transition={{
          duration: 0.1,
        }}>
        <Image
          src={profilePic}
          alt="profile-photo"
          width={getDynamicProfilePicWidth()}
          height={getDynamicProfilePicWidth()}
          className="rounded-xl ml-2 my-4"
        />
      </motion.div>

      <TypographyDemo type="h5" font={`${fonts.lexend}`}>
        Tarun Soni
      </TypographyDemo>
    </>
  )
}

export default ProfilePhoto
