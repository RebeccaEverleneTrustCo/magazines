"use client";
import youngKidsMascot from "@/public/young_kids_mascot.svg";
import { filterData } from "../__mock__/filter_data";
import { youngKidsArticleData } from "../__mock__/article_data";
import React from "react";
import { ActionType } from "../store/actionTypes";
import { ICollectionState } from "../store/stateTypes";
import PageContent from "../components/pageContent/PageContent";
import useArticleData from "../hooks/useArticleData";


export interface IAction {
  type: ActionType;
  payload: ICollectionState;
}

function YoungKids() {

  const { state, dispatch } = useArticleData(youngKidsArticleData, filterData);

  return (
    <PageContent state = {state} 
    dispatch={dispatch} 
    filterFilteredArticleList={state.filteredArticleList} 
    mascot={youngKidsMascot} 
    headerTitle="Young Kids"
    />
  );
}

export default YoungKids;
