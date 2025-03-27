import styles from "./side_nav.module.css";
import { IFilter, IResult } from "../../__mock__/filter_data";
import CheckBox from "../checkbox";
import removeIcon from "@/public/remove_icon.svg";
import Image from "next/image";
import { ActionType } from "../../store/actionTypes";
import {  IAction } from "../../young-kids/page";
import { IFilterHash } from "@/app/store/IFilterHash";
import { ICollectionState } from "@/app/store/stateTypes";



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
      {state.ageRangeList && state.ageRangeList.length > 0 && (
        <>
          <span className={styles.filterTypeTitle}>Age Range</span>

          {state.ageRangeList.map((ageRange: IFilter) => (
            <CheckBox
              label={ageRange.name}
              group="age_range"
              checked={ageRange.id in state.selectedAgeRangeIds}
              onClick={() => {
                const ageRangeIds: IFilterHash = {
                  ...state.selectedAgeRangeIds,
                };
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
        </>
      )}
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

        <div className={`${styles.clearButton} flex-row`}>
          <Image
            src={removeIcon}
            alt="Remove"
            className={styles.clearIcon}
            onClick={() => {
              dispatch({
                type: ActionType.ClearFilters,
                payload: {
                  ...state,
                  selectedSourceIds: {},
                  selectedAgeRangeIds: {},
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
