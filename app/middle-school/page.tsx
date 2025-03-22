"use client";
import middleschoolMascot from "@/public/middle_school_mascot.svg";
import { filterData } from "./api/filter_data_middleschool";
import { middleSchoolArticleData } from "./api/getArticleforMiddleSchool";
import React from "react";
import { ActionType } from "../store/actionTypes";
import { ICollectionState } from "../store/stateTypes";
import PageContent from "../components/pageContent/PageContent";
import useArticleData from "../hooks/useArticleData";


export interface IAction {
  type: ActionType;
  payload: ICollectionState;
}

function MiddleSchool() {

  const { state, dispatch } = useArticleData(middleSchoolArticleData, filterData);

  return (
    <PageContent state = {state} 
    dispatch={dispatch} 
    filterFilteredArticleList={state.filteredArticleList} 
    mascot={middleschoolMascot} 
    headerTitle="Middle School"
    category="middleschool"
    />
  );
}

export default MiddleSchool;
