import { ICollectionState, IAction } from "@/app/store/stateTypes"; 
import { ActionType } from "@/app/store/actionTypes";
import { IArticle } from "@/app/__mock__/articleDataFormat.ts";

function filterArticles(state: ICollectionState): IArticle[] {
  const sourceIds = Object.keys(state.selectedSourceIds);

  return state.articleList.filter((article: IArticle) => {
    return sourceIds.length === 0 || sourceIds.includes(article.source.id);
  });
}

function searchArticles(state: ICollectionState): IArticle[] {
  const searchText = state.searchText ? state.searchText : "";

  return state.articleList.filter((article: IArticle) => {
    return (
      searchText.length === 0 ||
      article.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });
}

function fetchArticles(state: ICollectionState): IArticle[] {
  return state.articleList;
}

export function reducer(
  state: ICollectionState,
  action: IAction
): ICollectionState {
  switch (action.type) {
    case ActionType.AddFilterData:
      return {
        ...state,
        statusList: [...action.payload.statusList],
        sourceList: [...action.payload.sourceList],
        loadingFilters: false,
      };
    case ActionType.SetSelectedStatus:
      return {
        ...state,
        selectedStatus: action.payload.selectedStatus,
      };
    case ActionType.SetSelectedSources:
      return {
        ...state,
        selectedSourceIds: { ...action.payload.selectedSourceIds },
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
        filteredArticleList: filterArticles({
          ...state,
          articleList: action.payload.articleList,
        }),
        loadingArticles: false,
      };
    case ActionType.AddAllData:
      return {
        ...state,
        statusList: [...action.payload.statusList],
        sourceList: [...action.payload.sourceList],
        loadingFilters: false,
        articleList: [...action.payload.articleList],
        filteredArticleList: [...action.payload.articleList],
        ageRangeList: [...action.payload.ageRangeList],
        loadingArticles: false,
      };
    case ActionType.ClearFilters:
      return {
        ...state,
        selectedSourceIds: {},
        statusList: [...action.payload.statusList],
        sourceList: [...action.payload.sourceList],
        loadingFilters: false,
        articleList: [...action.payload.articleList],
        filteredArticleList: [...action.payload.articleList],
        loadingArticles: false,
      };
    case ActionType.SetSearchText: {
      if (action.payload.searchText?.length === 0) {
        return {
          ...state,
          filteredArticleList: fetchArticles({
            ...state,
            articleList: action.payload.articleList,
          }),
          loadingArticles: false,
        };
      } else {
        return {
          ...state,
          searchText: action.payload.searchText,
          filteredArticleList: searchArticles({
            ...state,
            articleList: action.payload.articleList,
          }),
          loadingArticles: false,
        };
      }
    }
    default: {
      throw new Error("Action not recognized");
    }
  }
}
export default reducer;
