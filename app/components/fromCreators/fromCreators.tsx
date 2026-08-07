"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./fromCreators.module.css";
import { IArticle } from "../../__mock__/articleDataFormat.ts";
import { API_URLS } from "@/app/appConstants/apiUrlContants";

function FromCreators({
  article,
  category,
}: {
  article: IArticle;
  category: string;
}) {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const dataUrl =
      API_URLS.GET_CATEGORY_API_URL(category);

    const sourceName = article.source.name;

    if (!dataUrl) return;

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        const filteredArticles = data.filter(
          (item: IArticle) =>
            item.source.name === sourceName &&
            item.name !== article.name
        );

        setArticles(filteredArticles);
      })
      .catch((error) =>
        console.error("Error fetching articles:", error)
      );
  }, [article, category]);

  return (
    <div className={styles.container}>
      <h2>From Creators</h2>

      <div className={styles.articleList}>
        {articles.map((item) => (
          <div
            key={item.name}
            className={styles.articleCard}
          >
            <Image
              src={item.img}
              width={150}
              height={100}
              alt={item.name}
            />

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FromCreators;