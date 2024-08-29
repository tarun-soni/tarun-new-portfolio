import {
  GithubIcon,
  LinkedInIcon,
  PeerlistIcon,
  TwitterIconNew,
} from '../Icons'
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PEERLIST_URL,
  TWITTER_URL,
} from '../../data/profileURLs'
import { ICON_BUTTON_COMMON_STYLES } from '@/data/constants'
import useViewport from '@/hooks/useViewPort'
import ViewResumeButton from '../ViewResumeButton'

export const SocialsBar = () => {
  const iconClassNames =
    'mr-1 w-max rounded-md p-2 text-lg dark:hover:bg-gray-700 hover:bg-gray-300'

  const viewPort = useViewport()
  const ICON_SIZE = viewPort === 'xs' ? 20 : 30

  return (
    <>
      <div className="mt-4 rounded-md bg-skin-primary ">
        <nav className="flex items-center">
          <div className="mr-auto">
            <div className="flex flex-wrap items-center flex-row gap-x-1">
              <a
                target="_blank"
                href={TWITTER_URL}
                className={ICON_BUTTON_COMMON_STYLES}
                rel="noopener noreferrer"
                aria-label="Visitor Twitter Profile"
              >
                <TwitterIconNew size={ICON_SIZE} />
              </a>
              <a
                target="_blank"
                href={GITHUB_URL}
                rel="noopener noreferrer"
                className={ICON_BUTTON_COMMON_STYLES}
                aria-label="Visitor Github Profile"
              >
                <GithubIcon size={ICON_SIZE} />
              </a>
              <a
                target="_blank"
                href={LINKEDIN_URL}
                rel="noopener noreferrer"
                className={ICON_BUTTON_COMMON_STYLES}
                aria-label="Visitor Linkedin Profile"
              >
                <LinkedInIcon size={ICON_SIZE} />
              </a>
              <a
                target="_blank"
                href={PEERLIST_URL}
                rel="noopener noreferrer"
                className={ICON_BUTTON_COMMON_STYLES}
                aria-label="Visitor Peerlist Profile"
              >
                <PeerlistIcon size={ICON_SIZE} />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="mt-4">
        <ViewResumeButton type="TEXT" />
      </div>
    </>
  )
}
