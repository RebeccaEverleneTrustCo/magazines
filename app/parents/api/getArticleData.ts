import { StaticImageData } from "next/image";
import HealthyBuildingImmunity from "@/public/HealthyBuildingImmunity.png";
import HealthyReinforceChildLearning from "@/public/HealthyReinforceChildLearning.png";
import HealthySelfSoothing from "@/public/HealthySelfSoothing.png";
import HealthyStayingSafeInTheSun from "@/public/HealthyStayingSafeInTheSun.png";
import HealthyMentalHealthCare from "@/public/HealthyMentalHealthCare.png";
import NemoursAntibiotics from "@/public/NemoursAntibiotics.png";
import NemoursCovidPandemic from "@/public/NemoursCovidPandemic.png";
import NemoursGetVaccinated from "@/public/NemoursGetVaccinated.png";
import NemoursHIVDrugCOVID from "@/public/NemoursHIVDrugCOVID.png";
import NemoursWriteBiological from "@/public/NemoursWriteBiological.png";
<<<<<<< HEAD
import { IArticle } from "@/app/__mock__/articleDataFormat.ts";
=======

import { IArticle } from "@/app/__mock__/articleDataFormat.ts";

>>>>>>> origin/main
import { API_URLS } from "@/app/appConstants/apiUrlContants";

const imageMap: { [key: string]: StaticImageData } = {
  HealthyStayingSafeInTheSun,
  HealthyMentalHealthCare,
  HealthyBuildingImmunity,
  HealthyReinforceChildLearning,
  HealthySelfSoothing,
  NemoursAntibiotics,
  NemoursGetVaccinated,
  NemoursCovidPandemic,
  NemoursHIVDrugCOVID,
  NemoursWriteBiological,
};

<<<<<<< HEAD
async function fetchArticleData(category: string): Promise<IArticle[]> {
  const response = await fetch(API_URLS.GET_CATEGORY_API_URL(category));
  // const response = await fetch('/api/articles');
=======

async function fetchArticleData(category: string): Promise<IArticle[]> {
  const response = await fetch(API_URLS.GET_CATEGORY_API_URL(category));
  // const response = await fetch('/api/articles');

>>>>>>> origin/main
  const data = await response.json();

  return data.map((article: any) => ({
    ...article,
    img: imageMap[article.img],
  }));
}

let parentsArticleData: IArticle[] = [];

<<<<<<< HEAD
fetchArticleData("parents").then((data) => {
=======

fetchArticleData("parents").then((data) => {

>>>>>>> origin/main
  parentsArticleData = data;
});

export { parentsArticleData };
export type { IArticle };
