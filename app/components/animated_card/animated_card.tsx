"use client";
import styles from "./animated_card.module.css";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";

function AnimatedCard({ src, text }: { src: StaticImageData[]; text: string }) {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // const newIndex = index +
      setIndex((index) => {
        console.log("useEffect: ", index);
        return (index + 1) % src.length;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.card}>
      <motion.div
        className={`image ${styles.cardImg}`}
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Image src={src[index]} alt={text} fill={true} sizes="100%" />
      </motion.div>
      <span className={styles.cardTitle}>{text}</span>
    </div>
  );
}

export default AnimatedCard;
