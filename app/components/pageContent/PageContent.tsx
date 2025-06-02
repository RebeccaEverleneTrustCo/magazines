import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import HeaderBar from "@/app/components/header_bar/header_bar";
import SideNav from "@/app/components/side_nav/side_nav";
import CollectionHeader from "@/app/components/collection_header/collection_header";
import ContentFilter from "@/app/components/content_filter/content_filter";
import ArticleCard from "@/app/components/article_card/article_card";
import { IArticle } from "@/app/__mock__/articleDataFormat.ts";
import { StaticImageData } from "next/image";
import { getItems } from "@/app/store/localStorageHelper";
import { article } from "framer-motion/client";

interface PageContentProps {
  state: any;
  dispatch: React.Dispatch<any>;
  filterFilteredArticleList: IArticle[];
  mascot: StaticImageData;
  headerTitle: string;
  category: string;
}

const PageContent: React.FC<PageContentProps> = ({
  state,
  dispatch,
  filterFilteredArticleList,
  mascot,
  headerTitle,
  category,
}) => {
  filterFilteredArticleList.map((article: IArticle) => {
    //console.log("Articles:", article); // Debug each article's image path
    const items = getItems("likedItems");
    items.forEach((item) => {
      if (item === article.name) {
        article.isFavorite = true;
      }
    });
  });


  return (
    <div className={`flex-column ${styles.main}`}>
      <CollectionHeader src={mascot} headerTitle={headerTitle} />
      <div className={`${styles.body}`}>
        <HeaderBar
          state={state}
          dispatch={dispatch}
          headerTitle={headerTitle}
        />

        {state.loadingFilters ? (
          <span className={`text-align-center ${styles.loaderText}`}>
            Loading
          </span>
        ) : (
          <div className={`flex-row align-start`}>
            <SideNav state={state} dispatch={dispatch} />
            <div className={`${styles.content} flex-column`}>
              <ContentFilter />
              <div className={`flex-row justify-start ${styles.magazineList}`}>
                {state.loadingArticles ? (
                  <span>Loading</span>
                ) : (
                  filterFilteredArticleList.map((article: IArticle) => (
                    <ArticleCard
                      key={`${article.name}-${article.source.id}`}
                      src={article.img}
                      title={article.name}
                      subtitle={article.source.name}
                      isFavorite={article.isFavorite ?? false}
                      category={category}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageContent;
