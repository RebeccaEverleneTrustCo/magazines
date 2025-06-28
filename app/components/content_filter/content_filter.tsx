
"use client";
import styles from "./content_filter.module.css";
import Image from "next/image";
import downArrow from "@/public/down_arrow.svg";

function ContentFilter() {
  return (
    <>
      <span className={styles.filterTypeTitle}>Filter</span>

      <div className={`flex-row justify-start`}>
        <span className={`${styles.filter}`}>Category</span>
        <div className={`${styles.filter} flex-row`}>
          Likes{" "}
          <Image
            alt="Down Arrow"
            src={downArrow}
            className={styles.downArrow}
          />
        </div>

        <div className={`${styles.filter} flex-row`}>
          Most Recent{" "}
          <Image
            alt="Down Arrow"
            src={downArrow}
            className={styles.downArrow}
          />
        </div>
      </div>
    </>
  );
}

export default ContentFilter;

