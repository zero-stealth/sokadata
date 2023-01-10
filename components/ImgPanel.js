import Image from "next/image"
import styles from "../styles/ImgPanel.module.css"
export default function ImgPanel() {
    const panelImg = "https://images.unsplash.com/photo-1550769839-670461c55ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

   const bgImage = {
        "background-image": `url(${panelImg})`,
    }

    return (
        <div style={bgImage} className={styles.panelContainer}>

            <div className={styles.topPanel}>

            </div>
            <div className={styles.bottomPanel}>

            </div>
        </div>
    )
}
