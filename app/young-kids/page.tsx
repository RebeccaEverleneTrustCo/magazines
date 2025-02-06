"use client";
import styles from "./page.module.css";
import youngKidsMascot from "@/public/young_kids_mascot.svg";
import HeaderBar from "../components/header_bar/header_bar";
import SideNav from "../components/side_nav/side_nav";
import CollectionHeader from "../components/collection_header/collection_header";

import { filterData, IFilter } from "../data/filter_data";
import ArticleCard from "../components/article_card/article_card";
import ContentFilter from "./content_filter/content_filter";

import { IArticle, youngKidsArticleData } from "../data/article_data";
import React, { useEffect } from "react";

export enum ActionType {
  SetSelectedStatus = "SET_SELECTED_STATUS",
  AddFilterData = "ADD_FILTER_DATA",
  SetSelectedSources = "SET_SELECTED_SOURCES",
  SetSelectedAgeRange = "SET_SELECTED_AGE_RANGE",
  SetAgeRanges = "SET_AGE_RANGES",
  AddArticleList = "ADD_ARTICLE_LIST",
  SetFilteredArticles = "SET_FILTERED_ARTICLES",
  ClearFilters = "CLEAR_FILTERS",
}

export interface IFilterHash {
  [key: string]: string;
}

export interface ICollectionState {
  selectedStatus: IFilter;
  statusList: IFilter[];
  selectedSourceIds: IFilterHash;
  sourceList: IFilter[];
  selectedAgeRangeIds: IFilterHash;
  ageRangeList: IFilter[];
  articleList: IArticle[];
  filteredArticleList: IArticle[];
  loadingFilters: boolean;
  loadingArticles: boolean;
}

export interface IAction {
  type: ActionType;
  payload: ICollectionState;
}

function filterArticles(state: ICollectionState): IArticle[] {
  return state.articleList.filter((article: IArticle) => {
    if (state.selectedStatus.id && article.statusId !== state.selectedStatus.id)
      return false;
    if (
      Object.keys(state.selectedSourceIds).length > 0 &&
      !(article.source.id in state.selectedSourceIds)
    )
      return false;
    if (
      Object.keys(state.selectedAgeRangeIds).length > 0 &&
      !(article.ageRangeId in state.selectedAgeRangeIds)
    )
      return false;

    return true;
  });
}

function reducer(state: ICollectionState, action: IAction): ICollectionState {
  switch (action.type) {
    case ActionType.AddFilterData:
      return {
        ...state,
        statusList: [...action.payload.statusList],
        sourceList: [...action.payload.sourceList],
        ageRangeList: [...action.payload.ageRangeList],
        loadingFilters: false,
      };

    case ActionType.SetSelectedStatus:
      return {
        ...state,
        selectedStatus:
          state.selectedStatus.id === action.payload.selectedStatus.id
            ? ({} as IFilter)
            : action.payload.selectedStatus,
      };

    case ActionType.SetSelectedSources:
      return {
        ...state,
        selectedSourceIds: { ...action.payload.selectedSourceIds },
      };

    case ActionType.SetSelectedAgeRange:
      return {
        ...state,
        selectedAgeRangeIds: { ...action.payload.selectedAgeRangeIds },
      };
    case ActionType.AddArticleList:
      return {
        ...state,
        articleList: [...action.payload.articleList],
        filteredArticleList: [...action.payload.articleList],
        loadingArticles: false,
      };

    case ActionType.SetFilteredArticles:
      return {
        ...state,
        filteredArticleList: [...filterArticles(state)],
      };
    case ActionType.ClearFilters:
      return {
        ...state,
        selectedStatus: {} as IFilter,
        selectedSourceIds: {},
        selectedAgeRangeIds: {},
        filteredArticleList: [...state.articleList],
      };

    default: {
      throw new Error("Action not recognized");
    }
  }
}

const initialState: ICollectionState = {
  selectedStatus: {} as IFilter,
  statusList: [],
  selectedSourceIds: {},
  sourceList: [],
  selectedAgeRangeIds: {},
  ageRangeList: [],
  articleList: [],
  filteredArticleList: [],
  loadingFilters: true,
  loadingArticles: true,
};

function YoungKids() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionType.AddFilterData,
      payload: {
        ...initialState,
        statusList: filterData.statusList,
        sourceList: filterData.sourcesList,
        ageRangeList: filterData.ageRangeList,
      },
    });

    dispatch({
      type: ActionType.AddArticleList,
      payload: {
        ...state,
        articleList: youngKidsArticleData,
      },
    });
  }, []);

  return (
    <div className={`flex-column ${styles.main}`}>
      <CollectionHeader src={youngKidsMascot} headerTitle="Young Kids" />

      <div className={`${styles.body}`}>
        <HeaderBar />

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
                  state.filteredArticleList.map((article: IArticle) => (
                    <ArticleCard
                      src={article.img}
                      title={article.name}
                      subtitle={article.source.name}
                      isFavorite={false}
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
}

export default YoungKids;
