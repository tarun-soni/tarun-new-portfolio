import useAppStore from '@/store'
import { FC } from 'react'

type IconProps = {
  size?: number
}

export const GithubIcon: FC<IconProps> = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
  </svg>
)

export const SpotifyIcon: FC<IconProps> = ({ size = 30, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    {...props}
    viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"></path>
  </svg>
)

export const LinkedInIcon: FC<IconProps> = ({ size = 30, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path>
  </svg>
)

export const TwitterIcon: FC<IconProps> = ({ size = 30, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path>
  </svg>
)

export const TwitterIconNew: FC<IconProps> = ({ size = 30, ...props }) => {
  const { isDarkMode } = useAppStore()

  return (
    <svg
      {...props}
      width={size / 1.5}
      height={size / 1.5}
      viewBox="0 0 1200 1227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
        fill={isDarkMode ? '#fff' : '#000'}
      />
    </svg>
  )
}
export const SearchIcon: FC<IconProps> = ({ size = 30, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    className="iconify iconify--ic"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path>
  </svg>
)

export const CommandIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className="text-skin-secondary">
    <path
      fill="currentColor"
      d="M17.5 3C15.57 3 14 4.57 14 6.5V8h-4V6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5S4.57 10 6.5 10H8v4H6.5C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5V16h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H16v-4h1.5c1.93 0 3.5-1.57 3.5-3.5S19.43 3 17.5 3zM16 8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S18.33 8 17.5 8H16zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5V8H6.5zm3.5 6v-4h4v4h-4zm7.5 5c-.83 0-1.5-.67-1.5-1.5V16h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16H8v1.5c0 .83-.67 1.5-1.5 1.5z"></path>
  </svg>
)

export const Moon = () => (
  <svg
    width="1.25rem"
    height="1.25rem"
    viewBox="0 0 24 24"
    className="text-skin-secondary">
    <path
      fill="currentColor"
      d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142c3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
  </svg>
)

export const Sun = () => (
  <svg
    width="1.25rem"
    height="1.25rem"
    viewBox="0 0 24 24"
    className="text-skin-secondary">
    <path
      fill="currentColor"
      d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79l1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41l1.79-1.79zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79l-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41l-1.79 1.8z"></path>
  </svg>
)

export const DiagonalArrow: FC<IconProps> = ({ size = 30, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"></path>
  </svg>
)

export const RightArrow = (props: any) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path>
  </svg>
)

export const PauseIcon = (props: any) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
  </svg>
)

export const ResumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M14 2.26v4.13c0 .56 0 .84.1 1.05 .09.18.24.34.43.43 .21.1.49.1 1.05.1h4.13m-3.74 4.99h-8m8 4h-8m2-8h-2m6-7h-5.2c-1.69 0-2.53 0-3.17.32 -.57.28-1.03.74-1.32 1.31 -.33.64-.33 1.48-.33 3.16v10.4c0 1.68 0 2.52.32 3.16 .28.56.74 1.02 1.31 1.31 .64.32 1.48.32 3.16.32h6.4c1.68 0 2.52 0 3.16-.33 .56-.29 1.02-.75 1.31-1.32 .32-.65.32-1.49.32-3.17v-9.2l-6-6Z"
    />
  </svg>
)

export const PeerlistIcon = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28 0C6.22222 0 0 6.22222 0 28C0 49.7778 6.23778 56 28 56C49.7622 56 56 49.7778 56 28C56 6.22222 49.7622 0 28 0Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.24755 7.24755C3.5875 10.9076 2 17.153 2 28C2 38.8461 3.59108 45.0918 7.25306 48.7521C10.9153 52.4127 17.1612 54 28 54C38.8388 54 45.0847 52.4127 48.7469 48.7521C52.4089 45.0918 54 38.8461 54 28C54 17.1539 52.4089 10.9082 48.7469 7.24787C45.0847 3.58733 38.8388 2 28 2C17.153 2 10.9076 3.5875 7.24755 7.24755ZM0 28C0 6.22222 6.22222 0 28 0C49.7622 0 56 6.22222 56 28C56 49.7778 49.7622 56 28 56C6.23778 56 0 49.7778 0 28Z"
        fill="#24292E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 13H15V47H24.3846V39.8889H27.0769C34.7305 39.8889 41 33.9048 41 26.4444C41 18.984 34.7305 13 27.0769 13ZM24.3846 30.7778V22.1111H27.0769C29.6194 22.1111 31.6154 24.0864 31.6154 26.4444C31.6154 28.8024 29.6194 30.7778 27.0769 30.7778H24.3846Z"
        fill="#24292E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 12H29.0769C36.2141 12 42 17.5716 42 24.4444C42 31.3173 36.2141 36.8889 29.0769 36.8889H25.3846V44H18V12ZM25.3846 29.7778H29.0769C32.1357 29.7778 34.6154 27.39 34.6154 24.4444C34.6154 21.4989 32.1357 19.1111 29.0769 19.1111H25.3846V29.7778Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 11H29.0769C36.7305 11 43 16.984 43 24.4444C43 31.9048 36.7305 37.8889 29.0769 37.8889H26.3846V45H17V11ZM19 13V43H24.3846V35.8889H29.0769C35.6978 35.8889 41 30.7298 41 24.4444C41 18.1591 35.6978 13 29.0769 13H19ZM24.3846 18.1111H29.0769C32.6521 18.1111 35.6154 20.9114 35.6154 24.4444C35.6154 27.9775 32.6521 30.7778 29.0769 30.7778H24.3846V18.1111ZM26.3846 20.1111V28.7778H29.0769C31.6194 28.7778 33.6154 26.8024 33.6154 24.4444C33.6154 22.0864 31.6194 20.1111 29.0769 20.1111H26.3846Z"
        fill="#24292E"
      />
    </svg>
  )
}
