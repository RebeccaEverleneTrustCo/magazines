"use client";
import highschoolMascot from "@/public/high_school_mascot.svg";
import { filterData } from "./api/filter_data_highschool";
import { highSchoolArticleData } from "./api/getArticleforHighSchool";
import React from "react";
import { ActionType } from "../store/actionTypes";
import { ICollectionState } from "../store/stateTypes";
import PageContent from "../components/pageContent/PageContent";
import useArticleData from "../hooks/useArticleData";


export interface IAction {
  type: ActionType;
  payload: ICollectionState;
}

function HighSchool() {

  const { state, dispatch } = useArticleData(highSchoolArticleData, filterData);

  return (
    <PageContent state = {state} 
    dispatch={dispatch} 
    filterFilteredArticleList={state.filteredArticleList} 
    mascot={highschoolMascot} 
    headerTitle="High School"
    category="highschool"
    />
  );
}

export default HighSchool;
