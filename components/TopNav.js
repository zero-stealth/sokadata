import Link from "next/link";
import Logo from "../assets/sokadata.svg"
import styles from "../styles/TopNav.module.css";

export default function TopNav() {
  return (
    <div className={styles.topNavContainer}>
      <div className={styles.topNav}>
        <Link href='#' className={styles.topBar}>
          <h5>Sports</h5>
        </Link>
        <Link href='#' className={styles.topBar}>
          <h5>Liveplay</h5>
        </Link>
        <Link href='#' className={styles.topBar}>
          <h5>Promotion</h5>
        </Link>
        <Link href='#'className={styles.topBar}>
          <h5>News</h5>
        </Link>
        <Link href='#' className={styles.topBar}>
          <h5>Statistics</h5>
        </Link>
      </div>
      <div className={styles.topItem}>
        <form action="">
          <select className={styles.country}>
            <option value="Murder">Kenya</option>
            <option value="Assault">United states</option>
            <option value="kidnap">South Africa</option>
            <option value="Wanted">Japan</option>
          </select>
        </form>
        <Link href="#">
        <button className={styles.btn}>
          <span>Login</span>
        </button>
        </Link>
      </div>
    </div>
  );
}
