"use client"; // Ensure this is a client-side component
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use "next/navigation" for client components
import styles from "./article_card.module.css";
import Image, { StaticImageData } from "next/image";
import { HeartOutlined } from "../heart";


function ArticleCard({
  src,
  title,
  subtitle,
  isFavorite,
  statusId,
  onViewMore,
}: {
  src: StaticImageData;
  title: string;
  subtitle: string;
  isFavorite: boolean;
  statusId: string;
  onViewMore: () => void;
}) {
  // const router = useRouter();

  // const handleViewMore = () => {
  //   router.push(`/article/${statusId}`); // Navigate dynamically
  // };

  return (
    <div className={`${styles.card} flex-column`}>
      <div className={`image ${styles.cardImg}`}>
        <Image src={src} fill={true} alt={title} />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>

      <div className={`flex-row ${styles.buttonWrapper}`}>
        <button
          className={`button ${styles.viewMoreButton}`}
          onClick={onViewMore} // Trigger onViewMore handler
        >
          View More
        </button>
        <HeartOutlined className={styles.heartButton} />
      </div>
    </div>
  );
}

export default ArticleCard;