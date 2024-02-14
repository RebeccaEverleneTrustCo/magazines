import styles from "./page.module.css";
import youngKidsMascot from "@/public/young_kids_mascot.svg";
import HeaderBar from "../components/header_bar/header_bar";
import SideNav from "../components/side_nav/side_nav";
import CollectionHeader from "../components/collection_header/collection_header";

export interface IFilter {
  filterType: string;
  filter: string[];
}
const data: IFilter[] = [
  {
    filterType: "Status",
    filter: ["Unread", "Finish Reading"],
  },
  {
    filterType: "Sources",
    filter: [
      "Barnes and Noble",
      "Cricket - Muse Magazine",
      "Highlights",
      "Kids Discover",
      "Magazine Line",
      "National Geographic",
      "National Geographic For Kids",
      "Nemours KidsHealth",
      "Science Journal for Kids",
      "School Reading List",
      "Scholastic Magazines+",
      "TheSchoolRun",
      "Time Magazine for Kids",
    ],
  },
  {
    filterType: "Age Range",
    filter: ["3-5 years old", "5-7 years old", "7-9 years old"],
  },
];
function YoungKids() {
  return (
    <div className={`flex-column ${styles.main}`}>
      <CollectionHeader src={youngKidsMascot} headerTitle="Young Kids" />

      <div className={`${styles.body}`}>
        <HeaderBar />

        <div className={`flex-row`}>
          <SideNav data={data} />
          <div className={`${styles.content} flex-column`}> Content</div>
        </div>
      </div>
    </div>
  );
}

export default YoungKids;
