import Link from "next/link";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";
import styles from "../styles/Stats.module.css";
import StatField from "../components/StatField";

export default function Stats() {
// flag
  const kenyanFlag =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/255px-Flag_of_Kenya.svg.png";
  const franceFlag =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/250px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png";
  const moroccoFlag =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png";
  const japanFlag =
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png";
const brazilFlag = "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
const southAfricaFlag ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/125px-Flag_of_South_Africa.svg.png"
  
//league
const kenyaPremier = "https://upload.wikimedia.org/wikipedia/en/5/52/Kenya_Premier_League_logo.png";
const Laliga = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/LaLiga_logo_%28stacked%29.svg/180px-LaLiga_logo_%28stacked%29.svg.png"
const Uefa ="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/225px-UEFA_Champions_League.svg.png";
const worldCup = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/209px-2022_FIFA_World_Cup.svg.png"
return (
    <div className={styles.statContainer}>
      <div className={styles.footballLive}>
        <div className={styles.titleComponent}>
          <div className={styles.liveTitle}>
            <h3>live matches</h3>
            {/* arrow nav style */}
            <div className={styles.arrowContainer}>
              <Link href="#">
                <Arrow className={styles.arrowRight} />
              </Link>
              <Link href="#">
                <Arrow className={styles.arrowLeft} />
              </Link>
            </div>
          </div>
          <div className={styles.liveResult}>
            <div className={styles.result}>
              <Image
                src={franceFlag}
                alt="france"
                className={styles.statProfile}
                width={20}
                height={20}
              />
            </div>
            <div className={styles.scores}>
              <span>2</span>
              <hr />
              <span>0</span>
            </div>
            <div className={styles.result}>
              <Image
                src={moroccoFlag}
                alt="japan"
                className={styles.statProfile}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className={styles.countryTips}>
          <div className={styles.countryContainer}>
            <h4>Country</h4>
            {/* loop over with country data  */}
            <div className={styles.countryData}>
              {/* stat component  */}
              <StatField name="Kenya league" score="+34" img={`${kenyanFlag}`} />
              <StatField name="Japan" score="+40" img={`${japanFlag}`} />
              <StatField name="morocco" score="+48" img={`${moroccoFlag}`} />
              <StatField name="Brazil" score="+59" img={`${brazilFlag}`} />
              <StatField
                name="South Africa"
                score="+40"
                img={`${southAfricaFlag}`}
              />
            </div>
            {/* loop end  */}
          </div>
          <div className={styles.countryContainer}>
            <h4>Leagues</h4>
            {/* loop over with country data  */}
            <div className={styles.countryData}>
              {/* stat component  */}
              <StatField
                name="Kenya premier"
                score="+780"
                img={`${kenyaPremier}`}
              />
              <StatField name="laliga" score="+340" img={`${Laliga}`} />
              <StatField name="UEFA cup" score="+640" img={`${Uefa}`} />
              <StatField name="WorldCup" score="+470" img={`${worldCup}`} />
            </div>
            {/* loop end  */}
          </div>
        </div>
      </div>
    </div>
  );
}
