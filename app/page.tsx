import Image from "next/image";
import styles from "./page.module.css";
import magnifyingGlass from "@/public/magnifying_glass.svg";
import arrowIcon from "@/public/arrow_icon.svg";
import shape from "@/public/Shapes.svg";
import whiteBlondNurse from "@/public/nurse_white_blond.svg";

import AnimatedCard from "./components/animated_card/animated_card";
import youngKidMascot from "@/public/young_kids_mascot.svg";
import youngKids1 from "@/public/young_kids_1.png";
import youngKids2 from "@/public/young_kids_2.png";
import youngKids3 from "@/public/young_kids_3.png";
import youngKids4 from "@/public/young_kids_4.png";
import youngKids5 from "@/public/young_kids_5.png";
import youngKids6 from "@/public/young_kids_6.png";
import youngKids7 from "@/public/young_kids_7.png";
import youngKids8 from "@/public/young_kids_8.png";
import youngKids9 from "@/public/young_kids_9.png";

import middleSchoolMascot from "@/public/middle_school_mascot.svg";
import middleSchool1 from "@/public/middle_school_1.png";
import middleSchool2 from "@/public/middle_school_2.png";
import middleSchool3 from "@/public/middle_school_3.png";
import middleSchool4 from "@/public/middle_school_4.png";

import highSchoolMascot from "@/public/high_school_mascot.svg";
import highSchool1 from "@/public/high_school_1.png";
import highSchool2 from "@/public/high_school_2.png";
import highSchool3 from "@/public/high_school_3.png";
import highSchool4 from "@/public/high_school_4.png";

import parentsMascot from "@/public/parents_mascot.svg";
import parents1 from "@/public/parents_1.png";
import parents2 from "@/public/parents_2.png";
import parents3 from "@/public/parents_3.png";
import parents4 from "@/public/parents_4.png";
import AlphaOrder from "./alpha_order";

const youngKidsImgs = [
  youngKids1,
  youngKids2,
  youngKids3,
  youngKids4,
  youngKids5,
  youngKids6,
  youngKids7,
  youngKids8,
  youngKids9,
];

const middleSchoolImgs = [
  middleSchool1,
  middleSchool2,
  middleSchool3,
  middleSchool4,
];

const highSchoolImgs = [highSchool1, highSchool2, highSchool3, highSchool4];
const parentsImg = [parents1, parents2, parents3, parents4];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.section} ${styles.headerBg}`}>
        <div className={`flex-row`}>
          <div className={`flex-column ${styles.headerTextSection}`}>
            <span className={styles.headerTitle}>
              Fuel Your Medical Genius Magazines
              <Image
                src={magnifyingGlass}
                alt="Magnifying Glass"
                className={`${styles.titleImg} ${styles.magnifyingGlassImg}`}
              />
              <Image
                src={shape}
                alt="Shape"
                className={`${styles.titleImg} ${styles.shapeImg}`}
              />
            </span>
            <button className={`button ${styles.exploreButton} flex-row`}>
              <span>Explore Collection</span>
              <Image src={arrowIcon} alt="Arrow Icon" />
            </button>

            <span className={styles.headerSubtitle}>
              I’m Nurse Temp. We’ve pulled together some wonderful resources for
              your enjoyment. Get ready to see some of the coolest pictures of
              the body and learn exciting fun facts about your incredible
              anatomy!
            </span>
          </div>

          <Image
            src={whiteBlondNurse}
            alt="Nurse"
            className={styles.headerImg}
          />
        </div>

        <span className={styles.h2}>
          Discover Magazines by <span className={`tc-indigo`}>Age Range</span>
        </span>
    ;  </div>

      <div className={`${styles.section} flex-row ${styles.ageRangeSection} `}>
        <div className={styles.youngKidsGradient}>
          <Image
            src={youngKidMascot}
            alt="Young Kid Mascot"
            className={styles.ageRangeMascot}
          />
          <AnimatedCard src={youngKidsImgs} text="Young Kids" href="young-kids" />
        </div>
        <div className={styles.middleSchoolGradient}>
          <Image
            src={middleSchoolMascot}
            alt="Middle School Mascot"
            className={styles.ageRangeMascot}
          />
          <AnimatedCard src={middleSchoolImgs} text="Middle School" href="" />
        </div>

        <div className={styles.highSchoolGradient}>
          <Image
            src={highSchoolMascot}
            alt="High School Mascot"
            className={styles.ageRangeMascot}
          />
          <AnimatedCard src={highSchoolImgs} text="High School" href=""/>
        </div>

        <div className={styles.parentsGradient}>
          <Image
            src={parentsMascot}
            alt="Parents Mascot"
            className={styles.ageRangeMascot}
          />
          <AnimatedCard src={parentsImg} text="Parents" href="parents"/>
        </div>
      </div>

      <div className={`${styles.section} ${styles.discoverSection} flex-column`}>
        <span className={styles.h2}>
          Discover Magazines by{" "}
          <span className={`tc-pale-yellow`}>Alpha Order</span>
        </span>

        <AlphaOrder />
      </div>
    </main>
  );
}
