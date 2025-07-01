<<<<<<< HEAD
// "use client";

// import React, { useState } from "react";
// import backIcon from "@/public/back.svg";
// import { useRouter } from "next/navigation";
// import styles from "./articleDetailsCards.module.css"; // Adjust path if needed
// import { IArticle } from "../../__mock__/articleDataFormat.ts";
// import Image from "next/image";
// import { youngKidsArticleData } from "../../young-kids/api/getArticleforYoungkids";
// import { Heart, HeartOutlined } from "../heart";
// import { middleSchoolArticleData } from "@/app/middle-school/api/getArticleforMiddleSchool";
// import { parentsArticleData } from "@/app/parents/api/getArticleData";
// import { Checkbox } from "@mui/material";
// import { addItem, getItems, deleteItem } from "@/app/store/localStorageHelper";

// function ArticleDetail({
//   article,
//   category,
// }: {
//   article: IArticle;
//   category: string;
// }) {
//   const [checked, setChecked] = useState(false);

//   React.useEffect(() => {
//     const finishedItems = getItems("finishedReadingItems") || [];

//     if (finishedItems.includes(article.name)) {
//       setChecked(true);
//     }
//   }, [article.name]);

//   const handleChange = () => {
//     const newCheckedState = !checked;
//     setChecked(newCheckedState);
//     if (newCheckedState) {
//       const newItem = article.name;
//       addItem("finishedReadingItems", newItem);
//       article.statusId = "Karlh7QHaQrS7G3c";
//     } else {
//       deleteItem("finishedReadingItems", article.name);
//       article.statusId = "rNtJ7GnFBy4jgyUC";
//     }
//   };
//   const [isFavoriteState, setIsFavoriteState] = useState(article.isFavorite);
//   const router = useRouter();
//   const toggleFavorite = () => {
//     setIsFavoriteState(!isFavoriteState);
//     const newItem = article.name;
//     addItem("likedItems", newItem);
//   };
//   const toggleNotFavorite = () => {
//     setIsFavoriteState(!isFavoriteState);
//     deleteItem("likedItems", article.name);
//   };

//   // Function to get the article data based on category
//   const getCategoryData = (category: string) => {
//     switch (category) {
//       case "youngkids":
//         return youngKidsArticleData;
//       case "middleschool":
//         return middleSchoolArticleData;
//       case "parents":
//         return parentsArticleData;
//       default:
//         return [];
//     }
//   };

//   const currentArticleDetail = getCategoryData(category).find(
//     (a) => a.name === article.name
//   );

//   // Fetch all articles from the same source (excluding the current one)
//   const relatedArticles = getCategoryData(category).filter(
//     (a) => a.source.name === article.source.name && a.name !== article.name
//   );

//   return (
//     <div className="article-container">
//       {/* Header */}
//       <div className={styles.header}>
//         <button className={styles.buttn} onClick={() => router.back()}>
//           <Image className={styles.backButton} src={backIcon} alt="Back Icon" />
//         </button>
//         <span className={styles.headerTitle}>Articles</span>
//       </div>

//       {/* Article Details */}
//       <div className={`${styles.card} flex-row`}>
//         <div className={`image ${styles.cardImg}`}>
//           <Image
//             src={currentArticleDetail?.img}
//             fill={true}
//             alt={article.name}
//           />
//         </div>
//         <div className={`${styles.cardContent} flex-column`}>
//           <div className={`${styles.carddetails} flex-column`}>
//             <span className={styles.subtitle}>{article.source.name}</span>
//             <span className={styles.title}>{article.name}</span>
//             <span className={styles.description}>{article.description}</span>
//           </div>
//           <button className={styles.exploreButton}>Explore More →</button>
//           <div className={`${styles.cardtoggles} flex-row`}>
//             <div className={`${styles.checkboxStyling} flex-row`}>
//               <Checkbox checked={checked} onClick={handleChange} />
//               <span className={styles.label}>Finished Reading</span>{" "}
//             </div>
//             <div className={`${styles.heartStyling} flex-row`}>
//               {!isFavoriteState ? (
//                 <HeartOutlined
//                   className={styles.heartButton}
//                   onClick={toggleFavorite}
//                 />
//               ) : (
//                 <Heart
//                   className={styles.heartButton}
//                   onClick={toggleNotFavorite}
//                 />
//               )}
//               <span className={styles.label}>Like</span>{" "}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* From Creators Section */}

//       <h1 className={`${styles.fromcreatortitle}`}>From Creator</h1>
//       <div className={`${styles.fromCreatorsSection} `}>
//         <div className={`${styles.relatedArticles} flex-row`}>
//           {relatedArticles?.length > 0 ? (
//             relatedArticles.map((relatedArticle) => (
//               <div
//                 key={relatedArticle.name}
//                 className={styles.relatedArticleCard}
//               >
//                 <div className={`${styles.relatedArticleImage}`}>
//                   <Image
//                     src={relatedArticle.img}
//                     alt={relatedArticle.name}
//                     width={260}
//                     height={240}
//                     className={styles.ArticleImage}
//                   />
//                 </div>
//                 <span className={styles.relatedArticleTitle}>
//                   {relatedArticle.name}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <p>No related articles available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ArticleDetail;
"use client";

import React, { useState, useEffect } from "react";
import backIcon from "@/public/back.svg";
import { useRouter } from "next/navigation";
import styles from "./articleDetailsCards.module.css"; // Adjust path if needed
import { IArticle } from "../../__mock__/articleDataFormat.ts";
import Image from "next/image";
import { youngKidsArticleData } from "../../young-kids/api/getArticleforYoungkids";
import { Heart, HeartOutlined } from "../heart";
import { middleSchoolArticleData } from "@/app/middle-school/api/getArticleforMiddleSchool";
import { parentsArticleData } from "@/app/parents/api/getArticleData";
import { Checkbox } from "@mui/material";
import { addItem, getItems, deleteItem } from "@/app/store/localStorageHelper";

function ArticleDetail({
  article,
  category,
}: {
  article: IArticle;
  category: string;
}) {
  const [checked, setChecked] = useState(false);
  const [isFavoriteState, setIsFavoriteState] = useState(article.isFavorite);
  const router = useRouter();

  // Define status IDs as constants
  const finishedStatusId = "Karlh7QHaQrS7G3c";
  const unfinishedStatusId = "rNtJ7GnFBy4jgyUC";

  // Helper function to get the correct data array based on category
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

  // Helper function to update article status in data array
  const updateArticleStatusInDataArray = (
    articleName: string,
    newStatusId: string
  ) => {
    const dataArray = getCategoryData(category);
    const articleInData = dataArray.find((item) => item.name === articleName);
    if (articleInData) {
      articleInData.statusId = newStatusId;
    }
  };

  // Check if article is in finishedReadingItems in localStorage
  useEffect(() => {
    const finishedItems = getItems("finishedReadingItems") || [];

    if (finishedItems.includes(article.name)) {
      setChecked(true);
      article.statusId = finishedStatusId;
      updateArticleStatusInDataArray(article.name, finishedStatusId);
    } else {
      article.statusId = unfinishedStatusId;
      updateArticleStatusInDataArray(article.name, unfinishedStatusId);
    }

    // Initialize favorite state from localStorage
    const likedItems = getItems("likedItems") || [];
    if (likedItems.includes(article.name)) {
      setIsFavoriteState(true);
      article.isFavorite = true;
    }
  }, [article.name, category]);

  // Handle checkbox change
  const handleChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    if (newCheckedState) {
      // Add to finished items in localStorage
      addItem("finishedReadingItems", article.name);

      // Update statusId in current article and data array
      article.statusId = finishedStatusId;
      updateArticleStatusInDataArray(article.name, finishedStatusId);
    } else {
      // Remove from finished items in localStorage
      deleteItem("finishedReadingItems", article.name);

      // Update statusId in current article and data array
      article.statusId = unfinishedStatusId;
      updateArticleStatusInDataArray(article.name, unfinishedStatusId);
    }
  };

  // Handle favorite toggling
  const toggleFavorite = () => {
    setIsFavoriteState(true);
    addItem("likedItems", article.name);
    article.isFavorite = true;

    // Update isFavorite in data array
    const dataArray = getCategoryData(category);
    const articleInData = dataArray.find((item) => item.name === article.name);
    if (articleInData) {
      articleInData.isFavorite = true;
    }
  };

  const toggleNotFavorite = () => {
    setIsFavoriteState(false);
    deleteItem("likedItems", article.name);
    article.isFavorite = false;

    // Update isFavorite in data array
    const dataArray = getCategoryData(category);
    const articleInData = dataArray.find((item) => item.name === article.name);
    if (articleInData) {
      articleInData.isFavorite = false;
    }
  };

  const currentArticleDetail = getCategoryData(category).find(
    (a) => a.name === article.name
  );

  // Fetch all articles from the same source (excluding the current one)
  const relatedArticles = getCategoryData(category).filter(
    (a) => a.source.name === article.source.name && a.name !== article.name
  );

  return (
    <div className="article-container">
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.buttn} onClick={() => router.back()}>
          <Image className={styles.backButton} src={backIcon} alt="Back Icon" />
        </button>
        <span className={styles.headerTitle}>Articles</span>
      </div>

      {/* Article Details */}
      <div className={`${styles.card} flex-row`}>
        <div className={`image ${styles.cardImg}`}>
          <Image
            src={currentArticleDetail?.img}
            fill={true}
            alt={article.name}
          />
        </div>
        <div className={`${styles.cardContent} flex-column`}>
          <div className={`${styles.carddetails} flex-column`}>
            <span className={styles.subtitle}>{article.source.name}</span>
            <span className={styles.title}>{article.name}</span>
            <span className={styles.description}>{article.description}</span>
          </div>
          <button className={styles.exploreButton}>Explore More →</button>
          <div className={`${styles.cardtoggles} flex-row`}>
            <div className={`${styles.checkboxStyling} flex-row`}>
              <Checkbox checked={checked} onClick={handleChange} />
              <span className={styles.label}>Finished Reading</span>{" "}
            </div>
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
              <span className={styles.label}>Like</span>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* From Creators Section */}
      <h1 className={`${styles.fromcreatortitle}`}>From Creator</h1>
      <div className={`${styles.fromCreatorsSection} `}>
        <div className={`${styles.relatedArticles} flex-row`}>
          {relatedArticles?.length > 0 ? (
            relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.name}
                className={styles.relatedArticleCard}
              >
                <div className={`${styles.relatedArticleImage}`}>
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
=======
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
import { Checkbox } from "@mui/material";

function ArticleDetail({
  article,
  category,
}: {
  article: IArticle;
  category: string;
}) {
  const [isFavoriteState, setIsFavoriteState] = useState(article.isFavorite);
  const router = useRouter();
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

  const currentArticleDetail = getCategoryData(category).find(
    (a) => a.name === article.name
  );

  // Fetch all articles from the same source (excluding the current one)
  const relatedArticles = getCategoryData(category).filter(
    (a) => a.source.name === article.source.name && a.name !== article.name
  );

  return (
    <div className="article-container">
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.buttn} onClick={() => router.back()}>
          <Image className={styles.backButton} src={backIcon} alt="Back Icon" />
        </button>
        <span className={styles.headerTitle}>Articles</span>
      </div>

      {/* Article Details */}
      <div className={`${styles.card} flex-row`}>
        <div className={`image ${styles.cardImg}`}>
          <Image
            src={currentArticleDetail?.img}
            fill={true}
            alt={article.name}
          />
        </div>
        <div className={`${styles.cardContent} flex-column`}>
          <div className={`${styles.carddetails} flex-column`}>
            <span className={styles.subtitle}>{article.source.name}</span>
            <span className={styles.title}>{article.name}</span>
            <span className={styles.description}>{article.description}</span>
            
          </div>
          <button className={styles.exploreButton}>Explore More →</button>
          <div className={`${styles.cardtoggles} flex-row`}>
            <div className={`${styles.checkboxStyling} flex-row`}>
              <Checkbox />
              <span className={styles.label}>Finished Reading</span>{" "}
            </div>
            <div className={`${styles.heartStyling} flex-row`}>
              {!isFavoriteState ? (
                <HeartOutlined
                  className={styles.heartButton}
                  onClick={toggleFavorite}
                />
              ) : (
                <Heart
                  className={styles.heartButton}
                  onClick={toggleFavorite}
                />
              )}
              <span className={styles.label}>Like</span>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* From Creators Section */}

      <h1 className={`${styles.fromcreatortitle}`}>From Creator</h1>
      <div className={`${styles.fromCreatorsSection} `}>
        <div className={`${styles.relatedArticles} flex-row`}>
          {relatedArticles?.length > 0 ? (
            relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.name}
                className={styles.relatedArticleCard}
              >
                <div className={`${styles.relatedArticleImage}`}>
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
>>>>>>> origin/main
