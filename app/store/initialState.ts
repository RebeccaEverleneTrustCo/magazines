import { IFilter } from "../parents/api/filter_data_parents";

export const initialState = {
  selectedStatus: null as IFilter | null,
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
  sortType: "all",
};