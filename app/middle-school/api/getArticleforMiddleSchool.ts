import { StaticImageData } from "next/image";
import whatHappensIfYouDoNotGetEnoughSleep from "@/public/what_happens_if_you_do_not_get_enough_sleep.png";
import whyDoSomePeopleHaveDownSyndrome from "@/public/why_do_some_people_have_down_syndrome.png";
import medicineGetsProactivePreventionIsBetterThan from "@/public/medicine_gets_proactive_prevention_is_better_than.png";
import howAlcoholAffectsTheAdolescentMind from "@/public/how_alcohol_affects_the_adolescent_mind.png";
import howCanGoodBacteriaImproveBoneHealth from "@/public/how_can_good_bacteria_improve_bone_health.png";
import keepingYourJointsFlexibleThroughoutLife from "@/public/keeping_your_joints_flexible_throughout_life.png";
import body from "@/public/body.png";
import mind from "@/public/mind.png";
import sexualHealth from "@/public/sexual_health.png";
import drugsAndAlcohol from "@/public/drugs_and_alcohol.png";
import sports from "@/public/sports.png";
import expertAnswersQA from "@/public/expert_answers_q_a.png";
import howIsHeartDiseaseDifferentForWomenAndMen from "@/public/how_is_heart_disease_different_for_women_and_men.png";
import howAreAgingAndGutBacteriaRelated from "@/public/how_are_aging_and_gut_bacteria_related.png";
import howCanWePreventCervicalCancerInMongolia from "@/public/how_can_we_prevent_cervical_cancer_in_mongolia.png";
import howWellDoMasksProtectAgainstCovid19 from "@/public/how_well_do_masks_protect_against_covid_19.png";
import canGrapheneInYourClothingStopMosquitoBites from "@/public/can_graphene_in_your_clothing_stop_mosquito_bites.png";
import yourBodyOnNicotine from "@/public/your_body_on_nicotine.png";
import theHeartsPurposeAndFunction from "@/public/the_hearts_purpose_and_function_kids_discover.png";
import howBonesWork from "@/public/how_bones_work_kids_discover.png";
import howTheEyesWork from "@/public/how_the_eyes_work_kids_discover.png";
import aFocusOnEyes from "@/public/a_focus_on_eyes_times_magazine_kids.png";
import beMindful from "@/public/be_mindful_times_magazine_kids.png";
import allAboutBones from "@/public/all_about_bones_times_magazine_kids.png";
import  howCanSyntheticProteinsHelpPrematureBabies from "@/public/how_can_synthetic_proteins_help_premature_babies.png";




import { IArticle } from "@/app/__mock__/articleDataFormat.ts";
import { API_URLS } from "@/app/appConstants/apiUrlContants";

const imageMap: { [key: string]: StaticImageData } = {
    whatHappensIfYouDoNotGetEnoughSleep,
    whyDoSomePeopleHaveDownSyndrome,
    medicineGetsProactivePreventionIsBetterThan,
    howAlcoholAffectsTheAdolescentMind,
    howCanGoodBacteriaImproveBoneHealth,
    keepingYourJointsFlexibleThroughoutLife,
    body,
    mind,
    sexualHealth,
    drugsAndAlcohol,
    sports,
    expertAnswersQA,
    howIsHeartDiseaseDifferentForWomenAndMen,
    howAreAgingAndGutBacteriaRelated,
    howCanWePreventCervicalCancerInMongolia,
    howWellDoMasksProtectAgainstCovid19,
    canGrapheneInYourClothingStopMosquitoBites,
    yourBodyOnNicotine,
    theHeartsPurposeAndFunction,
    howBonesWork,
    howTheEyesWork,
    aFocusOnEyes,
    beMindful,
    allAboutBones,
    howCanSyntheticProteinsHelpPrematureBabies
  };
  
  async function fetchMiddleSchoolArticleData(): Promise<IArticle[]> {
    const response = await fetch(API_URLS.GET_MIDDLESCHOOL_API_URL);
    const data = await response.json();
  
    return data.map((article: any) => ({
      ...article,
      img: imageMap[article.img],
    }));
  }
  
  let middleSchoolArticleData: IArticle[] = [];
  
  fetchMiddleSchoolArticleData().then((data) => {
    middleSchoolArticleData = data;
  });
  
  export { middleSchoolArticleData };
  export type { IArticle };
  