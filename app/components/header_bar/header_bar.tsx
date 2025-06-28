
import styles from "./header_bar.module.css";
import Input from "../input/input";
import { initialState } from "../../store/initialState";
import { ActionType } from "../../store/actionTypes";
import React, { use, useState, useEffect } from "react";
import { IAction, ICollectionState } from "@/app/store/stateTypes";

function HeaderBar({
  state,
  dispatch,
  headerTitle,
}: {
  state: ICollectionState;
  dispatch: React.Dispatch<IAction>;
  headerTitle: string;
}) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch({
      type: ActionType.SetSearchText,
      payload: {
        ...state,
        searchText,
      },
    });
  }, [searchText, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <div className={`flex-row ${styles.wrapper}`}>
      <div className={`flex-column ${styles.breadcrumbWrapper}`}>
        <span className={`${styles.navText}`}>
          <span className={styles.tcGray}>{"Magazines >"}</span> {headerTitle}
        </span>

        <span className={styles.collectionText}>{headerTitle} Collection</span>
      </div>

      <Input
        placeholder="Enter your keywords ..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default HeaderBar;

