import { StaticImageData } from "next/image";

export interface IFilter {
  id: string;
  name: string;
}

export interface IArticle {
  name: string;
  img: StaticImageData;
  description: string;
  statusId: string;
  ageRangeId?: string;
  source: IFilter;
  isFavorite?: boolean;

  // New fields
  likes?: number;
  publishDate?: string;
}

export interface IResult {
  statusList: IFilter[];
  sourcesList: IFilter[];
  ageRangeList?: IFilter[];
}