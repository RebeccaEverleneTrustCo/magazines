"use client";
import styles from "./page.module.css";
import AlphaOrderChip from "./components/alpha_order_chip/alpha_order_chip";
import React from "react";
import { AlphaOrderCard } from "./components/alpha_order_card/alpha_order_card";
import { magazineData, IMagazine } from "./__mock__/magazine_data";

function filterAndDisplayList(alphaIndex: number) {
  const filteredData = magazineData.filter((magazine: IMagazine) =>
    magazine.name.toUpperCase().startsWith(String.fromCharCode(65 + alphaIndex))
  );

  if (filteredData.length === 0) {
    return (
      <span className={styles.h2}>
        No Magazines found for {String.fromCharCode(65 + alphaIndex)}
      </span>
    );
  }

  return filteredData.map((magazine: IMagazine) => (
    <AlphaOrderCard
      src={magazine.src}
      title={magazine.title}
      body={magazine.body}
      ageRange={magazine.ageRange}
    />
  ));
}

function AlphaOrder() {
  const [alphaIndex, setAlphaIndex] = React.useState(2);
  return (
    <>
      <div className={`flex-row ${styles.alphaOrderRow}`}>
        {Array.from(Array(26).keys()).map((key) => (
          <AlphaOrderChip
            text={String.fromCharCode(65 + key)}
            selected={alphaIndex === key}
            onClick={() => {
              setAlphaIndex(key);
            }}
          />
        ))}
      </div>

      <div className={` flex-row ${styles.magazineRow}`}>
        {filterAndDisplayList(alphaIndex)}
      </div>
    </>
  );
}

export default AlphaOrder;
