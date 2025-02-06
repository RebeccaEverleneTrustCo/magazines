import styles from "./side_nav.module.css";
import { IFilter, IResult } from "../../data/filter_data";
import removeIcon from "@/public/remove_icon.svg";
import Image from "next/image";
import { useState } from "react";

import {
  ICollectionState,
  IAction,
  ActionType,
  IFilterHash,
} from "../../young-kids/page";

function CheckBox({
  label,
  group,
  checked,
  onClick,
}: {
  label: string;
  group: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`flex-row ${styles.checkboxWrapper}`} onClick={onClick}>
      <input
        type="checkbox"
        name={group}
        value={label}
        className={styles.checkbox}
        checked={checked}
      />
      <span
        className={`${styles.checkboxLabel} ${
          checked ? styles.tcBlack : styles.tcGray
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function SideNav({
  state,
  dispatch,
}: {
  state: ICollectionState;
  dispatch: React.Dispatch<IAction>;
}) {
  return (
    <div className={`${styles.sideNav}`}>
      <span className={styles.filterTypeTitle}>Status</span>
      {state.statusList.map((status: IFilter) => (
        <CheckBox
          label={status.name}
          group="status"
          checked={status.id === state.selectedStatus.id}
          onClick={() => {
            dispatch({
              type: ActionType.SetSelectedStatus,
              payload: {
                ...state,
                selectedStatus: status,
              },
            });
          }}
        />
      ))}

      <span className={styles.filterTypeTitle}>Sources</span>
      {state.sourceList.map((source: IFilter) => (
        <CheckBox
          label={source.name}
          group="sources"
          checked={source.id in state.selectedSourceIds}
          onClick={() => {
            const sourceIds: IFilterHash = { ...state.selectedSourceIds };
            if (source.id in state.selectedSourceIds) {
              delete sourceIds[source.id];
            } else {
              sourceIds[source.id] = "";
            }

            dispatch({
              type: ActionType.SetSelectedSources,
              payload: {
                ...state,
                selectedSourceIds: sourceIds,
              },
            });
          }}
        />
      ))}

      <span className={styles.filterTypeTitle}>Age Range</span>
      {state.ageRangeList.map((ageRange: IFilter) => (
        <CheckBox
          label={ageRange.name}
          group="age_range"
          checked={ageRange.id in state.selectedAgeRangeIds}
          onClick={() => {
            const ageRangeIds: IFilterHash = { ...state.selectedAgeRangeIds };
            if (ageRange.id in state.selectedAgeRangeIds) {
              delete ageRangeIds[ageRange.id];
            } else {
              ageRangeIds[ageRange.id] = "";
            }

            dispatch({
              type: ActionType.SetSelectedAgeRange,
              payload: {
                ...state,
                selectedAgeRangeIds: ageRangeIds,
              },
            });
          }}
        />
      ))}

      <div className={`flex-row ${styles.buttonWrapper}`}>
        <button
          className={`button ${styles.applyButton}`}
          onClick={() => {
            dispatch({
              type: ActionType.SetFilteredArticles,
              payload: {
                ...state,
              },
            });
          }}
        >
          Apply Filter
        </button>

        <div
          className={`${styles.clearButton} flex-row`}
          onClick={() => {
            dispatch({
              type: ActionType.ClearFilters,
              payload: { ...state },
            });
          }}
        >
          <Image src={removeIcon} alt="Remove" className={styles.clearIcon} />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
