"use client";

import styles from "./content_filter.module.css";
import Image from "next/image";
import downArrow from "@/public/down_arrow.svg";
import { ActionType } from "@/app/store/actionTypes";

interface Props {
  dispatch: React.Dispatch<any>;
}

function ContentFilter({ dispatch }: Props) {
  return (
    <>
      <span className={styles.filterTypeTitle}>Filter</span>

      <div className="flex-row justify-start">
        <span className={styles.filter}>Category</span>

        {/* SORT BY LIKES */}
        <div
          className={`${styles.filter} flex-row`}
          onClick={() => dispatch({ type: ActionType.SortByLikes })}
          style={{ cursor: "pointer" }}
        >
          Likes
          <Image src={downArrow} alt="arrow" className={styles.downArrow} />
        </div>

        {/* SORT BY RECENT */}
        <div
          className={`${styles.filter} flex-row`}
          onClick={() => dispatch({ type: ActionType.SortByRecent })}
          style={{ cursor: "pointer" }}
        >
          Most Recent
          <Image src={downArrow} alt="arrow" className={styles.downArrow} />
        </div>
      </div>
    </>
  );
}

export default ContentFilter;//