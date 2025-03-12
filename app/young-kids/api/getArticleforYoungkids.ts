import { StaticImageData } from "next/image";
import whyDoWeYawnHighlights from "@/public/why_do_we_yawn_highlights.png";
import beMindfulTimesMagazineKids from "@/public/be_mindful_times_magazine_kids.png";
import allAboutBonesTimesMagazineKids from "@/public/all_about_bones_times_magazine_kids.png";
import brainpowerCricketMuseMagazine from "@/public/brainpower_cricket_muse_magazine.jpg";
import theWayISeeItCricketMuseMagazine from "@/public/the_way_i_see_it_cricket_muse_magazine.jpg";
import hereAndNowCricketMuseMagazine from "@/public/here_and_now_cricket_muse_magazine.jpg";
import makeAndPlayCricketMuseMagazine from "@/public/make_and_play__cricket_muse_magazine.jpg";
import showMeHowCricketMuseMagazine from "@/public/show_me_how_cricket_muse_magazine.jpg";
import whyDoWeLoseOurVoiceHighlights from "@/public/why_do_we_lose_our_voice_highlights.png";
import howDoesYourHeartPumpBloodHighlights from "@/public/how_does_your_heart_pump_blood_highlights.png";
import whatIsEarCartilageHighlights from "@/public/what_is_ear_cartilage_highlights.png";
import whyDoHeightsMakeUsDizzyHighlights from "@/public/why_do_heights_make_us_dizzy_highlights.png";
import howBonesWorkKidsDiscover from "@/public/how_bones_work_kids_discover.png";
import howTheEyesWorkKidsDiscover from "@/public/how_the_eyes_work_kids_discover.png";
import theHeartsPurposeAndFunctionKidsDiscover from "@/public/the_hearts_purpose_and_function_kids_discover.png";
import differentWaysLungsHelpKidsDiscover from "@/public/different_ways_lungs_help_kids_discover.png";
import dnaKidsDiscover from "@/public/dna_kids_discover.png";
import howWbcFihtGermsKidsDiscover from "@/public/how_wbc_fiht_germs_kids_discover.png";
import theBodysMajorMuscles from "@/public/the_bodys_major_muscles.png";
import theBrainsGrowthAndDevKidsDiscover from "@/public/the_brains_growth_and_dev_kids_discover.png";
import theSensesKidsDiscover from "@/public/the_senses_kids_discover.png";
import theSkinsManyJobsKidsDiscover from "@/public/the_skins_many_jobs_kids_discover.png";
import whatIsTheStudyOfNutritionKidsDiscover from "@/public/what_is_the_study_of_nutrition_kids_discover.png";
import germsAreEverywhereKidsDiscover from "@/public/germs_are_everywhere_kids_discover.png";
import aFocusOnEyesTimesMagazineKids from "@/public/a_focus_on_eyes_times_magazine_kids.png";
import aSaferSportTimesMagazineKids from "@/public/a_safer_sport_times_magazine_kids.png";
import feelingTheHeatTimesMagazineKids from "@/public/feeling_the_heat_times_magazine_kids.png";
import summerSafetyTimesMagazineKids from "@/public/summer_safety_times_magazine_kids.png";



import { IArticle } from "@/app/__mock__/articleDataFormat.ts";
import { API_URLS } from "@/app/appConstants/apiUrlContants";

const imageMap: { [key: string]: StaticImageData } = {
    whyDoWeYawnHighlights,
    beMindfulTimesMagazineKids,
    allAboutBonesTimesMagazineKids,
    brainpowerCricketMuseMagazine,
    theWayISeeItCricketMuseMagazine,
    hereAndNowCricketMuseMagazine,
    makeAndPlayCricketMuseMagazine,
    showMeHowCricketMuseMagazine,
    whyDoHeightsMakeUsDizzyHighlights,
    whyDoWeLoseOurVoiceHighlights,
    howDoesYourHeartPumpBloodHighlights,
    whatIsEarCartilageHighlights,
    howBonesWorkKidsDiscover,
    howTheEyesWorkKidsDiscover,
    theHeartsPurposeAndFunctionKidsDiscover,
    differentWaysLungsHelpKidsDiscover,
    dnaKidsDiscover,
    howWbcFihtGermsKidsDiscover,
    theBodysMajorMuscles,
    theBrainsGrowthAndDevKidsDiscover,
    theSensesKidsDiscover,
    theSkinsManyJobsKidsDiscover,
    whatIsTheStudyOfNutritionKidsDiscover,
    germsAreEverywhereKidsDiscover,
    aFocusOnEyesTimesMagazineKids,
    aSaferSportTimesMagazineKids,
    feelingTheHeatTimesMagazineKids,
    summerSafetyTimesMagazineKids
  };
  
  async function fetchYoungKidsArticleData(): Promise<IArticle[]> {
    const response = await fetch('/api/articles');
    
    // const response = await fetch(API_URLS.GET_YOUNGKIDS_API_URL);
    const data = await response.json();
  
    return data.map((article: any) => ({
      ...article,
      img: imageMap[article.img],
    }));
  }
  
  let youngKidsArticleData: IArticle[] = [];
  
  fetchYoungKidsArticleData().then((data) => {
    youngKidsArticleData = data;
  });
  
  export { youngKidsArticleData };
  export type { IArticle };
  