import styles from "../components/header_bar/header_bar.module.css";
import React from "react";
import Input from "../components/input/input";

function HeaderBar() {
  return (
    <div className={`flex-row ${styles.wrapper}`}>
      <div className={`flex-column ${styles.breadcrumbWrapper}`}>
        <span className={`${styles.navText}`}>
          <span className={styles.tcGray}>{"Magazines >"}</span> High School
        </span>

        <span className={styles.collectionText}>High School Collections</span>
      </div>

      <Input placeholder="Enter your keywords ..." />
    </div>
  );
}

export default HeaderBar;
