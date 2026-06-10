"use client";

import React, { useState, useEffect } from "react";
import backIcon from "@/public/back.svg";
import { useRouter } from "next/navigation";
import styles from "./articleDetailsCards.module.css";
import { IArticle } from "../../__mock__/articleDataFormat.ts";
import Image from "next/image";
import { youngKidsArticleData } from "../../young-kids/api/getArticleforYoungkids";
import { Heart, HeartOutlined } from "../heart";
import { middleSchoolArticleData } from "@/app/middle-school/api/getArticleforMiddleSchool";
import { parentsArticleData } from "@/app/parents/api/getArticleData";
import { Checkbox } from "@mui/material";
import {
  addItem,
  getItems,
  deleteItem,
} from "@/app/store/localStorageHelper";

function ArticleDetail({
  article,
  src,
  title,
  subtitle,
  isFavorite,
  category,
}: {
  article: IArticle;
  src: any;
  title: string;
  subtitle: string;
  isFavorite: boolean;
  category: string;
}) {
  const [checked, setChecked] = useState(false);
  const [isFavoriteState, setIsFavoriteState] =
    useState(isFavorite);

  const router = useRouter();

  // Define status IDs
  const finishedStatusId = "Karlh7QHaQrS7G3c";
  const unfinishedStatusId = "rNtJ7GnFBy4jgyUC";

  // Helper function to get category data
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

  // Update article status in dataset
  const updateArticleStatusInDataArray = (
    articleName: string,
    newStatusId: string
  ) => {
    const dataArray = getCategoryData(category);

    const articleInData = dataArray.find(
      (item) => item.name === articleName
    );

    if (articleInData) {
      articleInData.statusId = newStatusId;
    }
  };

  // Initialize state from localStorage
  useEffect(() => {
    const finishedItems =
      getItems("finishedReadingItems") || [];

    if (finishedItems.includes(article.name)) {
      setChecked(true);

      article.statusId = finishedStatusId;

      updateArticleStatusInDataArray(
        article.name,
        finishedStatusId
      );
    } else {
      article.statusId = unfinishedStatusId;

      updateArticleStatusInDataArray(
        article.name,
        unfinishedStatusId
      );
    }

    const likedItems = getItems("likedItems") || [];

    if (likedItems.includes(article.name)) {
      setIsFavoriteState(true);
      article.isFavorite = true;
    }
  }, [article.name, category]);

  // Handle checkbox toggle
  const handleChange = () => {
    const newCheckedState = !checked;

    setChecked(newCheckedState);

    if (newCheckedState) {
      addItem("finishedReadingItems", article.name);

      article.statusId = finishedStatusId;

      updateArticleStatusInDataArray(
        article.name,
        finishedStatusId
      );
    } else {
      deleteItem("finishedReadingItems", article.name);

      article.statusId = unfinishedStatusId;

      updateArticleStatusInDataArray(
        article.name,
        unfinishedStatusId
      );
    }
  };

  // Favorite toggle
  const toggleFavorite = () => {
    setIsFavoriteState(true);

    addItem("likedItems", article.name);

    article.isFavorite = true;

    const dataArray = getCategoryData(category);

    const articleInData = dataArray.find(
      (item) => item.name === article.name
    );

    if (articleInData) {
      articleInData.isFavorite = true;
    }
  };

  // Remove favorite
  const toggleNotFavorite = () => {
    setIsFavoriteState(false);

    deleteItem("likedItems", article.name);

    article.isFavorite = false;

    const dataArray = getCategoryData(category);

    const articleInData = dataArray.find(
      (item) => item.name === article.name
    );

    if (articleInData) {
      articleInData.isFavorite = false;
    }
  };

  const currentArticleDetail = getCategoryData(category).find(
    (a) => a.name === article.name
  );

  // Related articles
  const relatedArticles = getCategoryData(category).filter(
    (a) =>
      a.source.name === article.source.name &&
      a.name !== article.name
  );

  return (
    <div className="article-container">
      {/* HEADER */}
      <div className={styles.header}>
        <button
          className={styles.buttn}
          onClick={() => router.back()}
        >
          <Image
            className={styles.backButton}
            src={backIcon}
            alt="Back Icon"
          />
        </button>

        <span className={styles.headerTitle}>
          Articles
        </span>
      </div>

      {/* ARTICLE DETAILS */}
      <div className={`${styles.card} flex-row`}>
        <div className={`image ${styles.cardImg}`}>
          <Image
            src={src || currentArticleDetail?.img}
            fill={true}
            alt={title}
          />
        </div>

        <div className={`${styles.cardContent} flex-column`}>
          <div className={`${styles.carddetails} flex-column`}>
            <span className={styles.subtitle}>
              {subtitle}
            </span>

            <span className={styles.title}>
              {title}
            </span>

            <span className={styles.description}>
              {article.description}
            </span>
          </div>

          <button className={styles.exploreButton}>
            Explore More →
          </button>

          <div className={`${styles.cardtoggles} flex-row`}>
            {/* CHECKBOX */}
            <div className={`${styles.checkboxStyling} flex-row`}>
              <Checkbox
                checked={checked}
                onClick={handleChange}
              />

              <span className={styles.label}>
                Finished Reading
              </span>
            </div>

            {/* HEART */}
            <div className={`${styles.heartStyling} flex-row`}>
              {!isFavoriteState ? (
                <HeartOutlined
                  className={styles.heartButton}
                  onClick={toggleFavorite}
                />
              ) : (
                <Heart
                  className={styles.heartButton}
                  onClick={toggleNotFavorite}
                />
              )}

              <span className={styles.label}>
                Like
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FROM CREATOR */}
      <h1 className={styles.fromcreatortitle}>
        From Creator
      </h1>

      <div className={styles.fromCreatorsSection}>
        <div className={`${styles.relatedArticles} flex-row`}>
          {relatedArticles?.length > 0 ? (
            relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.name}
                className={styles.relatedArticleCard}
              >
                <div className={styles.relatedArticleImage}>
                  <Image
                    src={relatedArticle.img}
                    alt={relatedArticle.name}
                    width={260}
                    height={240}
                    className={styles.ArticleImage}
                  />
                </div>

                <span className={styles.relatedArticleTitle}>
                  {relatedArticle.name}
                </span>
              </div>
            ))
          ) : (
            <p>No related articles available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;