import pregnancyImage from "@/public/how_does_pregnancy_change_mothers_behavior.png";
import hivDrugsImage from "@/public/can_hiv_drugs_help_covid_19_patients.png";
import stopCovidImage from "@/public/how_can_we_help_stop_the_covid_19_pandemic.png";
import biologicalSoftwareImage from "@/public/can_we_write_biological_software_updates_to_cure.png";
import vaccinatedImage from "@/public/can_you_get_vaccinated_without_a_needle.png";
import antibioticsImage from "@/public/what_if_people_use_too_much_antibiotics.png";
import childhoodCancerImage from "@/public/new_funding_to_fight_childhood_cancer.png";
import femaleBabiesCDHImage from "@/public/more_aggressive_treatment_for_female_babies_with_cdh.png";
import brainTumorsImage from "@/public/brain_tumors_in_children_8_warning_signs_you_should.png";
import inflammatoryBowelImage from "@/public/expanding_care_for_children_with_inflammatory_bowel.png";
import { StaticImageData } from "next/image";

export interface IArticle {
  name: string;
  img: string | StaticImageData;
  statusId: string;
  ageRangeId: string;
  source: { id: string; name: string };
}


export const highSchoolArticleData = [
  {
    name: "How Does Pregnancy Change Mothers' Behavior?",
    img: pregnancyImage,
    statusId: "S1J2T3A4R5T6E7E8",
    ageRangeId: "X9Y8Z7W6V5U4T3S2",
    source: { id: "Q1R2S3T4U5V6W7X8", name: "Science Journal for Teens" },
  },
  {
    name: "Can HIV Drugs Help COVID-19 Patients?",
    img: hivDrugsImage,
    statusId: "J8O7U6R5N4A3L2S1",
    ageRangeId: "S2T3U4V5W6X7Y8Z9",
    source: { id: "X8W7V6U5T4S3R2Q1", name: "Science Journal for Teens" },
  },
  {
    name: "How Can We Help Stop the COVID-19 Pandemic?",
    img: stopCovidImage,
    statusId: "H5E4L3P2S1T9O8P7",
    ageRangeId: "A1B2C3D4E5F6G7H8",
    source: { id: "R2S3T4U5V6W7X8Y9", name: "Science Journal for Teens" },
  },
  {
    name: "Can We Write Biological Software Updates to Cure?",
    img: biologicalSoftwareImage,
    statusId: "B3I2O1L9O8G7I6C5",
    ageRangeId: "W6V5U4T3S2R1Q9P8",
    source: { id: "S3T4U5V6W7X8Y9Z0", name: "Science Journal for Teens" },
  },
  {
    name: "Can You Get Vaccinated Without a Needle?",
    img: vaccinatedImage,
    statusId: "V6A5C4C3I2N1A9T8",
    ageRangeId: "T3S2R1Q9P8O7N6M5",
    source: { id: "T4U5V6W7X8Y9Z0A1", name: "Science Journal for Teens" },
  },
  {
    name: "What If People Use Too Much Antibiotics?",
    img: antibioticsImage,
    statusId: "A5N4T3I2B1I9O8T7",
    ageRangeId: "S2R1Q9P8O7N6M5L4",
    source: { id: "U5V6W7X8Y9Z0A1B2", name: "Science Journal for Teens" },
  },
  {
    name: "New Funding to Fight Childhood Cancer",
    img: childhoodCancerImage,
    statusId: "JH1M2D3C4A5N6C7E8",
    ageRangeId: "X9Y8Z7W6V5U4T3S2",
    source: { id: "Q1R2S3T4U5V6W7X8", name: "Johns Hopkins Medicine" },
  },
  {
    name: "More Aggressive Treatment for Female Babies with CDH",
    img: femaleBabiesCDHImage,
    statusId: "C3D2H1T9M8A7F6B5",
    ageRangeId: "S2T3U4V5W6X7Y8Z9",
    source: { id: "X8W7V6U5T4S3R2Q1", name: "Johns Hopkins Medicine" },
  },
  {
    name: "Brain Tumors in Children: 8 Warning Signs You Should Know",
    img: brainTumorsImage,
    statusId: "B5R4A3I2N1T9U8M7",
    ageRangeId: "A1B2C3D4E5F6G7H8",
    source: { id: "R2S3T4U5V6W7X8Y9", name: "Johns Hopkins Medicine" },
  },
  {
    name: "Expanding Care for Children with Inflammatory Bowel Disease",
    img: inflammatoryBowelImage,
    statusId: "I6B5D4C3A2R1E9X8",
    ageRangeId: "W6V5U4T3S2R1Q9P8",
    source: { id: "S3T4U5V6W7X8Y9Z0", name: "Johns Hopkins Medicine" },
  },
];
