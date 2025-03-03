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
    { id: "yApugC9cU8yNrknG", name: "Johns Hopkins Medicine" },
    { id: "pWURKzsQW0NYBKem", name: "Nemours TeensHealth" },
    { id: "lAu8a2MaMmvCAQYR", name: "Science Journal for Teens" },
    { id: "5ZDBexOR9JRA1mrx", name: "Scholastic Magazines+" },
    { id: "KmbvIf2ev89jQtUY", name: "TheSchoolRun" },
    { id: "VmMkCdUxLYp9ZODX", name: "US Education" },
    { id: "VmMkCdUxLYp9ZODY", name: "US News" },
  ],

  ageRangeList: [
    { id: "EybNG0FdPFMFuGG8", name: "16-18 years old" },
    { id: "FpxVKwxvayQwYV3L", name: "18-20 years old" },
  ],
};
