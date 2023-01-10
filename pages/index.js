import Stats from "../components/Stats"
import TopNav from "../components/TopNav"
import styles from '../styles/Home.module.css'
import ImgPanel from '../components/ImgPanel'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
      <TopNav/>
      </div>
      <div className={styles.contentLayout}>
      <div className={styles.statContent}>
        <Stats/>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.contentP1}>
        <ImgPanel/>
        </div>
        <div className={styles.contentP2}>
        </div>
      </div>
      </div>
    </div>
  )
}
