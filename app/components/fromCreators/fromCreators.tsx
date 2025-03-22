import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./fromCreators.module.css";
import { IArticle } from "../../__mock__/articleDataFormat.ts";

function FromCreators({
  article,
  category,
}: {
  article: IArticle;
  category: string;
}) {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        const filteredArticles = data.filter(
          (article: IArticle) => article.source.name === sourceName
        );
        setArticles(filteredArticles);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, [dataUrl, sourceName]);

  return (
    <div className={styles.container}>
      <h2>From Creators</h2>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <div key={article.name} className={styles.articleCard}>
            <Image
              src={article.img}
              width={150}
              height={100}
              alt={article.name}
            />
            <p>{article.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FromCreators;
