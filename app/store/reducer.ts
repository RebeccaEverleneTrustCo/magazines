import { ICollectionState, IAction } from "@/app/store/stateTypes";
import { ActionType } from "@/app/store/actionTypes";
import { IArticle } from "@/app/__mock__/articleDataFormat.ts";

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
      (article.ageRangeId != null &&
        selectedAgeRangeIds.includes(article.ageRangeId));

    const matchesStatus =
      !selectedStatusId || article.statusId === selectedStatusId;

    return matchesSource && matchesAgeRange && matchesStatus;
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
        selectedAgeRangeIds: {},
        selectedStatus: null,
        filteredArticleList: [...state.articleList],
      };

    case ActionType.SetSearchText: {
      if (!action.payload.searchText) {
        return {
          ...state,
          filteredArticleList: fetchArticles(state),
        };
      }

      return {
        ...state,
        searchText: action.payload.searchText,
        filteredArticleList: searchArticles({
          ...state,
          articleList: state.articleList,
        }),
      };
    }

    // ⭐ SORT BY LIKES
    case ActionType.SortByLikes:
      return {
        ...state,
        filteredArticleList: [...state.filteredArticleList].sort(
          (a: IArticle, b: IArticle) => (b.likes ?? 0) - (a.likes ?? 0)
        ),
      };

    // ⭐ SORT BY MOST RECENT
    case ActionType.SortByRecent:
      return {
        ...state,
        filteredArticleList: [...state.filteredArticleList].sort(
          (a: IArticle, b: IArticle) =>
            new Date(b.publishDate ?? "").getTime() -
            new Date(a.publishDate ?? "").getTime()
        ),
      };

    default:
      throw new Error("Action not recognized");
  }
}

export default reducer;