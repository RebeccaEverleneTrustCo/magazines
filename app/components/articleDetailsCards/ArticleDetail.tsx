"use client";

import React, { useState } from "react";
import backIcon from "@/public/back.svg";
import { useRouter } from "next/navigation";
import styles from "./articleDetailsCards.module.css"; // Adjust path if needed
import { IArticle } from "../../__mock__/articleDataFormat.ts";
import Image from "next/image";
import { youngKidsArticleData } from "../../young-kids/api/getArticleforYoungkids";
import { Heart, HeartOutlined } from "../heart";
import { middleSchoolArticleData } from "@/app/middle-school/api/getArticleforMiddleSchool";
import { parentsArticleData } from "@/app/parents/api/getArticleData";

function ArticleDetail({ article, category }: { article: IArticle; category: string }) {
  const [isFavoriteState, setIsFavoriteState] = useState(article.isFavorite);

  const toggleFavorite = () => {
    setIsFavoriteState(!isFavoriteState);
  };

  // Function to get the article data based on category
  const getCategoryData = (category: string) => {
    switch (category) {
      case "youngkids":
        return youngKidsArticleData;
      case "middleschool":
        return middleSchoolArticleData;
      case "parents":
        return parentsArticleData;
      default:
        return [];
    }
  };

  const currentArticleDetail = getCategoryData(category).find((a) => a.name === article.name);

  // Fetch all articles from the same source (excluding the current one)
  const relatedArticles = getCategoryData(category).filter(
    (a) => a.source.name === article.source.name && a.name !== article.name
  );

  return (
    <div className="article-container">
      {/* Header */}
      <div className={styles.header}>
        <Image className={styles.backButton} src={backIcon} alt="Back Icon" />
        <span className={styles.headerTitle}>Articles</span>
      </div>

      {/* Article Details */}
      <div className={`${styles.card} flex-row`}>
        <div className={`image ${styles.cardImg}`}>
          <Image src={currentArticleDetail?.img} fill={true} alt={article.name} />
        </div>
        <div className={`${styles.cardContent} flex-column`}>
          <div className={`${styles.carddetails} flex-column`}>
            <span className={styles.subtitle}>{article.source.name}</span>
            <span className={styles.title}>{article.name}</span>
            <span className={styles.description}>{article.description}</span>
            <button className={styles.exploreButton}>Explore More →</button>
          </div>
          <div className={`${styles.cardtoggles} flex-column`}>
            {!isFavoriteState ? (
              <HeartOutlined className={styles.heartButton} onClick={toggleFavorite} />
            ) : (
              <Heart className={styles.heartButton} onClick={toggleFavorite} />
            )}
          </div>
        </div>
      </div>

      {/* From Creators Section */}
      <div className={styles.fromCreatorsSection}>
        <h1>From Creators</h1>
        <div className={styles.relatedArticles}>
          {relatedArticles.map((relatedArticle) => (
            <div key={relatedArticle.name} className={styles.relatedArticleCard}>
              <Image
                src={relatedArticle.img}
                alt={relatedArticle.name}
                width={100}
                height={100}
                className={styles.relatedArticleImage}
              />
              <span className={styles.relatedArticleTitle}>{relatedArticle.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
