import styles from "./side_nav.module.css";
import { IFilter } from "@/app/young-kids/page";
function CheckBox({ label, group }: { label: string; group: string }) {
  return (
    <div className={`flex-row ${styles.checkboxWrapper}`}>
      <input
        type="checkbox"
        name={group}
        value={label}
        className={styles.checkbox}
      />
      <span className={styles.checkboxLabel}>{label}</span>
    </div>
  );
}
// const sources = [
//   "Barnes and Noble",
//   "Cricket - Muse Magazine",
//   "Highlights",
//   "Kids Discover",
//   "Magazine Line",
//   "National Geographic",
//   "National Geographic For Kids",
// ];
function SideNav({ data }: { data: IFilter[] }) {
  return (
    <div className={`${styles.sideNav}`}>
      {data.map((el: IFilter) => (
        <>
          {" "}
          <span className={styles.filterTypeTitle}>{el.filterType}</span>
          {el.filter.map((el) => (
            <CheckBox label={el} group="Source" />
          ))}
        </>
      ))}
    </div>
  );
}

export default SideNav;
