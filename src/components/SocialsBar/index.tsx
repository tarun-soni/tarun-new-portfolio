import { GithubIcon, LinkedInIcon, TwitterIcon, TwitterIconNew } from '../Icons'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../data/profileURLs'

export const SocialsBar = () => {
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
              className="mr-1 w-max rounded-md p-2 text-lg text-[#1DA1F2]  hover:bg-gray-800"
              rel="noopener noreferrer">
              <TwitterIconNew size={18} />
            </a>
            <a
              target="_blank"
              href={GITHUB_URL}
              className="mr-1 w-max rounded-md p-2 text-lg hover:bg-gray-800"
              rel="noopener noreferrer">
              <GithubIcon size={25} />
            </a>
            <a
              target="_blank"
              href={LINKEDIN_URL}
              className="w-max rounded-md p-2 text-lg  hover:bg-gray-800 "
              rel="noopener noreferrer">
              <LinkedInIcon size={25} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
