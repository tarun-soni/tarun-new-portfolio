import {
  GithubIcon,
  LinkedInIcon,
  PeerlistIcon,
  TwitterIconNew,
} from '../Icons'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../data/profileURLs'

export const SocialsBar = () => {
  const iconClassNames =
    'mr-1 w-max rounded-md p-2 text-lg dark:hover:bg-gray-700 hover:bg-gray-300'

  return (
    <div
      className="my-4 mb-12 rounded-md bg-skin-primary
      ">
      <nav className="flex items-center">
        <div className="mr-auto">
          <div className="flex flex-wrap items-center flex-row ">
            <a
              target="_blank"
              href={TWITTER_URL}
              className={iconClassNames}
              rel="noopener noreferrer">
              <TwitterIconNew size={18} />
            </a>
            <a
              target="_blank"
              href={GITHUB_URL}
              rel="noopener noreferrer"
              className={iconClassNames}>
              <GithubIcon size={25} />
            </a>
            <a
              target="_blank"
              href={LINKEDIN_URL}
              rel="noopener noreferrer"
              className={iconClassNames}>
              <LinkedInIcon size={28} />
            </a>
            <a
              target="_blank"
              href={LINKEDIN_URL}
              rel="noopener noreferrer"
              className={iconClassNames}>
              <PeerlistIcon size={24} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
