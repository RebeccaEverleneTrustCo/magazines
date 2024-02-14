import styles from "./header_bar.module.css";
import React from "react";
import Input from "../input/input";

function HeaderBar() {
  return (
    <div className={`flex-row ${styles.wrapper}`}>
      <div className={`flex-column ${styles.breadcrumbWrapper}`}>
        <span className={`${styles.navText}`}>
          <span className={styles.tcGray}>{"Magazines >"}</span> Young Kids
        </span>

        <span className={styles.collectionText}>Young Kids Collection</span>
      </div>

      <Input placeholder="Enter your keywords ..." />
    </div>
  );
}

export default HeaderBar;
