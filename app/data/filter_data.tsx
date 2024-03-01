export interface IFilter {
  id: string;
  name: string;
}

export interface IResult {
  statusList: IFilter[];
  sourcesList: IFilter[];
  ageRangeList: IFilter[];
}
export const filterData: IResult = {
  statusList: [
    {
      id: "rNtJ7GnFBy4jgyUC",
      name: "Unread",
    },
    {
      id: "Karlh7QHaQrS7G3c",
      name: "Finish Reading",
    },
  ],
  sourcesList: [
    { id: "yApugC9cU8yNrknG", name: "Barnes and Noble" },
    { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
    { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
    { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
    { id: "9yjaj8rPtW8bsae8", name: "Magazine Line" },
    { id: "r4vRFpceW7JwLIM8", name: "National Geographic" },
    { id: "h2wRKGfculskIaKz", name: "National Geographic For Kids" },
    { id: "e3m5I6E4QdkNcApq", name: "Nemours KidsHealth" },
    { id: "lAu8a2MaMmvCAQYR", name: "Science Journal for Kids" },
    { id: "mFHHY7nUhLZ8ZPkz", name: "School Reading List" },
    { id: "5ZDBexOR9JRA1mrx", name: "Scholastic Magazines+" },
    { id: "KmbvIf2ev89jQtUY", name: "TheSchoolRun" },
    { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
  ],
  ageRangeList: [
    { id: "EybNG0FdPFMFuGG8", name: "3-5 years old" },
    { id: "FpxVKwxvayQwYV3L", name: "5-7 years old" },
    { id: "6ugoCKQIbfFBT6lE", name: "7-9 years old" },
  ],
};
