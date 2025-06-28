
import styles from "./alpha_order_card.module.css";
import Image, { StaticImageData } from "next/image";
import cp from "@/public/cp.png";
import { useRouter } from "next/navigation";

interface numStringHash {
  [key: number]: string;
}

const ageRangeToRoute: numStringHash = {
  0: "young-kids",
  1: "middle-school",
  2: "high-school",
  3: "parents",
};

const ageRangeToStyle: numStringHash = {
  0: styles.youngKidsGradient,
  1: styles.middleSchoolGradient,
  2: styles.highSchoolGradient,
  3: styles.parentsGradient,
};

export const AlphaOrderCard =({
  src,
  title,
  body,
  ageRange,
}: {
  src: StaticImageData;
  title: string;
  body: string;
  ageRange: number;
}) => {
  const router = useRouter();

  return (
    <div className={`${styles.card} flex-column ${ageRangeToStyle[ageRange]}`}>
      <div className={`${styles.alphaOrderImgSection} flex-column`}>
        <Image src={src} alt="Alpha Order" />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.body}>{body}</span>

      <button
        className={styles.learnMoreButton}
        onClick={() => {
          router.push(`/${ageRangeToRoute[ageRange]}`);
        }}
      >
        Let's learn more &#10141;
      </button>
    </div>
  );
}


