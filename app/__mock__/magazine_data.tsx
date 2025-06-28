
import { StaticImageData } from "next/image";
import cp from "@/public/cp.png";
import barnesAndNoble from "@/public/barnes_noble.png";
import cricket from "@/public/cricket.png";
import frontier from "@/public/frontier.png";
import healthyChildren from "@/public/healthykids_org.png";
import highlightKids from "@/public/highlight_kids.png";
import johnHopkins from "@/public/john_hopkins.png";
import kidsDiscover from "@/public/kids_discover.png";
import kidsHealth from "@/public/kids_health.png";
import momEducates from "@/public/mum_educates.png";
import magazineLine from "@/public/magazine_line.png";
import nationalGeographic from "@/public/national_geographic.png";
import ngKids from "@/public/ng_kids.png";
import nemours from "@/public/nemours_kids_health.png";
import nemoursTeen from "@/public/nemours_teen_health.png";

import nemoursChildren from "@/public/nemours_children_health.png";
import scieceJournal from "@/public/science_journal.png";
import schoolReadingList from "@/public/school_reading_list.png";
import scholasticMagazines from "@/public/scholastic_magazines.png";
import theSchoolRun from "@/public/the_school_run.png";
import timeKids from "@/public/time_kids.png";
import usNews from "@/public/us_news.png";

export interface IMagazine {
  name: string;
  src: StaticImageData;
  title: string;
  body: string;
  ageRange: number;
}

export const magazineData: IMagazine[] = [
  {
    name: "Barnes&Noble",
    src: barnesAndNoble,
    title: "Ages 4-10",
    body: "Online bookstore for purchasing e-books and paperback materials to teach kids about the anatomy of the body and their body parts in exciting and fun ways.",
    ageRange: 0,
  },
  {
    name: "CP",
    src: cp,
    title: "Parents and Kids",
    body: "Chicagoland’s trusted parenting hub since 1984. We connect families with the best local resources, advice, stories, things to do with kids and much more.",
    ageRange: 3,
  },

  {
    name: "Cricket",
    src: cricket,
    title: "Ages 0-14",
    body: "For more than 40 years, Cricket Media’s Award-Winning magazines have educated, entertained, and inspired children ranging in age from toddlers to teens.",
    ageRange: 0,
  },

  {
    name: "Frontiers",
    src: frontier,
    title: "Ages 10+",
    body: "Science for kids, edited by kids. An open-access scientific journal written by scientists and reviewed by a board of kids and teens.",
    ageRange: 2,
  },

  {
    name: "HealthyChildren",
    src: healthyChildren,
    title: "Parents and Kids",
    body: "Learn about fun and exciting things that you can do with your parents any time of year. The magazine series will also show you how to keep your body healthy.",
    ageRange: 3,
  },
  {
    name: "Highlight Kids",
    src: highlightKids,
    title: "Ages 6-12",
    body: "The Highlights for Kids website features interactive games, puzzles, stories, and educational activities for elementary school-aged children.",
    ageRange: 2,
  },
  {
    name: "John Hopkins",
    src: johnHopkins,
    title: "Parents & Students",
    body: "Read articles about interesting achievements that have been made by role models in the medical field. Learn how they help kids like you live exciting lives.",
    ageRange: 3,
  },
  {
    name: "Kids Discover",
    src: kidsDiscover,
    title: "Ages 6-14",
    body: "Kids Discover is an award-winning educational publisher of high-interest, nonfiction products for kids. Print Titles, iPad Apps and Digital Library.",
    ageRange: 0,
  },
  {
    name: "Kids Health",
    src: kidsHealth,
    title: "Parents and Kids",
    body: "Get mom and dad involved in your health. This magazine will show them how to take care of your inside and outside body parts and show fun ways to do it. ",
    ageRange: 3,
  },

  {
    name: "Mom Educates",
    src: momEducates,
    title: "Parents and Kids",
    body: "An educational website with 100s of free primary resources, worksheets, articles and teaching ideas for Reception, Year 1, Year 2 and Year 3 children.",
    ageRange: 3,
  },
  {
    name: "Magazine Line",
    src: magazineLine,
    title: "Ages 6-12",
    body: "Are you interested in all things science? Can't get enough of astronomy, animals, and psychology? Learn science news, and little-known exciting facts.",
    ageRange: 1,
  },
  {
    name: "National Geographic",
    src: nationalGeographic,
    title: "Ages 6+",
    body: "Issues are Loaded with Fun Facts, Stories, Games, and More! National Geographic Kids is a children's magazine published by the National Geographic Society.",
    ageRange: 1,
  },
  {
    name: "National Geographic Kids",
    src: ngKids,
    title: "Ages 4-10",
    body: "Cool things happen inside of you every day, like exciting battles against good versus evil. Learn which body parts protect you from invaders and lead the charge.",
    ageRange: 0,
  },

  {
    name: "Nemours Kids Health",
    src: nemours,
    title: "Ages 4-18",
    body: "Watch fun and exciting cartoons that teach you about the body. From getting prepared for surgery to learning how each part of you is special, Dr. Binoc helps you learn.",
    ageRange: 0,
  },

  {
    name: "Nemours Teen Health",
    src: nemoursTeen,
    title: "Ages 10-18",
    body: "This site is filled with expert advice, relatable articles, and interactive tools covering all aspects of adolescence.",
    ageRange: 1,
  },

  {
    name: "Nemours Children Health",
    src: nemoursChildren,
    title: "Parents",
    body: "Our magazines enable you to enhance your child's development across various aspects of life, including health and psychology.",
    ageRange: 3,
  },

  {
    name: "Science Journal",
    src: scieceJournal,
    title: "Ages 10-14",
    body: "Hundreds of scientific articles. Written for kids. Approved by scientists. Free.",
    ageRange: 1,
  },
  {
    name: "Science Journal 2",
    src: scieceJournal,
    title: "Ages 15-18",
    body: "Hundreds of scientific articles. Written for teens. Approved by scientists. Free.",
    ageRange: 2,
  },

  {
    name: "School Reading List",
    src: schoolReadingList,
    title: "Ages 4-10",
    body: "Magazines for children, tweens and teens, including comics and newspapers for children. This list features titles for use in primary and secondary school kids.",
    ageRange: 0,
  },

  {
    name: "Scholastic Magazines",
    src: scholasticMagazines,
    title: "Ages 6-18",
    body: "Our health magazine collection provides your students with the tools they need to be healthy and make good decisions in their daily lives.",
    ageRange: 0,
  },
  {
    name: "The School Run",
    src: theSchoolRun,
    title: "All Ages",
    body: "Looking for a fun- AND fact-packed publication? The selections here offer puzzles, artwork, fiction, science projects to complete, history, and hands-on making.",
    ageRange: 2,
  },

  {
    name: "Time For Kids",
    src: timeKids,
    title: "Ages 6-12",
    body: "Are you interested in all things science? Can't get enough of astronomy, animals, and psychology? Learn science news, and little-known exciting facts.",
    ageRange: 1,
  },

  {
    name: "US News",
    src: usNews,
    title: "Ages 12+",
    body: "Learn about requirements for entering medical school, how you will be challenged as a student and the rewarding experience you will have as a medical student. ",
    ageRange: 1,
  },
];
