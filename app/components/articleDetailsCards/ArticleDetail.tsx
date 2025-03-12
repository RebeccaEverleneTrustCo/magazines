// components/articleDetailsCards/ArticleDetail.tsx
"use client";

import React from 'react';
import styles from './articleDetailsCards.module.css'; // Adjust path if needed
import { IArticle } from '../../__mock__/articleDataFormat.ts'; // Import the interface if needed

interface ArticleDetailProps {
  article: IArticle;  // Define the props type
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {

  return (
    <div className={styles.articleDetailContainer}>  {/* Or your preferred styling */}
      <h1>{article.name}</h1>
      <img src={article.img} alt={article.name} />
      <p>Source: {article.source.name}</p>
      {/* Add more details here, using the article prop */}
      {/* For example: */}
      <p>Status ID: {article.statusId}</p>
    </div>
  );
};

export default ArticleDetail;

// import { useRouter } from "next/navigation";

// const ArticleDetailsCards:  React.FC = () => {
//   const router = useRouter();
//   return (
//     <div>
//       <h1>Article Details Page</h1>
//       <p>This is the article details page.</p>
//     </div>
//   );
// };

// export default ArticleDetailsCards;

