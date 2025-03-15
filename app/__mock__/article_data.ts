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

import coronavirusGlossary from "@/public/coronavirus_glossary.png";
import factsAboutCoronavirus from "@/public/facts_about_coronavirus.png";
import healthProblems from "@/public/health_problems.png";
import howTheBodyWorks from "@/public/how_the_body_works.png";
import illnessAndInjuries from "@/public/illness_and_injuries.png";
import kidsMedicalDictionary from "@/public/kids_medical_dictionary.png";
import pubertyAndGrowing from "@/public/puberty_and_growing.png";
import stayingHealthy from "@/public/staying_healthy.png";
import { IFilter } from "./filter_data";
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



export interface IArticle {
  name: string;
  img: StaticImageData;
  statusId: string;
  ageRangeId: string;
  source: IFilter;
  isFavorite?: boolean;
}

export const youngKidsArticleData: IArticle[] = [
  {
    name: "Brainpower",
    img: brainpowerCricketMuseMagazine,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
  },

  {
    name: "The Way I See It",
    img: theWayISeeItCricketMuseMagazine,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
  },

  {
    name: "Hear & Now",
    img: hereAndNowCricketMuseMagazine,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
  },
  {
    name: "Make and Play",
    img: makeAndPlayCricketMuseMagazine,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
  },

  {
    name: "Show Me How",
    img: showMeHowCricketMuseMagazine,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
  },

  {
    name: "Why do we lose our voice?",
    img: whyDoWeLoseOurVoiceHighlights,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
  },

  {
    name: "Why do heights make us dizzy?",
    img: whyDoHeightsMakeUsDizzyHighlights,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
  },

  {
    name: "How does the heart pump blood?",
    img: howDoesYourHeartPumpBloodHighlights,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
  },

  {
    name: "What is ear cartilage?",
    img: whatIsEarCartilageHighlights,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
  },

  {
    name: "Why do we yawn?",
    img: whyDoWeYawnHighlights,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
  },

  {
    name: "The Heart's Purpose and Function",
    img: theHeartsPurposeAndFunctionKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },
  {
    name: "How Bones Work",
    img: howBonesWorkKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },
  {
    name: "How the Eyes Work",
    img: howTheEyesWorkKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },

  {
    name: "How White Blood Cells Fight Germs",
    img: howWbcFihtGermsKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },
  {
    name: "The Brain's Growth and Development",
    img: theBrainsGrowthAndDevKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },

  {
    name: "The Skin's Many Jobst",
    img: theSkinsManyJobsKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },

  {
    name: "Different Ways Lungs Help",
    img: differentWaysLungsHelpKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },

  {
    name: "DNA",
    img: dnaKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },
  {
    name: "The Body's Major Muscles",
    img: theBodysMajorMuscles,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },
  {
    name: "The Senses",
    img: theSensesKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },
  {
    name: "What Is the Study of Nutrition?",
    img: whatIsTheStudyOfNutritionKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },

  {
    name: "Germs Are Everywhere",
    img: germsAreEverywhereKidsDiscover,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
  },

  {
    name: "A Focus on Eyes",
    img: aFocusOnEyesTimesMagazineKids,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "EybNG0FdPFMFuGG8",
    source: { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  },

  {
    name: "Be Mindful",
    img: beMindfulTimesMagazineKids,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "EybNG0FdPFMFuGG8",
    source: { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  },

  {
    name: "All About Bones",
    img: allAboutBonesTimesMagazineKids,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "EybNG0FdPFMFuGG8",
    source: { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  },
  {
    name: "Feeling the Heat",
    img: feelingTheHeatTimesMagazineKids,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "EybNG0FdPFMFuGG8",
    source: { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  },

  {
    name: "A Safer Sport",
    img: aSaferSportTimesMagazineKids,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "EybNG0FdPFMFuGG8",
    source: { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  },

  {
    name: "Summer Safety",
    img: summerSafetyTimesMagazineKids,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "EybNG0FdPFMFuGG8",
    source: { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  },

  {
    name: "Facts About Coronavirus",
    img: factsAboutCoronavirus,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "FpxVKwxvayQwYV3L",
    source: { id: "h2wRKGfculskIaKz", name: "National Geographic For Kids" },
  },

  {
    name: "Coronavirus Glossary",
    img: coronavirusGlossary,
    statusId: "rNtJ7GnFBy4jgyUC",
    ageRangeId: "6ugoCKQIbfFBT6lE",
    source: { id: "h2wRKGfculskIaKz", name: "National Geographic For Kids" },
  },
];

