import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            Hey 👋
          </h1>
          <h2>
            {`I\u0027m`} Tarun
          </h2>
        </div>
        <div className={styles.description}>
          This portfolio is under construction. 🛠️
        </div>
      </main>
    </>
  )
}
