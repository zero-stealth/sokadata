import Link from "next/link"
import Fire from "../assets/top.svg"
import Rugby from "../assets/rugby.svg"
// import Resize from "../assets/arrow.svg"
import Logo from "../assets/sokadata.svg"
import Football from "../assets/football.svg"
import styles from "../styles/SideNav.module.css"
export default function SideNav() {

    // function collapse() {
    //     console.log('collapse')
    // }

  return (
    <div className={styles.sideComponent}>
            <div className={styles.topContainer}>
                {/* <Resize className={styles.resize} onToggle={collapse()}/>         */}
                <Logo className={styles.logo}/>
            </div>
            <div className={styles.sideNav}>
                    <Link href="#" className={styles.sideLink}>
                        <div className={styles.links}>
                        <Fire className={styles.fire}/>
                        <span>Top Matches</span>
                        </div>
                        <span>+10</span>                    
                    </Link>
                    <Link href="#" className={styles.sideLink}>
                    <div className={styles.links}>
                    <Football className={styles.football}/>
                        <span>Football</span>
                    </div>
                        <span>+8</span>                    
                    </Link>
                    <Link href="#" className={styles.sideLink}>
                    <div className={styles.links}>
                    <Rugby className={styles.rugby}/>
                        <span>Rugby</span>
                    </div>
                        <span>+9</span>                    
                    </Link>
                </div>
        </div>
  )
}
