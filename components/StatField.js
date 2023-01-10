import Link from "next/link";
import Image from "next/image";
import styles from "../styles/StatField.module.css";

export default function StatField({ img, name, score }) {
  return (
      <div className={styles.fieldItem}>
        <div className={styles.itemDetail}>
          <Image
            src={img}
            alt={`${name} logo`}
            className={styles.statProfile}
            width={20}
            height={20}
          />
          <span>{name}</span>
        </div>
        <span>{score}</span>
      </div>
  );
}
