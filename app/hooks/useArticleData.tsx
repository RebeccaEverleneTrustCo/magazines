import { useReducer, useEffect, useState } from "react";
import { ActionType } from "../store/actionTypes";
import { initialState } from "../store/initialState";
import reducer from "../store/reducer";
import { IArticle } from "../__mock__/article_data";
import { IResult } from "../__mock__/filter_data";


const useArticleData = (initialArticleData: IArticle[], filterData : IResult) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionType.AddAllData,
      payload: {
        ...initialState,
        statusList: filterData.statusList,
        sourceList: filterData.sourcesList,
        articleList: initialArticleData,
      },
    });
  }, [initialArticleData]);

  return { state, dispatch };
};

export default useArticleData;