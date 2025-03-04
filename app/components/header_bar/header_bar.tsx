"use client";
import styles from "./header_bar.module.css";
import { useState } from "react";
import React from "react";
import Input from "../input/input";
import { ageRangeToRoute } from "../alpha_order_card/alpha_order_card"; // Import existing mapping

function HeaderBar({ ageRange }: { ageRange: number }) {
  return (
    <div className={`flex-row ${styles.wrapper}`}>
      <div className={`flex-column ${styles.breadcrumbWrapper}`}>
        <span className={`${styles.navText}`}>
          <span className={styles.tcGray}>{"Magazines >"}</span> {ageRangeToRoute[ageRange]}
        </span>

        <span className={styles.collectionText}>{ageRangeToRoute[ageRange]} Collections</span>
      </div>

      <Input placeholder="Enter your keywords ..." />
    </div>
  );
}

export default HeaderBar;
