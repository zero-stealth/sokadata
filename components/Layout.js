import SideNav from "./SideNav";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.appLayout}>
      <div className={styles.side}>
        <SideNav />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
