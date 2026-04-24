"use client";

import styles from "./content_filter.module.css";
import Image from "next/image";
import downArrow from "@/public/down_arrow.svg";
import { ActionType } from "@/app/store/actionTypes";
import { ICollectionState, IAction } from "@/app/store/stateTypes";
import React from "react";

function ContentFilter({
  state,
  dispatch,
}: {
  state: ICollectionState;
  dispatch: React.Dispatch<IAction>;
}) {

  const setFilter = (type: string) => {
    dispatch({
      type: ActionType.SetSortType,
      payload: {
        ...state,
        sortType: type,
      },
    });
  };

  return (
    <>
      <span className={styles.filterTypeTitle}>Filter</span>

      <div className={`flex-row justify-start`}>

        <span className={`${styles.filter}`}>Category</span>

        {/* ALL */}
        <div
          className={`${styles.filter} flex-row`}
          style={{ cursor: "pointer" }}
          onClick={() => setFilter("all")}
        >
          All
        </div>

        {/* LIKES */}
        <div
          className={`${styles.filter} flex-row`}
          style={{ cursor: "pointer" }}
          onClick={() => setFilter("likes")}
        >
          Likes
          <Image alt="Down Arrow" src={downArrow} className={styles.downArrow}/>
        </div>

        {/* MOST RECENT */}
        <div
          className={`${styles.filter} flex-row`}
          style={{ cursor: "pointer" }}
          onClick={() => setFilter("recent")}
        >
          Most Recent
          <Image alt="Down Arrow" src={downArrow} className={styles.downArrow}/>
        </div>

      </div>
    </>
  );
}

export default ContentFilter;