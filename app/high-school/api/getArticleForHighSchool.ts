import { StaticImageData } from "next/image";

import canYouGetVaccinatedWithoutANeedle from "@/public/can_you_get_vaccinated_without_a_needle.png";
import howCanWeHelpStopTheCovid19Pandemic from "@/public/how_can_we_help_stop_the_covid19_pandemic.png";
import canHivDrugsHelpCovid19Patients from "@/public/can_hiv_drugs_help_covid19_patients.png";
import whatIfPeopleUseTooMuchAntibiotics from "@/public/what_if_people_use_too_much_antibiotics.png";
import canWeWriteBiologicalSoftwareUpdatesToCure from "@/public/can_we_write_biological_software_updates_to_cure.png";
import howDoesPregnancyChangeMothersBehaviour from "@/public/how_does_pregnancy_change_mothers_behaviour.png";
import brainTumorsInChildren8WarningSignsYouShould from "@/public/brain_tumors_in_children_8_warning_signs_you_should.png";
import moreAggressiveTreatmentForFemaleBabiesWithCdh from "@/public/more_aggressive_treatment_for_female_babies_with_cdh.png";
import newFundingToFightChildhoodCancer from "@/public/new_funding_to_fight_childhood_cancer.png";
import expandingCareForChildrenWithInflammatoryBowel from "@/public/expanding_care_for_children_with_inflammatory_bowel.png";

import highSchoolData from "@/public/highSchoolData.json";

import { IArticle } from "@/app/__mock__/articleDataFormat.ts";

export const imageMap: { [key: string]: StaticImageData } = {
  canYouGetVaccinatedWithoutANeedle,
  howCanWeHelpStopTheCovid19Pandemic,
  canHivDrugsHelpCovid19Patients,
  whatIfPeopleUseTooMuchAntibiotics,
  canWeWriteBiologicalSoftwareUpdatesToCure,
  howDoesPregnancyChangeMothersBehaviour,
  brainTumorsInChildren8WarningSignsYouShould,
  moreAggressiveTreatmentForFemaleBabiesWithCdh,
  newFundingToFightChildhoodCancer,
  expandingCareForChildrenWithInflammatoryBowel,
};

export const highSchoolArticleData: IArticle[] = highSchoolData.map(
  (article: any) => ({
    ...article,
    img: imageMap[article.img],
  })
);

export type { IArticle };