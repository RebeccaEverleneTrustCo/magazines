"use client";
import { StaticImageData } from "next/image";
import { useState } from "react";
import styles from "./collection_header.module.css";
import shapes from "@/public/Shapes.svg";
import Image from "next/image";
import {
  ageRangeToRoute,
  ageRangeToImage,
} from "../alpha_order_card/alpha_order_card";

function CollectionHeader({ ageRange }: { ageRange: number }) {

  return (
    <div className={`${styles.header} flex-column`}>
      <div className={`flex-row`}>
        <Image
          src={ageRangeToImage[ageRange]} 
          alt={ageRangeToRoute[ageRange]}
          className={styles.mascotImg}
        />
        <span>{ageRangeToRoute[ageRange].toUpperCase()}</span>

        <Image src={shapes} alt="Shape" className={styles.shapeImg} />
      </div>
    </div>
  );
}

export default CollectionHeader;
