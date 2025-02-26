import { IArticle } from "@/app/__mock__/article_data";
import { IFilter } from "../parents/api/filter_data_parents";
import { ActionType } from "./actionTypes";
import { IFilterHash } from "@/app/store/IFilterHash";


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
  selectedFavoriteIds: IFilterHash;
  searchText?: string;
}

export interface IAction {
  type: ActionType;
  payload: ICollectionState;
}