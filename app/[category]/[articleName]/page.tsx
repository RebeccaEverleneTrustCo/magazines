"use client";

import React, { useEffect, useState } from "react";
import { API_URLS } from "../../appConstants/apiUrlContants";
import { IArticle } from "@/app/__mock__/articleDataFormat.ts";
import ArticleDetail from "../../components/articleDetailsCards/ArticleDetail";
import { getItems } from "@/app/store/localStorageHelper";

interface ArticleDetailsProps {
  params: { articleName: string; category: string };
}

const normalizeString = (str: string) =>
  str.trim().replace(/\s+/g, " ").toLowerCase();

const ArticleDetailsCards: React.FC<ArticleDetailsProps> = ({ params }) => {
  const { articleName, category } = params;
  const [article, setArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        // 🔹 Step 1: Fetch API Data
        const apiUrl = API_URLS.GET_CATEGORY_API_URL(category);
        if (!apiUrl) throw new Error("Invalid category");

        const response = await fetch(apiUrl);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: IArticle[] = await response.json();
        console.log("Fetched articles:", data);

        // 🔹 Step 2: Decode & Normalize Article Name
        const decodedArticleName = decodeURIComponent(articleName);
        console.log("Original articleName:", articleName);
        console.log("Decoded articleName:", decodedArticleName);

        // 🔹 Step 3: Find Article with Normalized Comparison
        const foundArticle = data.find((item) => {
          const normalizedItemName = normalizeString(item.name);
          const normalizedDecodedName = normalizeString(decodedArticleName);

          console.log(
            `Checking "${normalizedItemName}" against "${normalizedDecodedName}"`
          );
          return normalizedItemName === normalizedDecodedName;
        });

        console.log("Found article:", foundArticle);

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError("Article not found");
        }
      } catch (e: any) {
        setError(e.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [articleName, category]);

  if (loading) return <p>Loading article details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Article not found.</p>;
  const items = getItems("likedItems");
  items.forEach((item) => {
    if (item === article.name) {
      article.isFavorite = true;
    }
  });

  return (
    <ArticleDetail
      article={article}
      src={article.img}
      title={article.name}
      subtitle={article.source.name}
      isFavorite={article.isFavorite ?? false}
      category={category}
    />
  );
};

export default ArticleDetailsCards;
