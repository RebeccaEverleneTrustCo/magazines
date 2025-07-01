<<<<<<< HEAD
import { useReducer, useEffect, useState } from "react";
import { ActionType } from "../store/actionTypes";
import { initialState } from "../store/initialState";
import reducer from "../store/reducer";
import { IArticle } from "../__mock__/articleDataFormat.ts";
import { IResult } from "../__mock__/articleDataFormat.ts";


const useArticleData = (initialArticleData: IArticle[], filterData : IResult) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionType.AddAllData,
      payload: {
        ...initialState,
        statusList: filterData.statusList,
        sourceList: filterData.sourcesList,
        ageRangeList: filterData.ageRangeList || [],
        articleList: initialArticleData,
      },
    });
  }, [initialArticleData]);

  return { state, dispatch };
};

=======

import { useReducer, useEffect, useState } from "react";
import { ActionType } from "../store/actionTypes";
import { initialState } from "../store/initialState";
import reducer from "../store/reducer";
import { IArticle } from "../__mock__/articleDataFormat.ts";
import { IResult } from "../__mock__/articleDataFormat.ts";


const useArticleData = (initialArticleData: IArticle[], filterData : IResult) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionType.AddAllData,
      payload: {
        ...initialState,
        statusList: filterData.statusList,
        sourceList: filterData.sourcesList,
        ageRangeList: filterData.ageRangeList || [],
        articleList: initialArticleData,
      },
    });
  }, [initialArticleData]);

  return { state, dispatch };
};


>>>>>>> origin/main
export default useArticleData;