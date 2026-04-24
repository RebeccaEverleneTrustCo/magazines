import { ICollectionState, IAction } from "@/app/store/stateTypes";
import { ActionType } from "@/app/store/actionTypes";
import { IArticle } from "@/app/__mock__/articleDataFormat.ts";
import { getItems } from "@/app/store/localStorageHelper";

/* FILTER ARTICLES */

function filterArticles(state: ICollectionState): IArticle[] {
  const selectedSourceIds = Object.keys(state.selectedSourceIds);
  const selectedAgeRangeIds = Object.keys(state.selectedAgeRangeIds);
  const selectedStatusId = state.selectedStatus?.id;

  return state.articleList.filter((article: IArticle) => {

    const matchesSource =
      selectedSourceIds.length === 0 ||
      selectedSourceIds.includes(article.source.id);

    const matchesAgeRange =
      selectedAgeRangeIds.length === 0 ||
      (article.ageRangeId &&
        selectedAgeRangeIds.includes(article.ageRangeId));

    const matchesStatus =
      !selectedStatusId || article.statusId === selectedStatusId;

    return matchesSource && matchesAgeRange && matchesStatus;

  });
}

/* SEARCH */

function searchArticles(state: ICollectionState): IArticle[] {

  const searchText = state.searchText ? state.searchText : "";

  return state.articleList.filter((article: IArticle) =>
    searchText.length === 0 ||
    article.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

/* SORT / FILTER */

function applyContentFilter(
  articles: IArticle[],
  sortType: string
): IArticle[] {

  let result = [...articles];

  if (sortType === "all") {
    return result;
  }

  if (sortType === "likes") {

    const likedItems = getItems("likedItems") || [];

    result = result.filter((article) =>
      likedItems.includes(article.name)
    );
  }

  if (sortType === "recent") {
    result = [...result].reverse();
  }

  return result;
}

export function reducer(
  state: ICollectionState,
  action: IAction
): ICollectionState {

  switch (action.type) {

    case ActionType.AddAllData:
      return {
        ...state,
        statusList: [...action.payload.statusList],
        sourceList: [...action.payload.sourceList],
        ageRangeList: [...action.payload.ageRangeList],
        articleList: [...action.payload.articleList],
        filteredArticleList: [...action.payload.articleList],
        loadingFilters: false,
        loadingArticles: false,
      };

    case ActionType.SetFilteredArticles:

      return {
        ...state,
        filteredArticleList: filterArticles(state),
      };

    case ActionType.SetSearchText:

      return {
        ...state,
        searchText: action.payload.searchText,
        filteredArticleList: searchArticles(state),
      };

    case ActionType.SetSortType: {

      const result = applyContentFilter(
        state.articleList,
        action.payload.sortType
      );

      return {
        ...state,
        sortType: action.payload.sortType,
        filteredArticleList: result,
      };
    }

    case ActionType.ClearFilters:

      return {
        ...state,
        selectedSourceIds: {},
        selectedAgeRangeIds: {},
        filteredArticleList: [...state.articleList],
      };

    default:
      throw new Error("Action not recognized");
  }
}

export default reducer;