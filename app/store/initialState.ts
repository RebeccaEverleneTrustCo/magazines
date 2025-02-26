import { IFilter } from "../parents/api/filter_data_parents";

export const initialState = {
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
  selectedFavoriteIds: {},
  searchText: "",
};
