<<<<<<< HEAD
"use client";

import parentMascot from "@/public/parents_mascot.svg";
import { filterData } from "./api/filter_data_parents";
import { parentsArticleData } from "./api/getArticleData";
import React from "react";
import PageContent from "../components/pageContent/PageContent";
import useData from "../hooks/useArticleData";

function Parents() {
  const { state, dispatch } = useData(
    parentsArticleData,
    filterData
  );

  return (
    <PageContent
      state={state}
      dispatch={dispatch}
      filterFilteredArticleList={state.filteredArticleList}
      mascot={parentMascot}
      headerTitle="Parents"
      category="parents"
    />
  );
}

export default Parents;

//local storage hook
//
=======

"use client";

import parentMascot from "@/public/parents_mascot.svg";
import { filterData } from "./api/filter_data_parents";
import { parentsArticleData } from "./api/getArticleData";
import React from "react";
import PageContent from "../components/pageContent/PageContent";
import useData from "../hooks/useArticleData";

function Parents() {
  const { state, dispatch } = useData(
    parentsArticleData,
    filterData
  );

  return (
    <PageContent
      state={state}
      dispatch={dispatch}
      filterFilteredArticleList={state.filteredArticleList}
      mascot={parentMascot}
      headerTitle="Parents"
      category="parents"
    />
  );
}

export default Parents;

//local storage hook
//

>>>>>>> origin/main
